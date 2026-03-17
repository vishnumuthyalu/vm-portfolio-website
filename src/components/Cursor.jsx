import { useState, useEffect } from 'react'

function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)

    const addHover = () => setHovered(true)
    const rmHover  = () => setHovered(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    // Expand ring when hovering interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', rmHover)
      })
    }
  }, [visible])

  const opacity = visible ? 1 : 0

  return (
    <>
      {/* Inner dot */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: 8,
          height: 8,
          background: 'var(--accent)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity,
          transition: 'opacity 0.2s',
          boxShadow: '0 0 8px var(--accent), 0 0 22px rgba(0,217,255,0.35)',
        }}
      />
      {/* Outer ring — slightly delayed via CSS transition */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          border: '1px solid rgba(0,217,255,0.55)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: visible ? 0.65 : 0,
          transition:
            'left 0.1s ease-out, top 0.1s ease-out, opacity 0.2s, width 0.2s, height 0.2s',
        }}
      />
    </>
  )
}

export default Cursor
