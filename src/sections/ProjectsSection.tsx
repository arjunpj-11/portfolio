import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/portfolio'

type ProjectsSectionProps = {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="section-header projects-header reveal">
        <p className="section-eyebrow">Selected Work</p>
        <h2 className="section-title" id="projects-heading">
          Projects <em>Built</em>
        </h2>
        <div className="section-rule" role="presentation" />
      </div>

      <div className="projects-stack">
        {projects.map((project, index) => (
          <article
            className={`project-card reveal ${index % 2 ? 'reverse' : ''}`}
            key={project.title}
          >
            <div className="project-left">
              <span className="project-num">
                <em>{project.accent}</em>
              </span>
              <div className="project-visual">
                {project.socialPreviewImage ? (
                  <figure className="project-preview-frame">
                    <img
                      src={project.socialPreviewImage}
                      alt={project.socialPreviewAlt ?? `${project.title} social preview`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = '/project-previews/Imminiq.png'
                        e.currentTarget.onerror = null
                      }}
                    />
                    <figcaption>{project.title}</figcaption>
                  </figure>
                ) : (
                  <div className="project-visual-bg" aria-hidden="true">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="project-right">
              <span className="project-tag">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-stack-text">{project.stack}</p>
              <div className="project-actions">
                {project.github && (
                  <a
                    href={project.github}
                    className="project-btn project-btn-gh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="project-btn project-btn-live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
