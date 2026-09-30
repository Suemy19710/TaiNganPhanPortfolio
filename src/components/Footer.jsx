import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>{profile.fullName}</span>
        <span>{profile.footerTagline} · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>
      </div>
    </footer>
  )
}
