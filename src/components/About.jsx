import photo from '../assets/vishnu.muthyalu.jpg'
import '../styles/About.css'

function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">01 · ABOUT</p>
      <div className="about-grid">
        {/* Left — photo */}
        <div className="about-photo-wrap">
          <img src={photo} alt="Vishnu Muthyalu" className="about-photo" />
        </div>

        {/* Right — bio */}
        <div className="about-text">
          <h2 className="about-name">Vishnu Muthyalu</h2>
          <p className="about-bio">Hey, I'm Vishnu, a CS grad from UT San Antonio (Cum Laude, 3.55 GPA) who just can't pick one lane and honestly doesn't want to. I'm currently a Data Analyst at Requiron Engineering &amp; Marine in Houston, building real-time vessel monitoring dashboards, industrial IoT pipelines, and automation tooling across the full stack. Before that I spent time doing ML research, tutoring CS students, interning in Canada at a marine energy firm, and shipping web apps for real clients. My sweet spot is anywhere software meets data — full-stack engineering, AI/ML systems, or research that pushes both. I'm wrapping up my current role in June and heading into a Master's degree in Fall 2026, and I'm actively looking for Fall 2026 internships, full-time SWE or Data Science roles, and research opportunities. If something you're working on sounds like a fit, let's talk.</p>
        </div>
      </div>
    </section>
  )
}

export default About
