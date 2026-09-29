import LikertScale from './LikertScale.jsx'

export default function ImageRating({
  title,
  min,
  max,
  leftLabel,
  rightLabel,
  value,
  onChange,
  tone = 'beauty',
}) {
  return (
    <div className="image-rating" data-tone={tone}>
      <h2 className="question-title">{title}</h2>
      <LikertScale
        min={min}
        max={max}
        leftLabel={leftLabel}
        rightLabel={rightLabel}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
