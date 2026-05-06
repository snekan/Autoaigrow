import { useEffect, useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="cta-gradient relative py-32 overflow-hidden">
      {/* Grid */}
      <div className="grid-bg" />

      {/* Radial glow rings */}
      <div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 700,
          border: '1px solid rgba(0,212,255,0.05)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500, height: 500,
          border: '1px solid rgba(0,212,255,0.08)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <div className="section-reveal flex flex-col items-center gap-8">
          <div className="label-tag">Get Started</div>

          <h2 className="section-title text-4xl md:text-6xl" style={{ color: '#fff' }}>
            THE FUTURE OF INTELLIGENT{' '}
            <span className="shimmer-text">AUTOMATION</span>
            <br />STARTS HERE
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560 }}>
            Modern businesses require intelligent systems. Auto AI Grow is building the future of scalable AI automation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href="mailto:contact@autoaigrow.com"
              id="contact-us-btn"
              className="btn-primary"
              style={{ fontSize: '0.9rem', padding: '16px 40px' }}
            >
              CONTACT US
            </a>
            <a href="#services" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '16px 40px' }}>
              Explore Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 32 }}>
            {['Enterprise-Ready', 'AI-Native', 'Scalable Infrastructure', 'Rapid Deployment'].map(badge => (
              <div
                key={badge}
                className="flex items-center gap-2"
                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
