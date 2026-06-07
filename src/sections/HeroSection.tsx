import profileImage from '../assets/profile.jpeg'
import type { CSSProperties } from 'react'
import type { PortfolioPayload } from '../lib/api'

type Profile = PortfolioPayload['profile']

type HeroSectionProps = {
  profile: Profile
}

const particles = Array.from({ length: 18 }, (_, index) => ({
  left: `${8 + ((index * 13) % 88)}%`,
  top: `${10 + ((index * 19) % 78)}%`,
  size: `${2 + (index % 4)}px`,
  delay: `${(index % 7) * 0.3}s`,
  duration: `${5 + (index % 5)}s`,
  tx: `${index % 2 === 0 ? 24 : -18}px`,
  ty: `${index % 3 === 0 ? -34 : 28}px`,
  scale: `${0.55 + (index % 4) * 0.15}`,
}))

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="hero" id="about" aria-labelledby="hero-heading">
      <span className="hero-deco-num" aria-hidden="true">01</span>
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="h-particle"
            style={
              {
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                '--dl': particle.delay,
                '--d': particle.duration,
                '--tx': particle.tx,
                '--ty': particle.ty,
                '--ts': particle.scale,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="hero-text">
        <p className="hero-eyebrow">Hello, I'm</p>
        <h1 className="hero-name" id="hero-heading">
          {profile.name},<em>{profile.role.split(' ')[0]} Stack</em>Developer
        </h1>
        <div className="hero-divider" role="presentation" />
        <p className="hero-subtitle">{profile.headline}</p>

        {profile.available && (
          <div className="hero-badge" aria-label="Available for opportunities">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>
        )}

        <div className="hero-stats" aria-label="Quick stats">
          {profile.stats.map((stat, index) => (
            <div className="hero-stat-group" key={stat.label}>
              {index > 0 && <div className="hero-stat-sep" role="presentation" />}
              <div className="hero-stat">
                <span className="hero-stat-num">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="site-url">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/arjun-pj
          </a>
        </p>

        <div className="hero-links">
          <a href="#projects" className="btn btn-ghost">
            View Projects
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-orbit hero-orbit-1">
          <div className="hero-orbit-dot" />
        </div>
        <div className="hero-orbit hero-orbit-2">
          <div className="hero-orbit-dot" />
        </div>
        <div className="hero-photo-ring">
          <img src={profileImage} alt="" width="640" height="640" fetchPriority="high" />
        </div>
        <svg
          className="snowflake-svg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <g fill="none" stroke="#555" strokeWidth="8" strokeLinecap="round">
            <line x1="100" y1="20" x2="100" y2="180" />
            <line x1="20" y1="100" x2="180" y2="100" />
            <line x1="43" y1="43" x2="157" y2="157" />
            <line x1="157" y1="43" x2="43" y2="157" />
          </g>
        </svg>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
