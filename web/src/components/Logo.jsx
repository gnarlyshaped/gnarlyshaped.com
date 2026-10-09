export default function Logo({ focus = '', small = false }) {
  const Tag = small ? 'div' : 'h1'
  const className = ['logo', small && 'logo-small', focus && `focused ${focus}`].filter(Boolean).join(' ')
  return (
    <Tag className={className} aria-label="Gnarly Shaped Inc." aria-hidden={small || undefined}>
      <span className="fragment"><span className="gnar">Gnar</span>ly </span>
      <span className="fragment"><span className="shape">Shape</span>d </span>
      <span className="fragment">Inc.</span>
    </Tag>
  )
}
