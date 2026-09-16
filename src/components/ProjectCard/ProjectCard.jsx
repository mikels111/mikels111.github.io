import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Link to={`/projects/${project.id}`} className="project-link">
        <h2 className="project-card-name">{project.name}</h2>
        <p className="project-card-description">{project.description}</p>
      </Link>
    </div>
  )
}

export default ProjectCard