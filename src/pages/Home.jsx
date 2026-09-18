const skills = [
  { name: '.NET', color: '#512BD4', text: '#ffffff' },
  { name: 'JavaScript', color: '#F7DF1E', text: '#1a1a1a' },
  { name: 'React', color: '#61DAFB', text: '#0d1117' },
  { name: 'MySQL', color: '#4479A1', text: '#ffffff' },
  { name: 'SQL Server', color: '#CC2927', text: '#ffffff' },
  { name: 'Git', color: '#F05033', text: '#ffffff' },
  { name: 'HTML5', color: '#E34F26', text: '#ffffff' },
  { name: 'CSS3', color: '#1572B6', text: '#ffffff' },
  { name: 'jQuery', color: '#0769AD', text: '#ffffff' },
  { name: 'Flujo de trabajo con IA', color: '#7C3AED', text: '#ffffff' },
]

const iconProps = {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  role: 'presentation',
}

const specialties = [
  {
    text: 'Aplicaciones frontend (React, Javascript)',
    icon: (
      <svg {...iconProps}>
        <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    text: 'APIs RESTful (ASP.NET Core)',
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 6h.01M6 18h.01" />
      </svg>
    ),
  },
  {
    text: 'Servicios',
    icon: (
      <svg {...iconProps}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    text: 'Aplicaciones de escritorio (.NET Framework)',
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
]

function Home() {
  return (
    <main className="page">
      <section className="hero-section">
        <h1 >Hola, soy Mikel Seara</h1>
        <h2 >Desarrollador full stack. Este es mi espacio de proyectos.</h2>

        <p>
          Experiencia en .NET C#, React, JavaScript y SQL Server, especializado en el desarrollo de soluciones a medida que combinan aplicaciones web y de escritorio. Enfocado en construir software adaptado a las necesidades del negocio.
        </p>
      </section>

      <section className="skills-section">
        <h3 className="skills-title">Habilidades</h3>
        <div className="skills">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill"
              style={{ backgroundColor: skill.color, color: skill.text }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      <section className="specialties-section">
        <h3 className="skills-title">Especialidades</h3>
        <div className="specialties">
          {specialties.map((specialty) => (
            <div key={specialty.text} className="specialty-card">
              {specialty.icon}
              <p>{specialty.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home