export default function MultiChoice({ options, value = [], onChange, exclusiveValue }) {
  function toggle(optionValue) {
    const current = Array.isArray(value) ? value : []
    let next

    if (exclusiveValue && optionValue === exclusiveValue) {
      next = current.includes(exclusiveValue) ? [] : [exclusiveValue]
    } else if (current.includes(optionValue)) {
      next = current.filter((item) => item !== optionValue)
    } else {
      next = current.filter((item) => item !== exclusiveValue).concat(optionValue)
    }

    onChange(next)
  }

  return (
    <div className="choice-list">
      {options.map((option) => {
        const selected = Array.isArray(value) && value.includes(option.value)
        return (
          <button
            key={option.value}
            type="button"
            className={`choice ${selected ? 'is-selected' : ''}`}
            onClick={() => toggle(option.value)}
            aria-pressed={selected}
          >
            <span className="choice-mark" />
            <span>{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
