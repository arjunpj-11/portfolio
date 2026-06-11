import { useEffect, useState } from 'react'

const greetings = [
  { word: 'Hello', lang: 'English' },
  { word: 'Namaste', lang: 'Hindi' },
  { word: 'Vanakkam', lang: 'Tamil' },
  { word: 'Namaskaram', lang: 'Malayalam' },
  { word: 'Bonjour', lang: 'French' },
  { word: 'Hola', lang: 'Spanish' },
  { word: 'Konnichiwa', lang: 'Japanese' },
]

type LoaderProps = {
  onDone: () => void
}

export default function Loader({ onDone }: LoaderProps) {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [hiding, setHiding] = useState(false)

useEffect(() => {
  const TOTAL_WORDS = greetings.length        // 7
  const MS_PER_WORD = 420
  const TOTAL_MS    = TOTAL_WORDS * MS_PER_WORD + 600

  const TICK_MS     = 60
  const INCREMENT   = 100 / (TOTAL_MS / TICK_MS)

  let currentIndex = 0

  const wordTimer = window.setInterval(() => {
    currentIndex += 1
    if (currentIndex >= TOTAL_WORDS) {
      window.clearInterval(wordTimer)   
      return
    }
    setIndex(currentIndex)
  }, MS_PER_WORD)

  const progressTimer = window.setInterval(() => {
    setProgress((c) => {
      const next = Math.min(c + INCREMENT, 100)
      if (next >= 100) {
        window.clearInterval(progressTimer)
        window.clearInterval(wordTimer)
        window.setTimeout(() => setHiding(true), 350)
        window.setTimeout(onDone, 980)
      }
      return next
    })
  }, TICK_MS)

  return () => {
    window.clearInterval(wordTimer)
    window.clearInterval(progressTimer)
  }
}, [onDone])

  return (
    <div id="loader" className={hiding ? 'hide' : ''} role="status" aria-label="Loading portfolio">
      <p className="loader-time-label">Building Portfolio</p>
      <div className="loader-greeting-wrap" aria-live="polite" aria-atomic="true">
        {greetings.map((greeting, greetingIndex) => {
          const isActive = greetingIndex === index
          const isPrevious = greetingIndex === (index - 1 + greetings.length) % greetings.length
          return (
            <span
              key={greeting.word}
              className={`loader-word${isActive ? ' active' : ''}${isPrevious ? ' exit' : ''}`}
            >
              {greeting.word}
            </span>
          )
        })}
      </div>
      <p className="loader-lang-label">{greetings[index].lang}</p>
      <div className="loader-bar-wrap" aria-hidden="true">
        <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loader-dot-row" aria-hidden="true">
        {greetings.map((greeting, dotIndex) => (
          <span key={greeting.word} className={`loader-dot${dotIndex <= index ? ' active' : ''}`} />
        ))}
      </div>
    </div>
  )
}
