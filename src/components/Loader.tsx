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
    const wordTimer = window.setInterval(() => {
      setIndex((current) => (current + 1) % greetings.length)
    }, 430)

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + 4, 100)
        if (next >= 100) {
          window.clearInterval(progressTimer)
          window.clearInterval(wordTimer)
          window.setTimeout(() => setHiding(true), 350)
          window.setTimeout(onDone, 980)
        }
        return next
      })
    }, 65)

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
