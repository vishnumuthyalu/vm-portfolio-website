import { useState } from 'react'
import '../styles/Projects.css'

const websites = [
  {
    title: "Mendoza Cleaning Services Website",
    description: "Developed a responsive single-page web app with React 19 and Create React App, styled with custom CSS (flexbox/grid, gradients, and media queries) to deliver a clean UX for service listings, about content, and contact CTAs.",
    live: 'https://casamendozacleaning.netlify.app/',
    repo: 'https://github.com/vishnumuthyalu/mendoza_website',
    image: null,
  },
  {
    title: "UT San Antonio Corrosion Lab Website",
    description: "UTSA Corrosion Research Lab Website is a modern academic web platform developed for Dr. Brendy Rincon Troconis's Corrosion Research Laboratory at UT San Antonio, built with React 19, React Router, and Vite. The site features a comprehensive content management system with dynamic pages for research projects, publications, staff profiles, equipment galleries, and STEM outreach programs. Interactive UI components include image carousels, publication timelines, role-based staff directory filtering, and detailed equipment showcases — collectively presenting 20+ research publications and 15+ specialized lab instruments. The project was built with a component-based architecture, CSS Grid/Flexbox layouts, and Lucide React icons, delivering a professional, accessible, and fully responsive academic portfolio that promotes the lab's corrosion science research and outreach initiatives.",
    live: 'https://corrosion-lab-utsa.netlify.app/',
    repo: 'https://github.com/vishnumuthyalu/CorrosionLabWebsite',
    image: null,
  },
  {
    title: "GEARBOX SUPPLY - Auto Part E-commerce Website",
    description: "Gearbox Supply is a dynamic automotive parts e-commerce platform built with React.js and Firebase, developed as part of a collaborative project at UT San Antonio. The application features a multi-page experience including a homepage with featured parts, a categorized shop, a services page, and a car-specific lookup page, all tied together with a responsive navigation system and live search functionality. Firebase powers real-time inventory management, cart synchronization, and user authentication with secure login and sign-up flows. The cart system supports full item management — adding, removing, and quantity updates — all reflected instantly via Firebase's real-time database. Additional features include an in-progress AI chatbot (GearBot) leveraging the Gemini Flash API, rounding out a full-featured, production-minded shopping experience.",
    live: '',
    repo: 'https://github.com/vishnumuthyalu/errorlist-autoparts-website',
    image: null,
  },
]

const projects = [
  {
    title: "WorkLogger v1.0",
    description:
      "full-stack daily productivity application built with Python and Streamlit, featuring an interactive calendar interface, real-time data visualization, and a robust SQLAlchemy/SQLite database layer with automated schema management and session state optimization. The app supports multi-format document export (CSV, Word, and plain text) and includes a secure SMTP email integration with SSL/TLS encryption for seamless log delivery. Engineered with a modular architecture — spanning database utilities, export functions, email services, and configuration management — WorkLogger demonstrates clean separation of concerns and production-ready development practices across a full application stack.",
    repo: 'https://github.com/vishnumuthyalu/WorkLogger',
    image: null,
  },
  {
    title: "Facial Recognition & Age/Emotion Detection Machine Learning",
    description:
      "Facial Recognition & Age/Emotion Detection is a real-time machine learning system built with OpenCV and convolutional neural networks, developed as part of a collaborative project at UT San Antonio. The system integrates facial recognition, emotion detection, and age prediction into a unified pipeline capable of processing live video at ~18 FPS on standard hardware. Emotion detection was trained on the FER-2013 dataset over 50 epochs, achieving 72% categorical accuracy, while the age prediction model reached a Mean Absolute Error of 3.8 years. The project involved end-to-end ownership of data preprocessing, model training, and optimized video feed pipelines to ensure reliable real-time performance.",
    repo: 'https://github.com/vishnumuthyalu/AgeEmotionDetection',
    image: null,
  },
  {
    title: "MyRunBuddy",
    description:
      "Full-stack Android application built in Java and Kotlin using Android Studio, designed as a comprehensive companion tool for runners. The app features a multi-screen interface for logging detailed run metrics — including distance, duration, pace, and BPM — backed by a SQLite database supporting full CRUD operations. A standout feature is RunBuddy, an integrated AI chatbot powered by Google's Gemini 1.5 Flash API, which provides personalized guidance on running, health, and fitness. The project emphasized clean UI/UX design with responsive elements for a smooth experience across Android devices, and was architected in both Java and Kotlin to keep the codebase flexible for future enhancements",
    repo: 'https://github.com/vishnumuthyalu/MyRunBuddyApplication',
    image: null,
  },
  {
    title: "Car Dealership Database",
    description:
      "Car Dealership Database is a relational database system designed and built in MySQL/MySQL Workbench as part of a collaborative project at UT San Antonio. The schema was architected to Third Normal Form (3NF) via a comprehensive entity relationship diagram, covering customer data, vehicle inventory, service records, sales transactions, and price audits. The project included crafting optimized queries, building real-time views for service progress tracking, and engineering stored procedures for dynamic inventory cost calculation and market-driven price adjustments — with automatic triggers to maintain a synchronized price audit table. The result is a fully normalized, production-minded database demonstrating strong relational design and advanced MySQL functionality.",
    repo: 'https://github.com/vishnumuthyalu/Car-Dealership-Database',
    image: null,
  }
]

