import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteContent'

const iconMap = {
  Instagram,
  Facebook,
  Twitter,
  GitHub: Github,
  LinkedIn: Linkedin,
}

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <Link
            className="relative block h-12 w-16 text-5xl font-extrabold tracking-tighter text-blue-400 drop-shadow-[0_6px_14px_rgba(0,0,0,1)] transition hover:opacity-90"
            to="/"
          >
            <span className="absolute left-2 top-0 z-0 text-white">D</span>
            <span className="absolute left-8 -top-2">V</span>
          </Link>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            {siteConfig.name} is a frontend developer and designer focused on clean interfaces, strong layout structure,
            and practical web experiences that help visitors take action.
          </p>
          <Link className="text-xl font-semibold text-emerald-300 underline underline-offset-4" to="/contact">
            I am available for new freelance projects -&gt;
          </Link>
          <p className="text-3xl text-white font-msMadi">- Devansh</p>
        </div>
        <div className="grid gap-8 text-slate-200 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick Links</h2>
            <div className="flex flex-col gap-2 text-base">
              <Link className="hover:text-emerald-300" to="/about">
                About
              </Link>
              <Link className="hover:text-emerald-300" to="/projects">
                Projects
              </Link>
              <Link className="hover:text-emerald-300" to="/blog">
                Blog
              </Link>
              <Link className="hover:text-emerald-300" to="/contact">
                Contact
              </Link>
              <Link className="hover:text-emerald-300" to="/privacy-notice">
                Privacy Notice
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</h2>
            <div className="space-y-2 text-base">
              <p className="block">
                {siteConfig.email}
              </p>
              <p className="block">
                {siteConfig.phone}
              </p>
              <p>{siteConfig.availability}</p>
            </div>
            <div className="flex gap-3 pt-2">
              {siteConfig.socialLinks.map((social) => {
                const Icon = iconMap[social.label]

                return Icon ? (
                  <a
                    key={social.label}
                    className="rounded-full border border-white/10 p-2 text-slate-100 transition hover:border-emerald-300 hover:text-emerald-300"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                ) : null
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-3 border-t border-white/10 pt-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>@ Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
