export default function Marquee({ items }) {
  const text = items.join('  ·  ') + '  ·  '

  return (
    <div className="bg-fg py-5 overflow-hidden border-y-2 border-fg">
      <div className="overflow-hidden whitespace-nowrap">
        <span className="marquee-content text-white font-heading font-bold text-xl sm:text-2xl tracking-wide">
          {text}{text}
        </span>
      </div>
    </div>
  )
}
