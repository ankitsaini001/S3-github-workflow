import { useState } from 'react'

const STEPS = [
  { title: 'Create a bucket', text: 'Pick a globally unique name and the region closest to your audience.' },
  { title: 'Enable static website hosting', text: <>Set <code>index.html</code> as the index document in the bucket properties.</> },
  { title: 'Allow public read', text: 'Turn off "Block public access" and attach a read-only bucket policy.' },
  { title: 'Upload & visit', text: "Sync your files and open the bucket's website endpoint. Done." },
]

const COMMANDS = `# 1. Create the bucket
aws s3 mb s3://my-site-bucket

# 2. Enable static website hosting
aws s3 website s3://my-site-bucket \\
  --index-document index.html

# 3. Upload your site
aws s3 sync . s3://my-site-bucket \\
  --exclude ".git/*" --delete`

export default function Deploy() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(COMMANDS).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <section id="deploy">
      <div className="deploy">
        <div className="reveal">
          <div className="eyebrow">Ship it</div>
          <h2>From folder to live site in four steps.</h2>
          <ol className="steps" style={{ marginTop: 36 }}>
            {STEPS.map((step) => (
              <li key={step.title}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="terminal reveal">
          <div className="terminal-bar">
            <div className="dots"><span></span><span></span><span></span></div>
            <span className="status-title">bash — deploy</span>
            <button className={copied ? 'copy-btn copied' : 'copy-btn'} onClick={copy}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre>
            <span className="c-dim"># 1. Create the bucket</span>{'\n'}
            <span className="c-acc">aws</span> s3 mb s3://<span className="c-str">my-site-bucket</span>{'\n\n'}
            <span className="c-dim"># 2. Enable static website hosting</span>{'\n'}
            <span className="c-acc">aws</span> s3 website s3://<span className="c-str">my-site-bucket</span> \{'\n'}
            {'  '}--index-document index.html{'\n\n'}
            <span className="c-dim"># 3. Upload your site</span>{'\n'}
            <span className="c-acc">aws</span> s3 sync . s3://<span className="c-str">my-site-bucket</span> \{'\n'}
            {'  '}--exclude ".git/*" --delete{'\n\n'}
            <span className="c-ok">✓ upload: ./index.html to s3://my-site-bucket/index.html</span>
          </pre>
        </div>
      </div>
    </section>
  )
}
