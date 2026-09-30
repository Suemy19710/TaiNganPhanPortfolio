import { profile, facts, tickerItems } from '../data/content.js'

export default function Hero() {
  // Ticker content is doubled so the CSS loop (translateX -50%) is seamless.
  const ticker = [...tickerItems, ...tickerItems]

  return (
    <header className="hero" id="top">
      <div className="hero-deco" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="watermark">Portfolio</span>
        <span className="ring r1" />
        <span className="ring r2" />
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="status"><i></i>{profile.status}</span>
            <p className="hello">Hi, I'm {profile.firstName}</p>
            <h1 className="display name" aria-label={profile.fullName}>
              <span>{profile.firstName}</span>
              <span className="outline">{profile.lastName}</span>
            </h1>
            <p className="lede">
              International Communication Management student based in the Netherlands. I turn <b>audience research</b> into{' '}
              <b>stories and campaigns</b> people care about.
            </p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#work">See my work</a>
              <a className="btn btn-ghost" href="#contact">Contact me</a>
            </div>
          </div>
          <div className="portrait">
            <figure><img src={profile.portrait} alt={'Portrait of ' + profile.shortName} /></figure>
            <div className="tag-float"><strong>{profile.tag.title}</strong>{profile.tag.text}</div>
          </div>
        </div>
        <div className="facts">
          {facts.map((f) => (
            <div key={f.label}><span className="label">{f.label}</span><strong>{f.value}</strong></div>
          ))}
        </div>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {ticker.map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
    </header>
  )
}
