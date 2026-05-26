import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Hexagon, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/writing', label: 'Writing' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-sm border-b-2 border-fg">
      <div className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-full border-2 border-fg flex items-center justify-center shadow-pop">
            <Hexagon className="text-white w-5 h-5" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-fg">Salmon</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-semibold text-sm transition-colors ${
                pathname === to ? 'text-accent' : 'text-muted-fg hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/about#contact"
            className="bg-secondary text-white px-5 py-2 rounded-full border-2 border-fg font-bold text-sm shadow-pop flex items-center gap-2"
          >
            Contact
            <span className="text-white/80">→</span>
          </Link>
        </div>

        <button
          className="md:hidden p-2 border-2 border-fg rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-fg bg-bg px-6 py-4 space-y-3">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block py-2 font-semibold ${
                pathname === to ? 'text-accent' : 'text-fg'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
