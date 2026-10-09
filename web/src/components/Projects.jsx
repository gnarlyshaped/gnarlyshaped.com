export default function Projects({ projects }) {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">What we're building</h2>
      </div>
      <ol className="projects">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </ol>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const { name, tagline, description, tags = [], status, url, image, accent } = project
  const number = String(index + 1).padStart(2, '0')

  return (
    <li className="project" style={{ '--accent': accent }}>
      <div className="project-visual" aria-hidden={!image}>
        {image ? (
          <img src={image} alt={`${name} screenshot`} loading="lazy" />
        ) : (
          <span className="project-monogram">{name.charAt(0)}</span>
        )}
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-number">{number}</span>
          {status && <span className="project-status">{status}</span>}
        </div>
        <h3 className="project-name">{name}</h3>
        <p className="project-tagline">{tagline}</p>
        <p className="project-description">{description}</p>
        {tags.length > 0 && (
          <ul className="project-tags">
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        )}
        {url && (
          <a className="button" href={url} target="_blank" rel="noreferrer">
            Visit {name} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </li>
  )
}
