import { useEffect, useState } from 'react'

const formatTime = () =>
  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })

function measureLoadTime() {
  const nav = performance.getEntriesByType?.('navigation')[0]
  const ms = nav && nav.loadEventStart > 0 ? nav.loadEventStart : performance.now()
  return `${Math.round(ms)} ms`
}

export default function StatusCard() {
  const [clock, setClock] = useState(formatTime)
  const [loadTime, setLoadTime] = useState('measuring…')

  useEffect(() => {
    const id = setInterval(() => setClock(formatTime()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    // The load event may already have fired by the time React mounts
    const update = () => setTimeout(() => setLoadTime(measureLoadTime()), 0)
    if (document.readyState === 'complete') {
      update()
      return
    }
    window.addEventListener('load', update)
    return () => window.removeEventListener('load', update)
  }, [])

  const rows = [
    { label: 'Status', value: '● Online', ok: true },
    { label: 'Host', value: window.location.hostname || 'local file' },
    { label: 'Protocol', value: window.location.protocol.replace(':', '').toUpperCase() },
    { label: 'Page load', value: loadTime },
    { label: 'Local time', value: clock },
    { label: 'Servers managed', value: '0', ok: true },
  ]

  return (
    <aside className="status-card reveal" aria-label="Live page details">
      <div className="status-head">
        <div className="dots"><span></span><span></span><span></span></div>
        <span className="status-title">~/site/status</span>
      </div>
      {rows.map((row) => (
        <div className="stat-row" key={row.label}>
          <span className="label">{row.label}</span>
          <span className={row.ok ? 'value ok' : 'value'}>{row.value}</span>
        </div>
      ))}
    </aside>
  )
}
