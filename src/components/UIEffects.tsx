import { useEffect } from 'react'

export default function UIEffects() {
  useEffect(() => {
    const progress = document.getElementById('progress-bar')

    const updateProgress = () => {
      if (!progress) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const value = max <= 0 ? 0 : Math.round((window.scrollY / max) * 100)
      progress.style.width = `${value}%`
      progress.setAttribute('aria-valuenow', String(value))
    }

    const revealTargets = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right, .stagger, .section-rule',
    )
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -70px 0px' },
    )
    revealTargets.forEach((target) => revealObserver.observe(target))

    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let frame = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const animateCursor = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(animateCursor)
    }

    const createRipple = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const ripple = document.createElement('span')
      ripple.className = 'ripple'
      const size = Math.max(rect.width, rect.height)
      ripple.style.width = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`
      target.appendChild(ripple)
      window.setTimeout(() => ripple.remove(), 560)
    }

    const rippleTargets = document.querySelectorAll<HTMLElement>(
      '.btn, .project-btn, .contact-submit',
    )
    rippleTargets.forEach((target) => target.addEventListener('click', createRipple))

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    window.addEventListener('mousemove', handleMouseMove)
    updateProgress()
    animateCursor()

    return () => {
      revealObserver.disconnect()
      rippleTargets.forEach((target) => target.removeEventListener('click', createRipple))
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      window.removeEventListener('mousemove', handleMouseMove)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div
        id="progress-bar"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
    </>
  )
}
