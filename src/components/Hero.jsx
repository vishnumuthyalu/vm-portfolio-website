import Terminal from './Terminal'
import '../styles/Hero.css'

function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <Terminal />
      <div className="scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

export default Hero
