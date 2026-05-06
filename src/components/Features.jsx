import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '⚡',
    title: 'Intelligent Automation',
    desc: 'AI-driven systems that learn, adapt, and execute complex workflows autonomously.',
    delay: 0,
  },
  {
    icon: '🏗️',
    title: 'AI-Driven Infrastructure',
    desc: 'Enterprise-grade infrastructure built from the ground up for AI workloads.',
    delay: 0.05,
  },
  {
    icon: '🔁',
    title: 'Scalable Workflows',
    desc: 'Processes that scale from startup to enterprise without architectural limits.',
    delay: 0.1,
  },
  {
    icon: '🏢',
    title: 'Enterprise-Level Systems',
    desc: 'Production-ready systems designed for reliability, security, and performance.',
    delay: 0.15,
  },
  {
    icon: '🚀',
    title: 'Future-Ready Architecture',
    desc: 'Modular, composable systems built to evolve with emerging AI capabilities.',
    delay: 0.2,
  },
  {
    icon: '⚙️',
    title: 'Fast Deployment',
    desc: 'Rapid implementation cycles that deliver working AI systems in record time.',
    delay: 0.25,
  },
]

export default function Features() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={ref} className="relative py-28 overflow-hidden" style={{ background: '#050816' }}>
      <div className="grid-bg" style={{ opacity: 0.4 }} />

      {/* Center glow */}
      <div
        style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translateX(-50%)',
          width: 600, height: 300,
          background: 'radial-gradient(ellipse, rgba(123,94,167,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <div className="label-tag mx-auto mb-5">Why Choose Us</div>
          <h2 className="section-title text-4xl md:text-5xl mb-5" style={{ color: '#fff' }}>
            WHY <span className="shimmer-text">AUTO AI GROW</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Six core principles that define our approach to building intelligent AI systems.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="section-reveal feature-card"
              style={{ transitionDelay: `${f.delay}s` }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: 18,
                  filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.3))',
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'Syne,sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#fff',
                  marginBottom: 10,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                {f.desc}
              </p>

              {/* Hover corner accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 16, right: 16,
                  width: 24, height: 24,
                  borderTop: '2px solid rgba(0,212,255,0.3)',
                  borderRight: '2px solid rgba(0,212,255,0.3)',
                  borderRadius: '0 4px 0 0',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
