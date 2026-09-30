import { profile } from '../data/content.js'
import CopyButton from './CopyButton.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <p className="hello">Let's work together</p>
        <h2 className="display">Say hello</h2>
        <div className="contact-grid">
          <p>
            I'm looking for an internship where I can support marketing and communication work, from research to
            content. If your team has a place for me, I'd love to hear from you.
          </p>
          <div className="lines">
            <div className="line">
              <div><span className="label">Email</span><a href={'mailto:' + profile.email}>{profile.email}</a></div>
              <CopyButton text={profile.email} />
            </div>
            <div className="line">
              <div><span className="label">Phone</span><a href={'tel:' + profile.phoneRaw}>{profile.phone}</a></div>
              <CopyButton text={profile.phoneRaw} />
            </div>
            <div className="line">
              <div><span className="label">LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinLabel}</a></div>
              <a className="copy" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile (opens in a new tab)">Open</a>
            </div>
            <div className="line">
              <div><span className="label">Location</span><span className="val">{profile.location}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
