const tagColors = {
  Frontend: 'bg-accent/10 text-accent border-accent/30',
  Product: 'bg-secondary/10 text-secondary border-secondary/30',
  Data: 'bg-tertiary/10 text-tertiary border-tertiary/30',
  AI: 'bg-quaternary/10 text-quaternary border-quaternary/30',
  Content: 'bg-accent/10 text-accent border-accent/30',
}

export default function WritingCard({ article }) {
  return (
    <article className="bg-card rounded-2xl border-2 border-fg p-6 shadow-card group cursor-pointer flex flex-col sm:flex-row gap-5">
      <time className="text-xs font-bold uppercase tracking-widest text-accent whitespace-nowrap mt-0.5">
        {article.date}
      </time>
      <div className="space-y-2 flex-1">
        <h3 className="font-heading font-bold text-lg text-fg group-hover:text-accent transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-fg text-sm leading-relaxed">{article.summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {article.tags.map(tag => (
            <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[tag] || 'bg-muted text-muted-fg border-border'}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
