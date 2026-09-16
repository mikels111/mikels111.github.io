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

function Home() {
  return (
    <main className="page">
      <section className="hero-section">
        <h1 style={{ 'line-height': '1' }}>Hola, soy Mikel Seara</h1>
        <h2 style={{ 'line-height': '1.2' }}>Desarrollador full stack. Este es mi espacio de proyectos.</h2>

        <p style={{ 'line-height': '1.5' }}>
          Eexperiencia en .NET C#, React, JavaScript y SQL Server, especializado en el desarrollo de soluciones a medida que combinan aplicaciones web y de escritorio. Enfocado en construir software adaptado a las necesidades del negocio.
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
    </main>
  )
}

export default Home