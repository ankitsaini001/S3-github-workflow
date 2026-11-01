import { CHANNEL } from '../data/channel.js'
import { InstagramIcon, YouTubeIcon } from './icons.jsx'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="" width="32" height="32" />
          <div>
            <strong>{CHANNEL.name}</strong>
            <span>{CHANNEL.motto.join(' • ')}</span>
          </div>
        </div>
        <div className="socials">
          <a href={CHANNEL.youtube.url} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <YouTubeIcon size={20} />
          </a>
          <a href={CHANNEL.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon size={20} />
          </a>
        </div>
        <span className="copyright">© {YEAR} {CHANNEL.name}. Hosted on Amazon S3.</span>
      </div>
    </footer>
  )
}
