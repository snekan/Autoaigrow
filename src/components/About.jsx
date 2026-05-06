import { useEffect, useRef } from 'react'

const pillars = [
  { label: 'Practical AI', color: '#00d4ff' },
  { label: 'Scalable Systems', color: '#7b5ea7' },
  { label: 'Modern Automation', color: '#00d4ff' },
  { label: 'Business Intelligence', color: '#7b5ea7' },
]

export default function About() {
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
      id="about"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: '#0B1020' }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 800, height: 400,
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual panel */}
          <div className="section-reveal relative">
            {/* Main panel */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(5,8,22,0.8)',
                border: '1px solid rgba(0,212,255,0.15)',
                boxShadow: '0 0 60px rgba(0,212,255,0.08), 0 40px 80px rgba(0,0,0,0.4)',
                padding: '2px',
              }}
            >
              <div style={{ background: 'rgba(11,16,32,0.9)', borderRadius: 14, padding: 32 }}>
                {/* Fake terminal header */}
                <div className="flex items-center gap-2 mb-6">
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                  ))}
                  <div style={{ marginLeft: 8, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
                    auto-ai-grow / system-core
                  </div>
                </div>

                {/* Fake code lines */}
                {[
                  { indent: 0, content: 'initialize_ai_engine()', color: '#00d4ff' },
                  { indent: 1, content: '→ workflow.optimize()', color: 'rgba(255,255,255,0.6)' },
                  { indent: 1, content: '→ agents.deploy(count=∞)', color: 'rgba(255,255,255,0.6)' },
                  { indent: 1, content: '→ growth.scale()', color: '#7b5ea7' },
                  { indent: 0, content: 'status: OPERATIONAL ✓', color: '#00ff88' },
                ].map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.9rem',
                      color: line.color,
                      paddingLeft: line.indent * 24,
                      marginBottom: 10,
                      opacity: 0,
                      animation: `fade-up 0.5s ease forwards`,
                      animationDelay: `${0.2 + i * 0.15}s`,
                    }}
                  >
                    {line.content}
                  </div>
                ))}

                {/* Progress bars */}
                <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { label: 'AI Processing', value: 94 },
                    { label: 'Workflow Efficiency', value: 87 },
                    { label: 'System Scale', value: 100 },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                        <span style={{ fontSize: '0.75rem', color: '#00d4ff', fontWeight: 600 }}>{item.value}%</span>
                      </div>
                      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${item.value}%`,
                            background: 'linear-gradient(90deg, #00aaff, #00d4ff)',
                            borderRadius: 4,
                            boxShadow: '0 0 10px rgba(0,212,255,0.4)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div
              className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div style={{ fontSize: '0.7rem', color: '#00d4ff', marginBottom: 2 }}>NEXT-GEN</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>AI Architecture</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="section-reveal flex flex-col gap-7" style={{ transitionDelay: '0.2s' }}>
            <div className="label-tag">About Us</div>
            <h2 className="section-title text-4xl md:text-5xl" style={{ color: '#fff' }}>
              BUILT FOR THE{' '}
              <span className="shimmer-text">AI-DRIVEN</span>
              <br />FUTURE
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '1rem' }}>
              Auto AI Grow focuses on building intelligent digital systems that simplify operations, automate workflows, and help businesses scale efficiently through practical AI implementation.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Our mission is to combine modern automation technologies with scalable business intelligence solutions for the next generation of digital growth.
            </p>

            {/* Pillars */}
            <div className="flex flex-wrap gap-3 mt-2">
              {pillars.map(p => (
                <div
                  key={p.label}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 8,
                    border: `1px solid ${p.color}30`,
                    background: `${p.color}08`,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: p.color,
                  }}
                >
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
