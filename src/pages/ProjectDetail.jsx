import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <main className="page project-detail">
      <Link to="/projects" className="back-link">
        Volver a proyectos
      </Link>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </main>
  )
}

export default ProjectDetail