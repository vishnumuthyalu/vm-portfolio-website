import '../styles/Experience.css'

const experiences = [
  {
    role: 'Role Title',
    company: 'Company Name',
    period: 'Month Year – Month Year',
    location: 'City, State',
    bullets: [
      'Key responsibility or achievement',
      'Another contribution or technology used',
      'Impact, metric, or outcome',
    ],
  },
  {
    role: 'Role Title',
    company: 'Company Name',
    period: 'Month Year – Month Year',
    location: 'City, State',
    bullets: [
      'Key responsibility or achievement',
      'Another contribution or technology used',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">02 · EXPERIENCE</p>

      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-entry" key={i}>
            {/* Timeline spine dot */}
            <div className="exp-dot" />

            {/* Card */}
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-header-left">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <div className="exp-header-right">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
