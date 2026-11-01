import { useEffect, useState } from 'react'

// Same deck of numbers as our "Bubble Sort vs Merge Sort" Short
const INPUT = [71, 29, 65, 17, 62, 74, 50, 78, 90, 30, 79, 45]
const MAX = Math.max(...INPUT)
const STEP_MS = 380
const HOLD_MS = 2600

// Records every comparison of a bubble sort so it can be replayed frame by frame
function bubbleSortFrames(input) {
  const a = [...input]
  const frames = []
  let comparisons = 0

  for (let end = a.length - 1; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      comparisons++
      const swap = a[i] > a[i + 1]
      frames.push({ values: [...a], pair: [i, i + 1], swap, sortedFrom: end + 1, comparisons })
      if (swap) [a[i], a[i + 1]] = [a[i + 1], a[i]]
    }
  }
  frames.push({ values: [...a], pair: [], swap: false, sortedFrom: 0, comparisons })
  return frames
}

const FRAMES = bubbleSortFrames(INPUT)
const LAST = FRAMES.length - 1

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function SortVisualizer() {
  const [step, setStep] = useState(() => (prefersReducedMotion() ? LAST : 0))

  useEffect(() => {
    if (prefersReducedMotion()) return
    const done = step === LAST
    const id = setTimeout(() => setStep(done ? 0 : step + 1), done ? HOLD_MS : STEP_MS)
    return () => clearTimeout(id)
  }, [step])

  const frame = FRAMES[step]
  const [a, b] = frame.pair

  const barClass = (i) => {
    if (i >= frame.sortedFrom) return 'viz-bar sorted'
    if (i === a || i === b) return frame.swap ? 'viz-bar swap' : 'viz-bar compare'
    return 'viz-bar'
  }

  const status =
    step === LAST
      ? 'Sorted! Every element is in place.'
      : frame.swap
        ? `${frame.values[a]} > ${frame.values[b]} → swap`
        : `${frame.values[a]} ≤ ${frame.values[b]} → keep`

  return (
    <aside className="viz reveal" aria-label="Animated bubble sort visualisation">
      <div className="viz-head">
        <div className="dots"><span></span><span></span><span></span></div>
        <span className="viz-title">bubble-sort.js</span>
        <span className="viz-badge">O(n²)</span>
      </div>

      <div className="viz-bars" aria-hidden="true">
        {frame.values.map((v, i) => (
          <div className="viz-col" key={i}>
            <div className={barClass(i)} style={{ height: `${(v / MAX) * 100}%` }} />
            <span className="viz-value">{v}</span>
          </div>
        ))}
      </div>

      <div className="viz-foot">
        <span className="viz-status">{status}</span>
        <span className="viz-count">comparisons: {frame.comparisons}</span>
      </div>

      <div className="viz-legend" aria-hidden="true">
        <span><i className="compare"></i>Comparing</span>
        <span><i className="swap"></i>Swapping</span>
        <span><i className="sorted"></i>Sorted</span>
      </div>
    </aside>
  )
}
