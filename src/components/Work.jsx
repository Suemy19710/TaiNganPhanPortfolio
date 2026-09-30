import { cases } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import CaseStudy from './CaseStudy.jsx'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead title="Experiences" index="02">
          Each project follows the same path: understand the audience, find the insight, build the idea.
        </SectionHead>
        {cases.map((c, i) => <CaseStudy key={c.id} data={c} index={i} />)}
      </div>
    </section>
  )
}
