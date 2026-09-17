import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function resolveImagePath(path) {
  return path.startsWith('$/') ? import.meta.env.BASE_URL + path.slice(2) : path
}

function repoUrl(repository) {
  return repository.startsWith('http') ? repository : `https://${repository}`
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
      {project.repository && (
        <a
          className="repo-link"
          href={repoUrl(project.repository)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          {project.repository}
        </a>
      )}
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