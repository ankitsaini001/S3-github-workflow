const STATS = [
  { value: '11 nines', label: 'Designed durability' },
  { value: '0', label: 'Servers to maintain' },
  { value: '∞', label: 'Scales with traffic' },
  { value: '< $1', label: 'Typical monthly cost' },
]

export default function Stats() {
  return (
    <div className="strip reveal">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
