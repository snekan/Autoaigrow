import { useEffect, useRef } from 'react'

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#7b5ea7' : 'rgba(255,255,255,0.6)',
            animationDuration: `${10 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 10}s`,
            boxShadow: `0 0 ${4 + Math.random() * 6}px currentColor`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Grid background */}
      <div className="grid-bg" />
      <Particles />

      {/* Glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', left: '5%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%', right: '5%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(123,94,167,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-7">
            <div className="label-tag">AI-Powered Growth Platform</div>

            <h1
              className="section-title text-5xl md:text-6xl xl:text-7xl"
              style={{ color: '#ffffff', lineHeight: 1.05 }}
            >
              AUTOMATE{' '}
              <span className="shimmer-text">GROWTH</span>
              <br />
              WITH INTELLIGENT
              <br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>AI SYSTEMS</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 500 }}>
              Auto AI Grow builds scalable AI workflows, intelligent automation systems, and future-ready digital solutions for creators, startups, and modern businesses.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#services" className="btn-primary">Explore Services</a>
              <button className="btn-secondary">Launching Soon</button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {[
                { value: 'AI-First', label: 'Architecture' },
                { value: '∞', label: 'Scalability' },
                { value: '24/7', label: 'Automation' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1.5rem', color: '#00d4ff' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Visual */}
          <div className="relative flex items-center justify-center">
            {/* Rotating orbit rings */}
            <div
              className="absolute animate-spin-slow"
              style={{ width: 520, height: 520, border: '1px solid rgba(0,212,255,0.08)', borderRadius: '50%' }}
            />
            <div
              className="absolute"
              style={{
                width: 420, height: 420,
                border: '1px solid rgba(123,94,167,0.1)',
                borderRadius: '50%',
                animation: 'spin-slow 30s linear infinite reverse',
              }}
            />

            {/* Main image */}
            <div
              className="relative animate-float-slow rounded-2xl overflow-hidden"
              style={{
                width: '100%',
                maxWidth: 560,
                border: '1px solid rgba(0,212,255,0.2)',
                boxShadow: '0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(123,94,167,0.1), 0 40px 80px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src="/hero-visual.png"
                alt="Futuristic AI Control Center – Auto AI Grow"
                style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              {/* Overlay glow */}
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, transparent 50%, rgba(123,94,167,0.06) 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Bottom gradient fade */}
              <div
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
                  background: 'linear-gradient(to top, #050816, transparent)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-6 right-2 glass-card rounded-xl px-4 py-3 flex items-center gap-3"
              style={{ minWidth: 160 }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 10px #00ff88' }} />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em' }}>SYSTEM STATUS</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>All Systems Active</div>
              </div>
            </div>

            {/* Floating metrics badge */}
            <div
              className="absolute bottom-6 left-2 glass-card rounded-xl px-4 py-3"
              style={{ minWidth: 150 }}
            >
              <div style={{ fontSize: '0.7rem', color: '#00d4ff', letterSpacing: '0.08em', marginBottom: 4 }}>AI PERFORMANCE</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'Syne,sans-serif', color: '#fff' }}>99.9%</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>Uptime & Reliability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
          background: 'linear-gradient(to top, #050816, transparent)',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
