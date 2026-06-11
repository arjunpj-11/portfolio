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

    // ── Cursor ──────────────────────────────────────────────────────────────
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')

    // Only run on devices that have a real pointer (not touch-only)
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    let frame = 0

    if (hasPointer && dot && ring) {
      let mouseX = -999   // off-screen until first move
      let mouseY = -999
      let ringX  = -999
      let ringY  = -999
      let active = false

      const showCursor = () => {
        if (!active) {
          active = true
          document.body.classList.add('cursor-active')
        }
      }
      const hideCursor = () => {
        active = false
        document.body.classList.remove('cursor-active')
      }

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX
        mouseY = e.clientY
        showCursor()
        dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }

      const animateCursor = () => {
        ringX += (mouseX - ringX) * 0.18
        ringY += (mouseY - ringY) * 0.18
        ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
        frame = window.requestAnimationFrame(animateCursor)
      }

      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      document.addEventListener('mouseleave', hideCursor)
      document.addEventListener('mouseenter', showCursor)
      animateCursor()

      // cleanup stored so the outer return can reach it
      ;(dot as any)._cleanup = () => {
        window.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseleave', hideCursor)
        document.removeEventListener('mouseenter', showCursor)
        document.body.classList.remove('cursor-active')
        window.cancelAnimationFrame(frame)
      }
    }

    // ── Ripple ──────────────────────────────────────────────────────────────
    const createRipple = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const ripple = document.createElement('span')
      ripple.className = 'ripple'
      const size = Math.max(rect.width, rect.height)
      ripple.style.width  = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.left   = `${event.clientX - rect.left - size / 2}px`
      ripple.style.top    = `${event.clientY - rect.top  - size / 2}px`
      target.appendChild(ripple)
      window.setTimeout(() => ripple.remove(), 560)
    }

    const rippleTargets = document.querySelectorAll<HTMLElement>(
      '.btn, .project-btn, .contact-submit',
    )
    rippleTargets.forEach((t) => t.addEventListener('click', createRipple))

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    return () => {
      revealObserver.disconnect()
      rippleTargets.forEach((t) => t.removeEventListener('click', createRipple))
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      ;(dot as any)?._cleanup?.()
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