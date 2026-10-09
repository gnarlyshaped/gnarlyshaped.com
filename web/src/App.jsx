import { useState } from 'react'
import Logo from './components/Logo.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import { contactEmail, projects } from './content.js'

export default function App() {
  const [focus, setFocus] = useState('')
  const year = new Date().getFullYear()

  return (
    <>
      <nav className="nav">
        <a className="nav-mark" href="#top" aria-label="Gnarly Shaped Inc. home">GS</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          {contactEmail && <a href="#contact">Contact</a>}
        </div>
      </nav>

      <header className="hero" id="top">
        <Logo />
        <p className="hero-lede">
          A small studio building software with craft. Here's what we're shaping right now.
        </p>
        <a className="hero-cta" href="#work">
          See the work <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main>
        <Projects projects={projects} />
        <About focus={focus} onFocus={setFocus} />
        {contactEmail && (
          <section className="section contact" id="contact">
            <p className="eyebrow">Contact</p>
            <h2 className="contact-title">Have something gnarly in mind?</h2>
            <a className="button" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </section>
        )}
      </main>

      <footer className="footer">© {year} Gnarly Shaped Inc. All Rights Reserved.</footer>
    </>
  )
}
