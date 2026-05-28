export default function renderContent(text) {
  return text.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i} className="font-heading font-bold text-2xl text-fg mt-10 mb-4">{block.replace('## ', '')}</h2>
    }
    const parts = block.split(/(\*\*.*?\*\*)/g)
    return (
      <p key={i} className="text-muted-fg leading-relaxed">
        {parts.map((seg, j) => {
          if (seg.startsWith('**') && seg.endsWith('**')) {
            return <span key={j} className="text-accent font-medium">{seg.slice(2, -2)}</span>
          }
          return seg
        })}
      </p>
    )
  })
}
