export default function SectionHeader({ title, subtitle, note }) {
  return (
    <header className="section-header">
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : null}
      {note ? <div className="section-note">{note}</div> : null}
    </header>
  )
}
