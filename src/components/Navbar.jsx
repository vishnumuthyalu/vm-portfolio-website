import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ResumeModal from './ResumeModal'
import '../styles/Navbar.css'

function Navbar({ theme, toggleTheme }) {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">VM</Link>
        <ul className="nav-links">
          <li><NavLink to="/about"      end>About</NavLink></li>
          <li><NavLink to="/experience" end>Experience</NavLink></li>
          <li><NavLink to="/projects"   end>Projects</NavLink></li>
          <li><NavLink to="/contact"    end>Contact</NavLink></li>
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
