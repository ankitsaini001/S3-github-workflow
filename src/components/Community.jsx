import { CHANNEL } from '../data/channel.js'
import { ArrowIcon, InstagramIcon, YouTubeIcon } from './icons.jsx'

const PLATFORMS = [
  {
    name: 'YouTube',
    className: 'platform youtube',
    icon: <YouTubeIcon size={26} />,
    ...CHANNEL.youtube,
    text: 'Full explainers and 60-second Shorts on DSA, web development, deployment and AI.',
    action: 'Subscribe',
  },
  {
    name: 'Instagram',
    className: 'platform instagram',
    icon: <InstagramIcon size={26} />,
    ...CHANNEL.instagram,
    text: 'Reels, quick concepts and code tips — perfect for learning on the go.',
    action: 'Follow',
  },
]

export default function Community() {
  return (
    <section id="community">
      <div className="section-head reveal">
        <div className="eyebrow">Join the community</div>
        <h2>Learn with us, wherever you scroll.</h2>
      </div>

      <div className="platforms">
        {PLATFORMS.map((p) => (
          <a href={p.url} target="_blank" rel="noopener noreferrer" className={`${p.className} reveal`} key={p.name}>
            <div className="platform-icon">{p.icon}</div>
            <div>
              <h3>{p.name}</h3>
              <span className="handle">{p.handle}</span>
              <p>{p.text}</p>
            </div>
            <span className="btn btn-ghost btn-sm">
              {p.action} <ArrowIcon size={14} />
            </span>
          </a>
        ))}
      </div>

      <p className="collab reveal">
        Want to collaborate or suggest a topic? Send us a DM on{' '}
        <a href={CHANNEL.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a>{' '}
        or drop a comment on any video.
      </p>
    </section>
  )
}
