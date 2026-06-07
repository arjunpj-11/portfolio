import { GraduationCap } from 'lucide-react'
import type { Experience } from '../data/portfolio'

type ExperienceSectionProps = {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="experience-section section-block"
      aria-labelledby="experience-heading"
    >
      <div className="section-header reveal">
        <p className="section-eyebrow">My Journey</p>
        <h2 className="section-title" id="experience-heading">
          Experience &amp; <em>Education</em>
        </h2>
        <div className="section-rule" role="presentation" />
      </div>

      <div className="experience-grid stagger">
        {experiences.map((item, index) => (
          <article className="experience-card" key={`${item.title}-${item.period}`}>
            <div className="experience-left">
              <span className="experience-ghost" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="experience-icon" aria-hidden="true">
                <GraduationCap size={24} />
              </div>
              <p className="experience-type">{item.type}</p>
              <h3 className="experience-title">{item.title}</h3>
              <span className="experience-period">{item.period}</span>
            </div>
            <div className="experience-right">
              <p className="experience-role">{item.subtitle}</p>
              <p className="experience-desc">{item.description}</p>
              <ul className="chip-list" aria-label="Highlights">
                {item.tags.map((tag) => (
                  <li className="chip" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
