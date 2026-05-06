import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
        <circle cx="19" cy="5" r="3" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" />
      </svg>
    ),
    title: 'AI Automation',
    desc: 'Streamline repetitive workflows using intelligent automation systems designed for modern businesses.',
    tag: 'AUTOMATE',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b5ea7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 14v7M14 17.5h7" />
      </svg>
    ),
    title: 'AI Agents',
    desc: 'Deploy AI-powered digital agents for productivity, operations, and scalable business interaction.',
    tag: 'DEPLOY',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
    title: 'Workflow Intelligence',
    desc: 'Transform complex processes into optimized intelligent systems with advanced AI integration.',
    tag: 'OPTIMIZE',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b5ea7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Digital Growth Systems',
    desc: 'Build scalable digital infrastructures designed for long-term AI-driven growth.',
    tag: 'SCALE',
  },
]

export default function Services() {
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
    <section id="services" ref={ref} className="relative py-28 overflow-hidden" style={{ background: '#050816' }}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <div className="label-tag mx-auto mb-5">What We Build</div>
          <h2 className="section-title text-4xl md:text-5xl mb-5" style={{ color: '#fff' }}>
            WHAT WE <span className="shimmer-text">BUILD</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Enterprise-grade AI solutions engineered for the next generation of digital business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="section-reveal glass-card neon-border rounded-2xl p-8 flex flex-col gap-5"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="icon-wrapper">{s.icon}</div>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'rgba(0,212,255,0.5)',
                    padding: '4px 10px',
                    border: '1px solid rgba(0,212,255,0.15)',
                    borderRadius: '100px',
                  }}
                >
                  {s.tag}
                </span>
              </div>
              <div>
                <h3
                  style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#fff', marginBottom: 10 }}
                >
                  {s.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
              </div>
              {/* Bottom accent line */}
              <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(0,212,255,0.3), transparent)', marginTop: 'auto' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
