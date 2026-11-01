import { useEffect, useState } from 'react'
import useTheme from '../hooks/useTheme.js'
import { CHANNEL } from '../data/channel.js'
import { YouTubeIcon } from './icons.jsx'

const LINKS = [
  { href: '#topics', label: 'Topics' },
  { href: '#videos', label: 'Videos' },
  { href: '#community', label: 'Community' },
  { href: '#about', label: 'About' },
]

const external = { target: '_blank', rel: 'noopener noreferrer' }

export default function Nav() {
  const [, toggleTheme] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  // Escape closes the phone/tablet menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <nav>
      <div className="container nav-inner">
        <a href="#" className="brand" onClick={closeMenu}>
          <img src="/logo.png" alt="" className="brand-logo" width="40" height="40" />
          {CHANNEL.name}
        </a>
        <div className="nav-links">
          {LINKS.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
          <button className="icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            <svg className="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg className="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
          <a href={CHANNEL.youtube.url} {...external} className="btn btn-primary btn-sm nav-subscribe">
            <YouTubeIcon size={16} />
            Subscribe
          </a>
          <button
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        <div className="container">
          {LINKS.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a href={CHANNEL.youtube.url} {...external} className="btn btn-primary" onClick={closeMenu}>
            <YouTubeIcon size={16} />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </nav>
  )
}
