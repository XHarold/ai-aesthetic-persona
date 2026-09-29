export default function SelectChoice({ options, value = '', onChange }) {
  return (
    <select className="select-field" value={value} onChange={(event) => onChange(event.target.value)}>
      {options.map((option) => (
        <option key={option.value || 'empty'} value={option.value} disabled={option.value === ''}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
