import ArrowIcon from './ArrowIcon.jsx'
import StatusCard from './StatusCard.jsx'

export default function Hero() {
  return (
    <header className="hero">
      <div className="reveal">
        <div className="badge">
          <span className="pulse"></span> Live &amp; served from Amazon S3
        </div>
        <h1>
          Static, swift, and <span className="gradient-text">served from the cloud.</span>
        </h1>
        <p className="lead">
          No servers to patch, no runtime to babysit. Just clean HTML delivered
          straight from an S3 bucket — durable, scalable, and ridiculously cheap.
        </p>
        <div className="cta-row">
          <a href="#deploy" className="btn btn-primary">
            See how it's deployed
            <ArrowIcon />
          </a>
          <a href="#features" className="btn btn-ghost">Why S3?</a>
        </div>
      </div>

      <StatusCard />
    </header>
  )
}
