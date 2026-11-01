const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const FEATURES = [
  {
    title: 'Blazing fast',
    text: 'Plain files served directly — no server-side rendering, no cold starts, no waiting.',
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
  },
  {
    title: 'Rock-solid durability',
    text: 'Your content is stored redundantly across multiple facilities, built to survive failures.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Global reach',
    text: 'Pair with a CDN to put your site at the edge, close to visitors anywhere on the planet.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </>
    ),
  },
  {
    title: 'Pay per use',
    text: 'Billed for storage and requests only. A personal site often costs less than a coffee.',
    icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  },
  {
    title: 'Git-friendly',
    text: 'Push to your repo and let a CI workflow sync the bucket. Deploys become a non-event.',
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    title: 'Secure by default',
    text: 'Fine-grained bucket policies and IAM control exactly who can read and who can write.',
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
]

// Moves the hover glow to follow the cursor
function trackCursor(e) {
  const card = e.currentTarget
  const r = card.getBoundingClientRect()
  card.style.setProperty('--x', `${e.clientX - r.left}px`)
  card.style.setProperty('--y', `${e.clientY - r.top}px`)
}

export default function Features() {
  return (
    <section id="features">
      <div className="section-head reveal">
        <div className="eyebrow">Why static on S3</div>
        <h2>Everything you need, nothing you don't.</h2>
        <p>Object storage turned web host. Upload your files and let the cloud handle the rest.</p>
      </div>

      <div className="grid">
        {FEATURES.map((f) => (
          <article className="card reveal" key={f.title} onMouseMove={trackCursor}>
            <div className="icon">
              <svg {...iconProps}>{f.icon}</svg>
            </div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
