import { CHANNEL } from '../data/channel.js'

const PIPELINE = [
  { cmd: 'git push', text: 'New content lands on the main branch' },
  { cmd: 'GitHub Actions', text: 'A workflow starts automatically' },
  { cmd: 'npm run build', text: 'React app is compiled to static files' },
  { cmd: 'Amazon S3', text: 'Files are synced and served worldwide' },
]

export default function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="reveal">
          <div className="eyebrow">About us</div>
          <h2>Two developers, one mission.</h2>
          <p className="about-text">
            TechByte Chronicles is run by two developers who love breaking things down.
            Our mission is to make IT concepts easy to understand and help learners grow
            their technical skills — whether you're writing your first loop or shipping
            your first deployment.
          </p>
          <ul className="motto">
            {CHANNEL.motto.map((word) => <li key={word}>{word}</li>)}
          </ul>
        </div>

        <div className="pipeline reveal">
          <div className="viz-head">
            <div className="dots"><span></span><span></span><span></span></div>
            <span className="viz-title">how-this-site-ships.yml</span>
          </div>
          <p className="pipeline-intro">We practise what we teach — this site is a React app deployed to AWS S3:</p>
          <ol>
            {PIPELINE.map((step) => (
              <li key={step.cmd}>
                <code>{step.cmd}</code>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
