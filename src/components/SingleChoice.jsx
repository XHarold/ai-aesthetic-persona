export default function SingleChoice({ options, value, onChange }) {
  return (
    <div className="choice-list" role="radiogroup">
      {options.map((option) => {
        const selected = value === option.value
        return (
          <button
            key={option.value}
            type="button"
            className={`choice ${selected ? 'is-selected' : ''}`}
            onClick={() => onChange(option.value)}
            aria-pressed={selected}
          >
            <span className="choice-mark round" />
            <span>{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