function Projects() {
  const [tab, setTab] = useState('apps')
  const [current, setCurrent] = useState(0)
  const [webCurrent, setWebCurrent] = useState(0)

  const prev    = () => setCurrent(i    => (i    - 1 + projects.length) % projects.length)
  const next    = () => setCurrent(i    => (i    + 1)                   % projects.length)
  const webPrev = () => setWebCurrent(i => (i    - 1 + websites.length) % websites.length)
  const webNext = () => setWebCurrent(i => (i    + 1)                   % websites.length)

  const p = projects[current]
  const w = websites[webCurrent]

  return (
    <section id="projects" className="section">
      <p className="section-label">02 · PROJECTS</p>

      {/* ── Tab switcher ── */}
      <div className="proj-tabs">
        <button
          className={`proj-tab${tab === 'apps' ? ' proj-tab-active' : ''}`}
          onClick={() => setTab('apps')}
        >
          APPLICATIONS
        </button>
        <button
          className={`proj-tab${tab === 'websites' ? ' proj-tab-active' : ''}`}
          onClick={() => setTab('websites')}
        >
          WEBSITES
        </button>
      </div>

      {tab === 'apps' && <div className="proj-slideshow">
        {/* ── Slide ── */}
        <div className="proj-slide" key={current}>

          {/* Browser-window image card */}
          <div className="proj-image-card">
            <div className="proj-card-bar">
              <span className="t-dot t-red" />
              <span className="t-dot t-yellow" />
              <span className="t-dot t-green" />
              <span className="proj-card-url">localhost:3000</span>
            </div>
            <div className="proj-card-body">
              {p.image
                ? <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="proj-screenshot-img"
                  />
                : <div className="proj-screenshot-ph">
                    <span className="proj-ph-icon">[ screenshot ]</span>
                    <span className="proj-ph-sub">replace with project image</span>
                  </div>
              }
            </div>
          </div>

          {/* Project info */}
          <div className="proj-info">
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.description}</p>
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-repo-btn"
            >
              ↗ view on github
            </a>
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="proj-nav">
          <button className="proj-arrow" onClick={prev} aria-label="Previous project">‹</button>
          <div className="proj-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`proj-dot${i === current ? ' proj-dot-active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
          <button className="proj-arrow" onClick={next} aria-label="Next project">›</button>
          <span className="proj-counter">
            {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>}

      {tab === 'websites' && (
        <div className="proj-slideshow">
          <div className="proj-slide" key={webCurrent}>

            {/* Browser-window image card */}
            <div className="proj-image-card">
              <div className="proj-card-bar">
                <span className="t-dot t-red" />
                <span className="t-dot t-yellow" />
                <span className="t-dot t-green" />
                <span className="proj-card-url">{w.live.replace(/^https?:\/\//, '')}</span>
              </div>
              <div className="proj-card-body">
                {w.image
                  ? <img src={w.image} alt={`${w.title} screenshot`} className="proj-screenshot-img" />
                  : <div className="proj-screenshot-ph">
                      <span className="proj-ph-icon">[ screenshot ]</span>
                      <span className="proj-ph-sub">replace with project image</span>
                    </div>
                }
              </div>
            </div>

            {/* Project info */}
            <div className="proj-info">
              <h3 className="proj-title">{w.title}</h3>
              <p className="proj-desc">{w.description}</p>
              <div className="proj-web-btns">
                <a href={w.live} target="_blank" rel="noopener noreferrer" className="proj-repo-btn">↗ live site</a>
                <a href={w.repo} target="_blank" rel="noopener noreferrer" className="proj-repo-btn">↗ github</a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="proj-nav">
            <button className="proj-arrow" onClick={webPrev} aria-label="Previous website">‹</button>
            <div className="proj-dots">
              {websites.map((_, i) => (
                <button
                  key={i}
                  className={`proj-dot${i === webCurrent ? ' proj-dot-active' : ''}`}
                  onClick={() => setWebCurrent(i)}
                  aria-label={`Go to website ${i + 1}`}
                />
              ))}
            </div>
            <button className="proj-arrow" onClick={webNext} aria-label="Next website">›</button>
            <span className="proj-counter">
              {String(webCurrent + 1).padStart(2, '0')} / {String(websites.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
