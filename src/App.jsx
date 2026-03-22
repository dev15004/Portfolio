import { Route, Routes } from 'react-router-dom'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section1 />
              <Section2 />
              <Section3 />
            </>
          }
        />
        <Route path="/*" element={<Section1 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
