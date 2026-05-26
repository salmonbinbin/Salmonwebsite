export default function BackgroundDecorations({ variant = 'default' }) {
  const shapes = {
    default: [
      { color: 'bg-tertiary', shape: 'rounded-full', size: 'w-48 h-48', pos: 'top-20 -left-10', opacity: 'opacity-30', delay: '' },
      { color: 'bg-secondary', shape: 'rounded-2xl', size: 'w-32 h-32', pos: 'bottom-10 right-10', opacity: 'opacity-20', delay: 'animation-delay-2000' },
      { color: 'bg-quaternary', shape: 'rounded-full', size: 'w-24 h-24', pos: 'top-40 right-1/4', opacity: 'opacity-40', delay: 'animation-delay-1000' },
    ],
    hero: [
      { color: 'bg-tertiary', shape: 'rounded-full', size: 'w-72 h-72', pos: 'top-10 -right-10', opacity: 'opacity-20', delay: '' },
      { color: 'bg-secondary', shape: 'rounded-3xl rotate-12', size: 'w-40 h-40', pos: 'bottom-20 left-10', opacity: 'opacity-25', delay: 'animation-delay-1500' },
      { color: 'bg-accent', shape: 'rounded-full', size: 'w-20 h-20', pos: 'top-1/3 right-1/3', opacity: 'opacity-30', delay: 'animation-delay-3000' },
    ],
  }

  const active = shapes[variant] || shapes.default

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {active.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.pos} ${s.size} ${s.color} ${s.shape} ${s.opacity} animate-float ${s.delay}`}
        />
      ))}
    </div>
  )
}
