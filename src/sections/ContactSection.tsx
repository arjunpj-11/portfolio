import { Linkedin, Github, Mail, MapPin } from 'lucide-react'
import type { PortfolioPayload } from '../lib/api'

type ContactSectionProps = {
  profile: PortfolioPayload['profile']
}

export default function ContactSection({ profile }: ContactSectionProps) {
  function handleContactClick() {
    const subject = encodeURIComponent('Project Idea / Collaboration')
    const body = encodeURIComponent(
      `Hi Arjun,\n\nI'd like to connect with you about...\n\nBest regards,`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-left reveal-left">
        <p className="section-eyebrow">Let's Connect</p>
        <h2 className="section-title" id="contact-heading">
          Have a project <em>idea?</em>
        </h2>
        <div className="section-rule" role="presentation" />
        <p className="contact-intro">
          I'm open to internships, junior full-stack roles, collaboration and interesting product
          ideas.
        </p>
        <div className="contact-info">
          <p>
            <Mail size={17} /> {profile.email}
          </p>
          <p>
            <MapPin size={17} /> {profile.location}
          </p>
        </div>
        <div className="social-profiles stagger">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Linkedin size={13} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Github size={13} /> GitHub
          </a>
        </div>
      </div>

      <div
        className="reveal-right"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <button
          className="contact-submit"
          onClick={handleContactClick}
          style={{ maxWidth: '280px', padding: '18px 32px', fontSize: '0.82rem' }}
        >
          <Mail size={17} /> Contact Now
        </button>
      </div>
    </section>
  )
}
