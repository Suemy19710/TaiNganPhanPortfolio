import { experience } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="timeline">
      <div className="wrap">
        <SectionHead title="Timeline" index="03">Client work, freelance and student involvement at a glance, most recent first.</SectionHead>
        <Reveal as="ol" className="timeline" reversed>
          {experience.map((e) => (
            <li key={e.title}>
              <span className="when">{e.when}</span>
              <div><h3>{e.title}</h3><p>{e.text}</p></div>
              {e.kind ? <span className="kind">{e.kind}</span> : <span aria-hidden="true" />}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
