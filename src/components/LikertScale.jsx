export default function LikertScale({
  min = 1,
  max = 7,
  value,
  onChange,
  leftLabel,
  rightLabel,
}) {
  const numbers = []
  for (let n = min; n <= max; n += 1) numbers.push(n)

  return (
    <div className="likert">
      <div className="scale-labels">
        <span>
          {min} = {leftLabel}
        </span>
        <span>
          {max} = {rightLabel}
        </span>
      </div>
      <div className="scale-numbers">
        {numbers.map((n) => (
          <button
            key={n}
            type="button"
            className={value === n ? 'is-selected' : ''}
            onClick={() => onChange(n)}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}
