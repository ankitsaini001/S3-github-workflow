import ArrowIcon from './ArrowIcon.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <div className="final reveal">
        <div className="eyebrow">Let's build</div>
        <h2>Simple hosting for things that matter.</h2>
        <p>This page is a React app sitting in a bucket. Imagine what you could ship next.</p>
        <div className="cta-row">
          <a href="mailto:hello@example.com" className="btn btn-primary">
            Get in touch
            <ArrowIcon />
          </a>
          <a href="#" className="btn btn-ghost">Back to top</a>
        </div>
      </div>
    </section>
  )
}
