import photo from '../assets/vishnu.muthyalu.jpg'

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
          <div className="insert-placeholder">Insert here</div>
        </div>
      </div>
    </section>
  )
}

export default About
