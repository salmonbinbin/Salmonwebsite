const themeColors = {
  '夏校/冬校': { pill: 'bg-tertiary/10 text-tertiary border-tertiary/30', shadow: 'shadow-card-amber' },
  '志愿者/公益': { pill: 'bg-quaternary/10 text-quaternary border-quaternary/30', shadow: 'shadow-card-emerald' },
}

export default function PhotoCard({ activity, onClick }) {
  const cover = activity.photos[activity.coverIndex || 0]
  const peek1 = activity.photos[(activity.coverIndex || 0) + 1]
  const peek2 = activity.photos[(activity.coverIndex || 0) + 2]
  const colors = themeColors[activity.theme] || { pill: 'bg-muted text-muted-fg border-border', shadow: 'shadow-card' }

  return (
    <div
      className="break-inside-avoid mb-5 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        {/* Peek photos behind */}
        {peek1 && (
          <div
            className="absolute top-2 left-2 right-[-4px] h-full rounded-2xl border-2 border-fg overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <img src={peek1.src} alt="" className="w-full h-full object-cover opacity-50" />
          </div>
        )}
        {peek2 && (
          <div
            className="absolute top-4 left-4 right-[-8px] h-full rounded-2xl border-2 border-fg overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <img src={peek2.src} alt="" className="w-full h-full object-cover opacity-25" />
          </div>
        )}

        {/* Main cover photo */}
        <div
          className={`relative bg-card rounded-2xl border-2 border-fg overflow-hidden ${colors.shadow} transition-all group-hover:shadow-pop`}
          style={{ zIndex: 2 }}
        >
          <img
            src={cover.src}
            alt={cover.alt}
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Info below */}
      <div className="mt-3 space-y-1.5">
        <h3 className="font-heading font-bold text-lg text-fg group-hover:text-accent transition-colors">
          {activity.title}
        </h3>
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${colors.pill}`}>
          {activity.theme}
        </span>
      </div>
    </div>
  )
}
