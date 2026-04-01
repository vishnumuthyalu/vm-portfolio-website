import { useState } from 'react'
import '../styles/Experience.css'

const experiences = [
  {
    role: 'Data Analyst',
    company: 'Requiron Engineering and Marine LLC',
    period: 'July 2025 – Present',
    location: 'Houston, TX',
    bullets: [
     "This is where things got really interesting. I stepped into the marine energy world and found myself writing Python scripts to pull real-time sensor data over MQTT, building WPF tools to automate tedious CSV merging, and even programming Siemens PLCs — all in the same week. I also got to build a web dashboard in React and Node.js that visualizes live data streaming across multiple vessels. Oh, and I attended the 2025 Marine Technology Society Dynamic Positioning Conference, which genuinely changed how I think about data's role in maritime safety."
    ],
  },
  {
    role: 'Undergraduate Research Fellow',
    company: 'Computational Turbulence and Visualization Lab, University of Texas at San Antonio',
    period: 'February 2025 – May 2025',
    location: 'San Antonio, TX',
    bullets: [
      "Dr. Guillermo Araya's Computational Turbulence and Visualization Lab was my first real taste of academic research at the intersection of science and visual storytelling. I worked on integrating 3D GLTF assets into Unreal Engine, learned flow-based visualization with C++, and helped produce 4K cinematics of fluid dynamics simulations. It sounds niche — and it is — but it was genuinely one of the coolest things I've worked on."
    ],
  },
  {
    role: 'Computer Science Grader',
    company: 'CS 3853: Computer Architectures, University of Texas at San Antonio',
    period: 'January 2025 – May 2025',
    location: 'San Antonio, TX',
    bullets: [
      "Grading for the Computer Architecture course (CS 3853) taught me something unexpected: explaining concepts to others is one of the best ways to truly understand them yourself. I reviewed student submissions on CPU architecture, memory hierarchy, and instruction set design — and wrote feedback I actually hoped students would read and learn from."
    ],
  },{
    role: 'ServiceNow Student Intern',
    company: 'Bold Careers Program, University of Texas at San Antonio',
    period: 'January 2025 – May 2025',
    location: 'San Antonio, TX',
    bullets: [
      "Through UTSA's Bold Careers Program, I got hands-on with the ServiceNow platform, exploring how AI and ML can drive automation in enterprise environments. I built and deployed apps within the platform while leaning on my JavaScript skills. It gave me a new appreciation for how large organizations use low-code tools to scale their operations."
    ],
  },{
    role: 'Student Strategist for Community First Health Plans',
    company: 'Najim Center, University of Texas at San Antonio',
    period: 'September 2025 – November 2025',
    location: 'San Antonio, TX',
    bullets: [
      "This one was outside my comfort zone in the best way. My team and I developed a strategy to help primary care providers prioritize psychosocial care over medication-first approaches for mental health. I proposed a website chatbot and AI-driven personalization tools to make resources more accessible. Bridging tech and healthcare felt meaningful — and it stuck with me."
    ],
  },{
    role: 'Undergraduate Research Fellow',
    company: 'ParInt Lab, University of Texas at San Antonio',
    period: 'September 2024 – January 2025',
    location: 'San Antonio, TX',
    bullets: [
      "Working in Dr. Sushil Prasad's Parallel and Intelligent Computing Lab, I dove into computational geometry — specifically polygon clipping and overlay algorithms. I got comfortable with CUDA programming in C and C++, contributing to GPU-accelerated solutions. Collaborating closely with a PhD candidate pushed me to think more rigorously about algorithm design."
    ],
  },{
    role: 'Computer Science Student Intern',
    company: 'Aspin Kemp and Associates, Inc.',
    period: 'May 2024 – June 2025',
    location: 'Prince Edwsard Island, Canada',
    bullets: [
      "My first industry internship took me all the way to Canada, and it did not disappoint. I worked with JavaScript source code for energy system control software, wrote PLC code in Structured Command Language, and used IBA Analyzer to dig into battery data from power conversion systems. Setting up and troubleshooting Windows VMs on Linux rounded out what became a really formative few weeks."
    ],
  },{
    role: 'Student Strategist for Inov8',
    company: 'Najim Center, University of Texas at San Antonio',
    period: 'February 2024 – April 2024',
    location: 'San Antonio, TX',
    bullets: [
      "I helped Inov8 — a meeting and event spaces company — rethink their pricing strategy. Leading the market research, I used Python for data analysis and visualization to back up our recommendations. It was a great early lesson in how data can directly inform business decisions."
    ],
  },{
    role: 'Undergraduate Computer Science Tutor',
    company: 'College of Science, University of Texas at San Antonio',
    period: 'August 2023 – December 2024',
    location: 'San Antonio, TX',
    bullets: [
      "For over a year, I held both drop-in and scheduled tutoring sessions for math and CS students. There's something really satisfying about watching someone's face go from confused to 'oh, I get it now.'Tutoring kept my own fundamentals sharp and genuinely made me a better communicator."
    ],
  },
]

const CARDS_PER_PAGE = 3

function Experience() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(experiences.length / CARDS_PER_PAGE)
  const visible = experiences.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE)

  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages)
  const next = () => setPage(p => (p + 1) % totalPages)

  return (
    <section id="experience" className="section">
      <p className="section-label">02 · EXPERIENCE</p>

      <div className="exp-slideshow">
        <div className="exp-slide" key={page}>
          {visible.map((exp, i) => (
            <div className="exp-card" key={i}>
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
          ))}
        </div>

        <div className="exp-nav">
          <button className="exp-arrow" onClick={prev} aria-label="Previous">‹</button>
          <div className="exp-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`exp-dot-btn${i === page ? ' exp-dot-btn-active' : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <button className="exp-arrow" onClick={next} aria-label="Next">›</button>
          <span className="exp-counter">
            {String(page + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Experience
