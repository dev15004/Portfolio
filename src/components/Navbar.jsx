import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../data/siteContent'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact', accent: true },
]

const Links = ({ onClick }) => {
  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          className={({ isActive }) =>
            [
              'cursor-pointer rounded-full px-3 py-2 transition duration-300 hover:scale-105',
              item.accent ? 'font-bold text-emerald-300' : 'text-slate-100',
              isActive ? 'bg-white/10 text-cyan-300' : '',
            ].join(' ')
          }
          to={item.to}
          onClick={onClick}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen((current) => !current)
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-6 py-4 shadow-lg shadow-slate-950/20 backdrop-blur">
        <Link
          className="relative w-16 text-4xl font-extrabold tracking-tighter text-blue-400 drop-shadow-[0_6px_14px_rgba(0,0,0,1)] transition duration-300 hover:scale-105"
          to="/"
        >
          <span className="absolute left-3 -top-4 z-0 text-white">D</span>
          <span className="absolute left-7 -top-6">V</span>
        </Link>
        <div className="hidden items-center gap-2 text-sm uppercase tracking-[0.2em] sm:flex">
          <Links />
        </div>
        <div className="hidden items-center text-right lg:block">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Based in {siteConfig.location}</p>
          <p className="text-sm font-medium text-slate-200">{siteConfig.availability}</p>
        </div>
        <div className="sm:hidden">
          <button className="text-white" onClick={toggleNavbar} type="button" aria-label="Toggle navigation">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 flex max-w-6xl flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/90 px-6 py-5 text-base uppercase tracking-[0.2em] shadow-lg shadow-slate-950/30 backdrop-blur sm:hidden">
          <Links onClick={() => setIsOpen(false)} />
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
