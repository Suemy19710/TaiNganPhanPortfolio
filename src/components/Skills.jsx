import { skills, certifications } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead title="Skills" index="04">A mix of research, strategy, creativity and digital skills.</SectionHead>
        <Reveal className="skill-grid">
          {skills.map((s) => (
            <div className="skill" key={s.title}>
              <h3><Icon name={s.icon} />{s.title}</h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
          <div className="skill accent">
            <h3><Icon name="award" />Certifications</h3>
            <div className="cert">
              {certifications.map((c) => <div key={c.name}>{c.name}<span>{c.by}</span></div>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
