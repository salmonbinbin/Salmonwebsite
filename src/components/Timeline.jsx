const colors = ['bg-accent', 'bg-secondary', 'bg-tertiary', 'bg-quaternary']

export default function Timeline({ events }) {
  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:-translate-x-px"
        style={{ background: 'repeating-linear-gradient(to bottom, var(--color-accent) 0px, var(--color-accent) 12px, transparent 12px, transparent 20px)' }}
      />

      {events.map((event, i) => {
        const isLeft = i % 2 === 0
        return (
          <div key={i} className={`relative flex items-start mb-10 sm:mb-12 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
            <div className={`absolute left-4 sm:left-1/2 w-4 h-4 ${colors[i % colors.length]} rounded-full border-[3px] border-fg -translate-x-1/2 z-10`} />
            <div className={`ml-10 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
              <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-1`}
                style={{ color: i === 0 ? 'var(--color-accent)' : i === 1 ? 'var(--color-secondary)' : i === 2 ? 'var(--color-tertiary)' : 'var(--color-quaternary)' }}>
                {event.date}
              </span>
              <h3 className="font-heading font-bold text-lg text-fg">{event.title}</h3>
              <p className="text-muted-fg text-sm mt-1">{event.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
