import { CHANNEL } from '../data/channel.js'
import { InstagramIcon, YouTubeIcon } from './icons.jsx'
import SortVisualizer from './SortVisualizer.jsx'

export default function Hero() {
  return (
    <header className="hero">
      <div className="reveal">
        <div className="badge">
          <span className="pulse"></span> {CHANNEL.tagline}
        </div>
        <h1>
          Learn. Code. <span className="gradient-text">Build. Grow.</span>
        </h1>
        <p className="lead">
          Bite-sized, visual explainers on DSA, web development, deployment and AI —
          so complex IT concepts finally click.
        </p>
        <div className="cta-row">
          <a href={CHANNEL.youtube.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <YouTubeIcon />
            Subscribe on YouTube
          </a>
          <a href={CHANNEL.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <InstagramIcon />
            Follow on Instagram
          </a>
        </div>
        <ul className="hero-meta">
          <li>60-second Shorts</li>
          <li>In English</li>
          <li>Beginner friendly</li>
        </ul>
      </div>

      <SortVisualizer />
    </header>
  )
}
