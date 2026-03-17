import { useState, useEffect, useRef } from 'react'

const SCRIPT = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Vishnu Muthyalu' },
  { type: 'out', text: 'CS Student  ·  Full-Stack Developer' },
  { type: 'out', text: 'Available for Summer 2026 internships' },
  { type: 'gap' },
  { type: 'cmd', text: 'cat skills.json' },
  { type: 'out', text: ' "frontend": ["React", "TypeScript", "Tailwind"],' },
  { type: 'out', text: '  "backend":  ["Node.js", "Python", "SQL"],' },
  { type: 'out', text: '  "tools":    ["Git", "Docker", "AWS"] }' },
  { type: 'gap' },
  { type: 'cmd', text: 'echo $STATUS' },
  { type: 'out', text: '✓  Open to opportunities — let\'s build something.' },
]

function Terminal() {
  const [lines,  setLines]  = useState([])
  const [typing, setTyping] = useState('')
  const [done,   setDone]   = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    let timeout

    function run(stepIdx, charIdx) {
      if (stepIdx >= SCRIPT.length) {
        setDone(true)
        return
      }

      const item = SCRIPT[stepIdx]

      if (item.type === 'cmd') {
        setTyping(item.text.slice(0, charIdx))
        if (charIdx < item.text.length) {
          timeout = setTimeout(() => run(stepIdx, charIdx + 1), 75)
        } else {
          timeout = setTimeout(() => {
            setLines(prev => [...prev, { type: 'cmd', text: item.text }])
            setTyping('')
            run(stepIdx + 1, 0)
          }, 380)
        }
      } else if (item.type === 'out') {
        setLines(prev => [...prev, { type: 'out', text: item.text }])
        timeout = setTimeout(() => run(stepIdx + 1, 0), 100)
      } else if (item.type === 'gap') {
        setLines(prev => [...prev, { type: 'gap' }])
        timeout = setTimeout(() => run(stepIdx + 1, 0), 180)
      }
    }

    timeout = setTimeout(() => run(0, 0), 700)
    return () => clearTimeout(timeout)
  }, [])

  // Scroll inside the terminal body only — never move the page
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [lines, typing])

  return (
    <div className="terminal">
      {/* Title bar */}
      <div className="terminal-titlebar">
        <span className="t-dot t-red" />
        <span className="t-dot t-yellow" />
        <span className="t-dot t-green" />
        <span className="terminal-title">visitor@vishnu-portfolio: ~</span>
      </div>

      {/* Body */}
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((line, i) => {
          if (line.type === 'gap') return <div key={i} className="t-gap" />
          if (line.type === 'cmd') return (
            <div key={i} className="t-line t-cmd">
              <span className="t-prompt">$</span>
              <span>{line.text}</span>
            </div>
          )
          if (line.type === 'out') return (
            <div key={i} className="t-line t-out">
              <span className="t-arrow">→</span>
              <span>{line.text}</span>
            </div>
          )
          return null
        })}

        {/* Active prompt — typing or idle with blinking cursor */}
        <div className="t-line t-cmd">
          <span className="t-prompt">$</span>
          <span>{typing}</span>
          {!done && <span className="t-blink">█</span>}
          {done  && <span className="t-blink">█</span>}
        </div>

      </div>
    </div>
  )
}

export default Terminal
