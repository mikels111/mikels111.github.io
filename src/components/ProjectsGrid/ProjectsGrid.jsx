import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectsGrid.css'

function ProjectsGrid({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsGrid