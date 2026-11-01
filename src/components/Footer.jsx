const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>© {YEAR} TechByte Chronicles. Hosted on Amazon S3.</span>
        <span>Built with React &amp; Vite.</span>
      </div>
    </footer>
  )
}
