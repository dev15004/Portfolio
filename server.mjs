import { createServer } from 'node:http'
import crypto from 'node:crypto'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { MongoClient } from 'mongodb'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const envFilePath = path.join(__dirname, '.env')
const localSubmissionsPath = path.join(__dirname, 'data', 'contact-submissions.json')

const loadEnvFile = async () => {
  try {
    const raw = await fs.readFile(envFilePath, 'utf8')

    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim()

      if (!trimmed || trimmed.startsWith('#')) {
        continue
      }

      const separatorIndex = trimmed.indexOf('=')

      if (separatorIndex === -1) {
        continue
      }

      const key = trimmed.slice(0, separatorIndex).trim()
      const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '')

      if (key && !(key in process.env)) {
        process.env[key] = value
      }
    }
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      console.warn('Unable to load .env file:', error.message)
    }
  }
}

await loadEnvFile()

const port = Number(process.env.PORT || 3001)
const mongoUri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB_NAME || 'portfolio'
const collectionName = process.env.MONGODB_COLLECTION || 'contact_submissions'
const adminApiKey = process.env.ADMIN_API_KEY || ''

let mongoClient
let submissionsCollection

const readLocalSubmissions = async () => {
  try {
    const raw = await fs.readFile(localSubmissionsPath, 'utf8')
    return JSON.parse(raw)
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return []
    }

    throw error
  }
}

const writeLocalSubmissions = async (submissions) => {
  await fs.mkdir(path.dirname(localSubmissionsPath), { recursive: true })
  await fs.writeFile(localSubmissionsPath, JSON.stringify(submissions, null, 2))
}

const loadSubmissions = async () => {
  if (!mongoUri) {
    return readLocalSubmissions()
  }

  try {
    const collection = await ensureDatabase()
    return await collection.find({}).sort({ createdAt: -1 }).toArray()
  } catch (error) {
    console.warn('MongoDB unavailable, reading local submissions instead:', error.message)
    return readLocalSubmissions()
  }
}

const saveSubmission = async (submission) => {
  if (mongoUri) {
    try {
      const collection = await ensureDatabase()
      await collection.insertOne(submission)
      return 'mongodb'
    } catch (error) {
      console.warn('MongoDB unavailable, saving submission locally instead:', error.message)
    }
  }

  const submissions = await readLocalSubmissions()
  submissions.unshift(submission)
  await writeLocalSubmissions(submissions)
  return 'local'
}

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': process.env.FRONTEND_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,x-admin-key',
  })
  response.end(JSON.stringify(payload))
}

const safeParse = async (request) => {
  const chunks = []

  for await (const chunk of request) {
    chunks.push(chunk)
  }

  if (chunks.length === 0) {
    return {}
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

const validateSubmission = (data) => {
  const errors = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.')
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || !emailPattern.test(data.email)) {
    errors.push('A valid email address is required.')
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.')
  }

  return errors
}

const ensureDatabase = async () => {
  if (!mongoUri) {
    throw new Error('Missing MONGODB_URI. Falling back to local JSON storage.')
  }

  if (!submissionsCollection) {
    mongoClient = new MongoClient(mongoUri)
    await mongoClient.connect()
    submissionsCollection = mongoClient.db(dbName).collection(collectionName)
  }

  return submissionsCollection
}

const createSubmission = (body) => ({
  id: crypto.randomUUID(),
  name: body.name.trim(),
  email: body.email.trim(),
  company: body.company?.trim() || '',
  projectType: body.projectType?.trim() || 'General enquiry',
  budget: body.budget?.trim() || 'Not specified',
  timeline: body.timeline?.trim() || 'Flexible',
  message: body.message.trim(),
  createdAt: new Date().toISOString(),
})

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`)

  if (request.method === 'OPTIONS') {
    sendJson(response, 200, { ok: true })
    return
  }

  if (request.method === 'GET' && url.pathname === '/api/health') {
    sendJson(response, 200, {
      ok: true,
      service: 'contact-api',
      mongoConfigured: Boolean(mongoUri),
    })
    return
  }

  if (request.method === 'GET' && url.pathname === '/api/contact-submissions') {
    const providedKey = request.headers['x-admin-key']

    if (adminApiKey && providedKey !== adminApiKey) {
      sendJson(response, 401, { message: 'Unauthorized.' })
      return
    }

    try {
      const submissions = await loadSubmissions()
      sendJson(response, 200, { submissions })
    } catch (error) {
      sendJson(response, 500, {
        message: 'Unable to load submissions.',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
    return
  }

  if (request.method === 'POST' && url.pathname === '/api/contact') {
    try {
      const body = await safeParse(request)
      const errors = validateSubmission(body)

      if (errors.length > 0) {
        sendJson(response, 400, { message: errors.join(' ') })
        return
      }

      const submission = createSubmission(body)
      const storage = await saveSubmission(submission)

      sendJson(response, 201, {
        message: 'Contact submission saved successfully.',
        submissionId: submission.id,
        storage,
      })
    } catch (error) {
      sendJson(response, 500, {
        message: 'Unable to process this request right now.',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
    return
  }

  sendJson(response, 404, { message: 'Route not found.' })
})

server.listen(port, () => {
  console.log(`Contact API running at http://localhost:${port}`)
})
