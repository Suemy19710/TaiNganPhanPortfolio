import { education } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <span className="label">Education</span>
        <Reveal className="edu" style={{ marginTop: 14 }}>
          <div><h3>{education.school}</h3><p>{education.degree}</p></div>
          <span className="when">{education.when}</span>
        </Reveal>
      </div>
    </section>
  )
}
