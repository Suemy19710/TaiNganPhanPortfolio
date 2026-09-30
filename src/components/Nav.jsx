import { useState } from 'react'
import { profile } from '../data/content.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Experiences' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificates' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <a className="mono-mark" href="#top">{profile.shortName.toUpperCase()}</a>
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <a className="btn btn-solid" href="#contact">Get in touch</a>
          <button
            className="menu-btn"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <div className="wrap">
          <ul>
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
