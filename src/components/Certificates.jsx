import { certifications } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="wrap">
        <SectionHead title="Certificates" index="05">Recognition from a client, plus certifications in analytics, digital marketing and social media.</SectionHead>
        <Reveal className="cert-grid">
          {certifications.map((c) => (
            <a
              className={'cert-card' + (c.featured ? ' featured' : '')}
              key={c.name}
              href={c.src}
              target="_blank"
              rel="noreferrer"
              aria-label={'View certificate: ' + c.name + ', ' + c.by + ' (opens in a new tab)'}
            >
              <figure><img src={c.src} alt="" loading="lazy" /></figure>
              <div className="cert-body">
                <span className="label">{c.by} · {c.date}</span>
                <strong>{c.name}</strong>
                {c.detail && <span className="cert-detail">{c.detail}</span>}
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
