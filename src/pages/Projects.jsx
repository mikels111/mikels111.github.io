import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid'
import { projects } from '../data/projects'

function Projects() {
  const title = 'Projects';
  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  return (
    <main className="page projects-page">
      <h1 className="project-title" style={titleStyle}>
        {title}
      </h1>
      <ProjectsGrid projects={projects} />
    </main>
  )
}

export default Projects