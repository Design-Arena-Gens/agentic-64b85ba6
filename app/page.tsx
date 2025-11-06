'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const slides = document.querySelectorAll('.slide')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      slides.forEach((slide, index) => {
        const slideTop = (slide as HTMLElement).offsetTop
        const slideBottom = slideTop + (slide as HTMLElement).offsetHeight

        if (scrollPosition >= slideTop && scrollPosition < slideBottom) {
          setActiveSlide(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSlide = (index: number) => {
    const slide = document.querySelectorAll('.slide')[index]
    slide?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="navigation">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`nav-dot ${activeSlide === i ? 'active' : ''}`}
            onClick={() => scrollToSlide(i)}
          />
        ))}
      </nav>

      <div className="slide-deck">
        {/* Slide 1: Opening */}
        <section className="slide">
          <div className="slide-content center">
            <h1 className="title-main">Toduu</h1>
            <p className="subtitle">Digital Haiku for Task Management</p>
          </div>
          <div className="scroll-indicator">↓ scroll</div>
        </section>

        {/* Slide 2: Haiku Intro */}
        <section className="slide">
          <div className="slide-content">
            <div className="haiku">
              <span className="haiku-line">Tasks fade like petals—</span>
              <span className="haiku-line">simple lists, shared without weight.</span>
              <span className="haiku-line">Focus flows. Breathe deep.</span>
            </div>
          </div>
        </section>

        {/* Slide 3: Philosophy */}
        <section className="slide">
          <div className="slide-content">
            <h2 className="principle-title" style={{ marginBottom: '2rem' }}>
              Radical Simplicity
            </h2>
            <div className="divider"></div>
            <p className="subtitle">
              Toduu is built on one idea: <span className="highlight">clarity through reduction</span>.
              <br /><br />
              We remove cognitive friction through carefully crafted solutions and clever engineering.
              Every detail exists to make focus feel natural.
            </p>
          </div>
        </section>

        {/* Slide 4: Core Principles */}
        <section className="slide">
          <div className="slide-content">
            <div className="principle">
              <h3 className="principle-title">Elegant Intent</h3>
              <p className="principle-text">
                Not a crowded app, but an ecosystem—designed to make collaboration effortless and onboarding invisible.
              </p>
            </div>
            <div className="principle">
              <h3 className="principle-title">Private by Architecture</h3>
              <p className="principle-text">
                Completely GDPR-safe. No personal data stored. Built for trust, calm, and flow.
              </p>
            </div>
            <div className="principle">
              <h3 className="principle-title">Zero Setup Complexity</h3>
              <p className="principle-text">
                Instructors and students share task lists without privacy risk, without setup friction.
              </p>
            </div>
          </div>
        </section>

        {/* Slide 5: For Instructors */}
        <section className="slide">
          <div className="slide-content">
            <h2 className="principle-title" style={{ marginBottom: '2rem' }}>
              For Instructors
            </h2>
            <div className="divider"></div>
            <div className="feature-grid">
              <div className="feature">
                <div className="feature-icon">📋</div>
                <h4 className="feature-title">Create Once</h4>
                <p className="feature-desc">
                  Design assignment lists that students can instantly access—no accounts, no friction.
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon">🔗</div>
                <h4 className="feature-title">Share Seamlessly</h4>
                <p className="feature-desc">
                  One link. That's it. Students join without barriers.
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon">🧘</div>
                <h4 className="feature-title">Stay Calm</h4>
                <p className="feature-desc">
                  No notifications. No complexity. Just clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: For Students */}
        <section className="slide">
          <div className="slide-content">
            <h2 className="principle-title" style={{ marginBottom: '2rem' }}>
              For Students
            </h2>
            <div className="divider"></div>
            <div className="feature-grid">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <h4 className="feature-title">Track Progress</h4>
                <p className="feature-desc">
                  Check off tasks. See what matters. Stay focused.
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon">🔒</div>
                <h4 className="feature-title">Private by Default</h4>
                <p className="feature-desc">
                  Your progress stays yours. No data shared. Complete privacy.
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <h4 className="feature-title">Instant Access</h4>
                <p className="feature-desc">
                  Click link. Start working. No signup required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Design Philosophy */}
        <section className="slide">
          <div className="slide-content center">
            <blockquote className="quote">
              "Behind clean surfaces lies meticulously engineered simplicity."
            </blockquote>
            <p className="subtitle" style={{ marginTop: '3rem' }}>
              Every interaction is considered. Every element serves purpose.
              <br />Nothing is there by accident.
            </p>
          </div>
        </section>

        {/* Slide 8: Technical Excellence */}
        <section className="slide">
          <div className="slide-content center">
            <h2 className="principle-title" style={{ marginBottom: '2rem' }}>
              Engineered for Simplicity
            </h2>
            <div className="divider" style={{ margin: '2rem auto' }}></div>
            <p className="small-text">
              A Supabase-backed monorepo designed with precision.
              <br />Real-time sync. Offline-first. Instant everywhere.
              <br /><br />
              The complexity is hidden. The experience is effortless.
            </p>
            <div className="tech-stack">
              <span className="tech-item">Supabase</span>
              <span className="tech-item">Real-time Sync</span>
              <span className="tech-item">Offline-First</span>
              <span className="tech-item">Zero-Config</span>
            </div>
          </div>
        </section>

        {/* Slide 9: The Promise */}
        <section className="slide">
          <div className="slide-content">
            <div className="haiku">
              <span className="haiku-line">No clutter. No noise.</span>
              <span className="haiku-line">Just tasks that breathe with your mind.</span>
              <span className="haiku-line">Flow state, found.</span>
            </div>
          </div>
        </section>

        {/* Slide 10: Closing */}
        <section className="slide">
          <div className="slide-content center">
            <h1 className="title-main" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              Toduu
            </h1>
            <p className="subtitle">
              Clarity through reduction.
              <br />Collaboration without complexity.
              <br />Focus that feels natural.
            </p>
            <div className="divider" style={{ margin: '3rem auto' }}></div>
            <p className="small-text fade-in">
              Radical Simplicity. Elegant Intent. Digital Haiku.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
