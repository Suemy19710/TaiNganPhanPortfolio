import { about } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  const { seeking } = about
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead title="About me" index="01">{about.intro}</SectionHead>
        <Reveal className="about-grid">
          <div className="about-copy">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="seeking" aria-labelledby="seek-h">
            <span className="label">Currently looking for</span>
            <h3 id="seek-h">{seeking.title}</h3>
            <dl>
              <dt>Roles</dt>
              <dd><div className="chips">{seeking.roles.map((r) => <span className="chip" key={r}>{r}</span>)}</div></dd>
              <dt>Where</dt><dd>{seeking.where}</dd>
              <dt>Strengths</dt><dd>{seeking.strengths}</dd>
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
