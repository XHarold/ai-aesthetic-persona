import { getStimulus } from '../data/stimuli.js'

export default function StimulusFrame({ stimulusId, caption }) {
  const stimulus = getStimulus(stimulusId)
  if (!stimulus) return null

  return (
    <figure className="stimulus">
      <img src={stimulus.image} alt={stimulus.title} />
      <figcaption className="stimulus-caption">{caption || stimulus.title}</figcaption>
    </figure>
  )
}
