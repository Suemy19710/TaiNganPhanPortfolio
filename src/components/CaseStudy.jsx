import Reveal from './Reveal.jsx'

function BriefValue({ item }) {
  if (item.chips) {
    return <div className="chips">{item.chips.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
  }
  if (item.emphasis) {
    return <><em>{item.v}</em>{item.after}</>
  }
  return item.v
}

function Gallery({ block }) {
  return (
    <div className={'gallery' + (block.cols === 3 ? ' g3' : '')}>
      {block.images.map((img) => (
        <figure className={img.variant} key={img.alt}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}

function Persona({ block }) {
  return (
    <div className="persona">
      <span className="label">{block.label}</span>
      <blockquote>{block.quote}</blockquote>
      {block.elements && (
        <ul className="elements" aria-label="Chinese Five Elements">
          {block.elements.map((e) => <li key={e}>{e}</li>)}
        </ul>
      )}
      <div className="persona-row">
        {block.numbers.map((n) => <div key={n.l}><b>{n.n}</b><span>{n.l}</span></div>)}
      </div>
      {block.journey && (
        <ol className="journey" aria-label="Project process">
          {block.journey.map((step, i) => (
            <li key={step}><small>{String(i + 1).padStart(2, '0')}</small>{step}</li>
          ))}
        </ol>
      )}
    </div>
  )
}

function ExtraHead({ block }) {
  return (
    <div className="extra-head">
      <h4>{block.title}</h4>
      {block.text && <p>{block.text}</p>}
    </div>
  )
}

function Elements({ block }) {
  return (
    <>
      <ExtraHead block={block} />
      <ul className="element-row">
        {block.items.map((it) => (
          <li key={it.name}>
            <figure>
              <img src={it.src} alt={it.name + ' element moodboard' + (it.notes ? ': ' + it.notes : '')} loading="lazy" />
            </figure>
            <strong>{it.name}</strong>
            {it.notes && <span>{it.notes}</span>}
          </li>
        ))}
      </ul>
    </>
  )
}

function Figure({ img, style }) {
  return (
    <figure className={img.className} style={style}>
      <img src={img.src} alt={img.alt} loading="lazy" />
      {img.caption && <figcaption>{img.caption}</figcaption>}
    </figure>
  )
}

function Figures({ block }) {
  if (block.rows) {
    // justified rows: each image grows by its aspect ratio, so images in a row share one height
    return (
      <>
        <ExtraHead block={block} />
        <div className={'figures ' + (block.layout || '')}>
          {block.rows.map((row, r) => (
            <div className="fig-row" key={r}>
              {row.map((img) => <Figure key={img.alt} img={img} style={{ flex: img.ratio + ' 1 0' }} />)}
            </div>
          ))}
        </div>
      </>
    )
  }
  return (
    <>
      <ExtraHead block={block} />
      <div className={'figures ' + (block.layout || '')}>
        {block.images.map((img) => <Figure key={img.alt} img={img} />)}
      </div>
    </>
  )
}

function Research({ block }) {
  return (
    <>
      <ExtraHead block={block} />
      <div className="research">
        <figure className="panel chart">
          <span className="label">Review analysis</span>
          <img src={block.chart.src} alt={block.chart.alt} loading="lazy" />
          <figcaption>{block.chart.caption}</figcaption>
        </figure>
        <div className="panel">
          <span className="label">Search visibility · Ahrefs</span>
          <table className="kw">
            <thead>
              <tr><th scope="col">Keyword</th><th scope="col">Volume</th><th scope="col">Rank</th></tr>
            </thead>
            <tbody>
              {block.keywords.map((r) => (
                <tr key={r.k}><td>{r.k}</td><td>{r.vol}</td><td><b>{r.rank}</b></td></tr>
              ))}
            </tbody>
          </table>
          <p className="note">{block.keywordNote}</p>
        </div>
        <div className="panel wide">
          <span className="label">Competitor positioning</span>
          <div className="compete">
            {block.competitors.map((c) => (
              <div key={c.name} className={c.self ? 'self' : undefined}>
                <small>{c.name}</small>
                <strong>{c.tone}</strong>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function Campaign({ block }) {
  return (
    <>
      <ExtraHead block={block} />
      <div className="campaign">
        <div className="campaign-top">
          <img className="reel" src={block.reel.src} alt={block.reel.alt} loading="lazy" />
          <figure className="poster-fig"><img src={block.poster.src} alt={block.poster.alt} loading="lazy" /></figure>
        </div>
        <figure className="storyboard">
          <img src={block.storyboard.src} alt={block.storyboard.alt} loading="lazy" />
          <figcaption>{block.storyboard.caption}</figcaption>
        </figure>
      </div>
    </>
  )
}

function Metrics({ block }) {
  return (
    <div className="metrics">
      <div className="metrics-head">
        <h4>{block.title}</h4>
        <span className="label">{block.period}</span>
      </div>
      <ul>
        {block.items.map((m) => <li key={m.l}><b>{m.n}</b><span>{m.l}</span></li>)}
      </ul>
    </div>
  )
}

function Screens({ block }) {
  return (
    <>
      <ExtraHead block={block} />
      <ul className="screens">
        {block.images.map((img) => (
          <li key={img.alt}>
            <figure><img src={img.src} alt={img.alt} loading="lazy" /></figure>
            <span>{img.caption}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'metrics': return <Metrics block={block} />
    case 'screens': return <Screens block={block} />
    case 'gallery': return <Gallery block={block} />
    case 'persona': return <Persona block={block} />
    case 'phone':
      return (
        <div className="phone-wrap">
          <div className="phone"><img src={block.src} alt={block.alt} loading="lazy" /></div>
        </div>
      )
    case 'figure':
      return <figure className={'single ' + (block.className || '')}><img src={block.src} alt={block.alt} loading="lazy" /></figure>
    case 'elements': return <Elements block={block} />
    case 'figures': return <Figures block={block} />
    case 'research': return <Research block={block} />
    case 'campaign': return <Campaign block={block} />
    default: return null
  }
}

export default function CaseStudy({ data, index }) {
  return (
    <Reveal as="article" className="case" id={'case-' + data.id}>
      <div className="case-kicker" aria-hidden="true">
        <span className="num">{String(index + 1).padStart(2, '0')}</span>
        <span className="word">{data.kicker}</span>
      </div>
      <div className="case-copy">
        <div className="case-meta">
          {data.meta.map((m) => <span className="label" key={m}>{m}</span>)}
        </div>
        <h3>
          {/* keep the collaboration "x" lowercase inside the all-caps display face */}
          {data.title.split(' x ').map((part, i) => (
            <span key={i}>{i > 0 && <span className="x"> x </span>}{part}</span>
          ))}
        </h3>
        {data.sub && <p className="sub">{data.sub}</p>}
        <dl className="brief">
          {data.brief.map((b) => (
            <div key={b.k}><dt>{b.k}</dt><dd><BriefValue item={b} /></dd></div>
          ))}
        </dl>
        {data.stats.length > 0 && (
          <div className={'stats' + (data.stats.length === 1 ? ' one' : '')}>
            {data.stats.map((s) => <div className="stat" key={s.l}><b>{s.n}</b><span>{s.l}</span></div>)}
          </div>
        )}
      </div>
      <div className="visual">
        {data.visual.every((b) => b.type === 'phone') && data.visual.length > 1 ? (
          // several phone screenshots sit side by side in one row
          <div className="phone-wrap multi">
            {data.visual.map((b) => <div className="phone" key={b.alt}><img className={b.fit === 'cover' ? 'fill' : undefined} src={b.src} alt={b.alt} loading="lazy" /></div>)}
          </div>
        ) : (
          data.visual.map((b, i) => <Block key={i} block={b} />)
        )}
      </div>
      {data.extra && (
        <div className="case-extra">
          {data.extra.map((b, i) => <section className="extra-block" key={i} aria-label={b.title}><Block block={b} /></section>)}
        </div>
      )}
    </Reveal>
  )
}
