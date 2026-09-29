export default function TextQuestion({ value = '', onChange, placeholder }) {
  return (
    <textarea
      className="text-field"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
