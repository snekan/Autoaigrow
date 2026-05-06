import { useEffect, useRef } from 'react'

function NeuralCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let w, h

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w
      canvas.height = h
    }
    resize()
    window.addEventListener('resize', resize)

    // Nodes
    const nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 1 + Math.random() * 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Update
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      })

      // Edges
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach(b => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.25
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            grad.addColorStop(0, `rgba(0,212,255,${alpha})`)
            grad.addColorStop(1, `rgba(123,94,167,${alpha})`)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = grad
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      // Dots
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,212,255,0.6)'
        ctx.shadowBlur = 8
        ctx.shadowColor = '#00d4ff'
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}
    />
  )
}

export default function Vision() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="vision"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: '#0B1020' }}
    >
      <NeuralCanvas />

      {/* Deep glow overlay */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <div className="section-reveal flex flex-col items-center gap-7">
          <div className="label-tag">Our Vision</div>

          <h2 className="section-title text-4xl md:text-6xl" style={{ color: '#fff', maxWidth: 780, margin: '0 auto' }}>
            BUILDING THE NEXT GENERATION OF{' '}
            <span className="shimmer-text">AI SYSTEMS</span>
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.85,
              fontSize: '1.05rem',
              maxWidth: 660,
              margin: '0 auto',
            }}
          >
            Auto AI Grow is evolving into a scalable ecosystem of intelligent tools, AI-powered workflows, automation systems, and digital infrastructure solutions designed for the future of modern business.
          </p>

          {/* Timeline dots */}
          <div className="flex items-center gap-0 mt-6">
            {['Today', 'Q3 2025', 'Q1 2026', 'Future'].map((label, i) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div
                    style={{
                      width: i === 0 ? 14 : 10,
                      height: i === 0 ? 14 : 10,
                      borderRadius: '50%',
                      background: i === 0 ? '#00d4ff' : 'rgba(0,212,255,0.3)',
                      boxShadow: i === 0 ? '0 0 15px rgba(0,212,255,0.7)' : 'none',
                      border: i === 0 ? 'none' : '1px solid rgba(0,212,255,0.3)',
                    }}
                  />
                  <span style={{ fontSize: '0.72rem', color: i === 0 ? '#00d4ff' : 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                    {label}
                  </span>
                </div>
                {i < 3 && (
                  <div
                    style={{
                      width: 80,
                      height: 1,
                      background: 'linear-gradient(90deg, rgba(0,212,255,0.4), rgba(0,212,255,0.1))',
                      marginBottom: 22,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
