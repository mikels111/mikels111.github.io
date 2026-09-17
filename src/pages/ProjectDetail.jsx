import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function resolveImagePath(path) {
  return path.startsWith('$/') ? import.meta.env.BASE_URL + path.slice(2) : path
}

function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <main className="page project-detail">
      <Link
        to="/projects"
        className="back-link"
        aria-label="Volver a proyectos"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="presentation"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </Link>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>{project.longDescrition}</p>
      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {project.images && (
        <div className="project-gallery">
          {project.images.map((path) => (
            <a
              key={path}
              href={resolveImagePath(path)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={resolveImagePath(path)} alt={project.name} loading="lazy" />
            </a>
          ))}
        </div>
      )}
    </main>
  )
}

export default ProjectDetail