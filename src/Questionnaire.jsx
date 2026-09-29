import { useState } from 'react'
import {
  sections,
  getQuestionsBySection,
  isAnswered,
  SECTION_COUNT,
} from './data/questions.js'
import ProgressBar from './components/ProgressBar.jsx'
import SectionHeader from './components/SectionHeader.jsx'
import QuestionCard from './components/QuestionCard.jsx'
import SingleChoice from './components/SingleChoice.jsx'
import MultiChoice from './components/MultiChoice.jsx'
import SelectChoice from './components/SelectChoice.jsx'
import LikertScale from './components/LikertScale.jsx'
import SemanticDifferential from './components/SemanticDifferential.jsx'
import ImageRating from './components/ImageRating.jsx'
import PairwiseChoice from './components/PairwiseChoice.jsx'
import TextQuestion from './components/TextQuestion.jsx'
import MatrixQuestion from './components/MatrixQuestion.jsx'
import StimulusFrame from './components/StimulusFrame.jsx'

const initialState = {
  currentSection: 'welcome',
  currentQuestion: 0,
  responses: {},
}

export default function Questionnaire() {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState('')
  const [showSummary, setShowSummary] = useState(false)

  const section = sections.find((item) => item.id === state.currentSection)
  const sectionIndex = sections.findIndex((item) => item.id === state.currentSection)
  const questions = section ? getQuestionsBySection(section.id) : []

  function setResponse(id, value) {
    setError('')
    setState((prev) => ({
      ...prev,
      responses: { ...prev.responses, [id]: value },
    }))
  }

  function goNext() {
    if (state.currentSection === 'welcome') {
      setState((prev) => ({
        ...prev,
        currentSection: sections[0].id,
        currentQuestion: 0,
      }))
      return
    }

    const missing = questions.find((question) => question.required && !isAnswered(question, state.responses))
    if (missing) {
      setError('Please answer this question before continuing.')
      return
    }

    if (sectionIndex >= sections.length - 1) {
      console.log('Aesthetic profile prototype summary', state.responses)
      setState((prev) => ({ ...prev, currentSection: 'complete' }))
      return
    }

    setState((prev) => ({
      ...prev,
      currentSection: sections[sectionIndex + 1].id,
      currentQuestion: 0,
    }))
  }

  function goPrev() {
    setError('')
    if (sectionIndex <= 0) {
      setState((prev) => ({ ...prev, currentSection: 'welcome' }))
      return
    }
    setState((prev) => ({
      ...prev,
      currentSection: sections[sectionIndex - 1].id,
    }))
  }

  function restart() {
    setShowSummary(false)
    setError('')
    setState(initialState)
  }

  function renderQuestion(question) {
    const value = state.responses[question.id]

    if (question.type === 'single') {
      return (
        <QuestionCard key={question.id} title={question.title} description={question.description}>
          <SingleChoice
            options={question.options}
            value={value}
            onChange={(next) => setResponse(question.id, next)}
          />
        </QuestionCard>
      )
    }

    if (question.type === 'multi') {
      return (
        <QuestionCard key={question.id} title={question.title} description={question.description}>
          <MultiChoice
            options={question.options}
            value={value}
            exclusiveValue={question.exclusiveValue}
            onChange={(next) => setResponse(question.id, next)}
          />
        </QuestionCard>
      )
    }

    if (question.type === 'select') {
      return (
        <QuestionCard key={question.id} title={question.title} description={question.description}>
          <SelectChoice
            options={question.options}
            value={value || ''}
            onChange={(next) => setResponse(question.id, next)}
          />
        </QuestionCard>
      )
    }

    if (question.type === 'likert') {
      return (
        <QuestionCard key={question.id} title={question.title} description={question.description}>
          <LikertScale
            min={question.min}
            max={question.max}
            leftLabel={question.leftLabel}
            rightLabel={question.rightLabel}
            value={value}
            onChange={(next) => setResponse(question.id, next)}
          />
        </QuestionCard>
      )
    }

    if (question.type === 'semantic_differential') {
      return (
        <SemanticDifferential
          key={question.id}
          leftLabel={question.leftLabel}
          rightLabel={question.rightLabel}
          min={question.min}
          max={question.max}
          value={value}
          onChange={(next) => setResponse(question.id, next)}
        />
      )
    }

    if (question.type === 'image_rating') {
      return (
        <ImageRating
          key={question.id}
          title={question.title}
          min={question.min}
          max={question.max}
          leftLabel={question.leftLabel}
          rightLabel={question.rightLabel}
          tone={question.tone}
          value={value}
          onChange={(next) => setResponse(question.id, next)}
        />
      )
    }

    if (question.type === 'pairwise') {
      return (
        <QuestionCard key={question.id} title={question.title} description={question.description}>
          <PairwiseChoice
            stimulusA={question.stimulusA}
            stimulusB={question.stimulusB}
            neitherLabel={question.neitherLabel}
            value={value}
            onChange={(next) => setResponse(question.id, next)}
          />
        </QuestionCard>
      )
    }

    if (question.type === 'text') {
      return (
        <QuestionCard key={question.id} title={question.title} description={question.description}>
          <TextQuestion
            value={value || ''}
            placeholder={question.placeholder}
            onChange={(next) => setResponse(question.id, next)}
          />
        </QuestionCard>
      )
    }

    if (question.type === 'matrix') {
      return (
        <QuestionCard key={question.id} title={question.title} description={question.description}>
          <MatrixQuestion
            items={question.items}
            min={question.min}
            max={question.max}
            responses={state.responses}
            onChange={(itemId, next) => setResponse(itemId, next)}
          />
        </QuestionCard>
      )
    }

    return null
  }

  return (
    <div className="app-shell">
      {section ? (
        <div className="top-bar">
          <ProgressBar current={section.number} total={SECTION_COUNT} />
        </div>
      ) : null}

      <main className="main-stage">
        {state.currentSection === 'welcome' ? (
          <section className="welcome">
            <p className="kicker">Research Demo</p>
            <h1>AI Aesthetic Persona</h1>
            <h2>Personal Aesthetic Profile Questionnaire</h2>
            <p className="lede">
              Explore how your experiences, preferences and aesthetic responses shape your personal
              visual taste.
            </p>
            <div className="meta-row">
              <span>
                <span className="dot" />
                Prototype / Research Demo
              </span>
              <span>预计时间：约 5–8 分钟</span>
            </div>
            <button type="button" className="btn" onClick={goNext}>
              开始体验
            </button>
          </section>
        ) : null}

        {section ? (
          <section>
            <SectionHeader title={section.title} subtitle={section.subtitle} note={section.note} />
            {section.stimulusId ? <StimulusFrame stimulusId={section.stimulusId} /> : null}
            <div className="question-stack">{questions.map(renderQuestion)}</div>
            {error ? <p className="error-text">{error}</p> : null}
            <div className="nav-row">
              <button type="button" className="btn btn-ghost" onClick={goPrev}>
                Previous
              </button>
              <button type="button" className="btn" onClick={goNext}>
                {sectionIndex === sections.length - 1 ? 'Finish' : 'Continue'}
              </button>
            </div>
          </section>
        ) : null}

        {state.currentSection === 'complete' ? (
          <section className="complete">
            <p className="kicker">Prototype</p>
            <h1>Thank you.</h1>
            <p>Your aesthetic profile prototype is complete.</p>
            <p>Prototype only — responses are not stored on a server.</p>
            <div className="action-row">
              <button type="button" className="btn" onClick={() => setShowSummary(true)}>
                View Response Summary
              </button>
              <button type="button" className="btn btn-ghost" onClick={restart}>
                Restart
              </button>
            </div>
            {showSummary ? (
              <pre className="summary">{JSON.stringify(state.responses, null, 2)}</pre>
            ) : null}
          </section>
        ) : null}
      </main>
    </div>
  )
}
