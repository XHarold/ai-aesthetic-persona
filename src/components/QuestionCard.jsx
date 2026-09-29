export default function QuestionCard({ title, description, children }) {
  return (
    <article className="question-card">
      {title ? <h2 className="question-title">{title}</h2> : null}
      {description ? <p className="question-desc">{description}</p> : null}
      {children}
    </article>
  )
}
