import { getStimulus } from '../data/stimuli.js'

export default function PairwiseChoice({
  stimulusA,
  stimulusB,
  neitherLabel = '我都不喜欢',
  value,
  onChange,
}) {
  const a = getStimulus(stimulusA)
  const b = getStimulus(stimulusB)

  return (
    <div className="pairwise">
      <div className="pairwise-grid">
        <button
          type="button"
          className={`pair-option ${value === 'A' ? 'is-selected' : ''} ${
            value && value !== 'A' ? 'is-dimmed' : ''
          }`}
          onClick={() => onChange('A')}
        >
          <img src={a?.image} alt={a?.title || 'Option A'} />
          <div className="pair-label">A</div>
          {value === 'A' ? <div className="pair-state">Selected</div> : null}
        </button>
        <button
          type="button"
          className={`pair-option ${value === 'B' ? 'is-selected' : ''} ${
            value && value !== 'B' ? 'is-dimmed' : ''
          }`}
          onClick={() => onChange('B')}
        >
          <img src={b?.image} alt={b?.title || 'Option B'} />
          <div className="pair-label">B</div>
          {value === 'B' ? <div className="pair-state">Selected</div> : null}
        </button>
      </div>
      <button
        type="button"
        className={`neither-btn ${value === 'neither' ? 'is-selected' : ''}`}
        onClick={() => onChange('neither')}
      >
        {neitherLabel}
        {value === 'neither' ? ' · Selected' : ''}
      </button>
    </div>
  )
}
