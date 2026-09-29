export default function SemanticDifferential({
  leftLabel,
  rightLabel,
  min = 1,
  max = 7,
  value,
  onChange,
}) {
  const ticks = []
  for (let n = min; n <= max; n += 1) ticks.push(n)
  const midpoint = Math.ceil((min + max) / 2)
  const current = value ?? midpoint

  return (
    <div className="sd-row">
      <div className="sd-labels">
        <span>{leftLabel}</span>
        <div className="sd-control">
          <input
            type="range"
            min={min}
            max={max}
            step="1"
            value={current}
            onPointerDown={() => onChange(current)}
            onChange={(event) => onChange(Number(event.target.value))}
            aria-valuetext={`${leftLabel} ${current} ${rightLabel}`}
          />
          <div className="sd-ticks">
            {ticks.map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>
          <div className="sd-value">{value == null ? '—' : value}</div>
        </div>
        <span>{rightLabel}</span>
      </div>
    </div>
  )
}
