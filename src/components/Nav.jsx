import useTheme from '../hooks/useTheme.js'
import { CHANNEL } from '../data/channel.js'
import { YouTubeIcon } from './icons.jsx'

export default function Nav() {
  const [, toggleTheme] = useTheme()

  return (
    <nav>
      <div className="container nav-inner">
        <a href="#" className="brand">
          <img src="/logo.png" alt="" className="brand-logo" width="40" height="40" />
          {CHANNEL.name}
        </a>
        <div className="nav-links">
          <a href="#topics">Topics</a>
          <a href="#videos">Videos</a>
          <a href="#community">Community</a>
          <a href="#about">About</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            <svg className="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg className="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
          <a href={CHANNEL.youtube.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <YouTubeIcon size={16} />
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  )
}
