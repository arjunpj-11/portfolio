import type { Skill } from '../data/portfolio'

type SkillsSectionProps = {
  skills: Skill[]
  techTags: readonly string[]
}

export default function SkillsSection({ skills, techTags }: SkillsSectionProps) {
  return (
    <section id="skills" className="section-block" aria-labelledby="skills-heading">
      <div className="section-header reveal">
        <p className="section-eyebrow">What I bring</p>
        <h2 className="section-title" id="skills-heading">
          Personal <em>Skills</em>
        </h2>
        <div className="section-rule" role="presentation" />
      </div>

      <div className="skills-grid">
        <div className="skills-card reveal-left" role="list" aria-label="Technical skills">
          {skills.map((skill) => (
            <article className="skill-row" role="listitem" key={skill.name}>
              <div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc-small">{skill.description}</p>
              </div>
              <span className="skill-level">{skill.level}</span>
            </article>
          ))}
        </div>

        <div className="skills-copy reveal-right">
          <p className="skills-desc">
            I got into programming because of my love for Mathematics — and that same logical,
            problem-solving mindset drives how I approach system design and backend architecture. I
            specialize in building scalable production-grade backends with clean architecture
            patterns.
          </p>
          <div className="skills-tags stagger" role="list" aria-label="Technology stack">
            {techTags.map((tag) => (
              <span className="tag" role="listitem" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
