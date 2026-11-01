import { TOPICS } from '../data/channel.js'
import { TopicIcon } from './icons.jsx'

// Moves the hover glow to follow the cursor
function trackCursor(e) {
  const card = e.currentTarget
  const r = card.getBoundingClientRect()
  card.style.setProperty('--x', `${e.clientX - r.left}px`)
  card.style.setProperty('--y', `${e.clientY - r.top}px`)
}

export default function Topics() {
  return (
    <section id="topics">
      <div className="section-head reveal">
        <div className="eyebrow">What we cover</div>
        <h2>From algorithms to production.</h2>
        <p>Everything a developer meets on the way — explained visually, one concept at a time.</p>
      </div>

      <div className="grid">
        {TOPICS.map((topic) => (
          <article className="card reveal" key={topic.id} onMouseMove={trackCursor}>
            <div className="icon">
              <TopicIcon id={topic.id} />
            </div>
            <h3>{topic.title}</h3>
            <p>{topic.text}</p>
            <ul className="tags">
              {topic.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
