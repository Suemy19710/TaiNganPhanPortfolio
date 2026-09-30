import { useState } from 'react'

export default function CopyButton({ text }) {
  const [label, setLabel] = useState('Copy')

  const flash = (msg) => {
    setLabel(msg)
    setTimeout(() => setLabel('Copy'), 1600)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      flash('Copied')
    } catch {
      flash('Copy failed')
    }
  }

  return <button className="copy" type="button" onClick={copy}>{label}</button>
}
