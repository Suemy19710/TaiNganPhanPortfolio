export default function SectionHead({ title, index, children }) {
  return (
    <div className="sec-head">
      <h2 className="display">
        {index && <span className="sec-index" aria-hidden="true">{index}</span>}
        {title}
      </h2>
      {children && <p>{children}</p>}
    </div>
  )
}
