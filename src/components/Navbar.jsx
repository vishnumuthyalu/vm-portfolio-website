import { useState } from 'react'
import ResumeModal from './ResumeModal'

function Navbar({ theme, toggleTheme }) {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <span className="nav-logo">VM</span>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="resume-nav-btn" onClick={() => setResumeOpen(true)}>
              View Complete Resume
            </button>
          </li>
        </ul>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </nav>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  )
}

export default Navbar
