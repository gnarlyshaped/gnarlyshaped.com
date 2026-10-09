import Logo from './Logo.jsx'
import { directors } from '../content.js'

export default function About({ focus, onFocus }) {
  return (
    <section className="section about" id="about">
      <div className="section-head">
        <p className="eyebrow">About</p>
        <h2 className="section-title">The name, explained</h2>
      </div>
      <div className="about-grid">
        <Logo focus={focus} small />
        <div>
          <p className="about-text">
            <strong>Gnarly Shaped Inc.</strong> reflects our innovative and creative approach to
            software development. The term <strong>'gnarly'</strong> embodies our commitment to
            uniqueness and excellence, while <strong>'shaped'</strong> emphasizes the craftsmanship
            and attention to detail we invest in every project.
          </p>
          <ul className="directors">
            {directors.map((d) => (
              <li
                key={d.focus}
                className="director"
                tabIndex={0}
                onMouseEnter={() => onFocus(d.focus)}
                onMouseLeave={() => onFocus('')}
                onFocus={() => onFocus(d.focus)}
                onBlur={() => onFocus('')}
              >
                <img className="avatar" src={d.avatar} alt="" />
                <span className="label" data-alias={d.alias}>
                  <span className="name">{d.first} <span className="last">{d.last}</span></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
