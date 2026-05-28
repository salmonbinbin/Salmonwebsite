import { Link } from 'react-router-dom'
import { Images, Calendar } from 'lucide-react'

const themeColors = {
  '夏校/冬校': { pill: 'bg-tertiary/10 text-tertiary border-tertiary/30', shadow: 'shadow-card-amber', badge: 'bg-tertiary' },
  '志愿者/公益': { pill: 'bg-quaternary/10 text-quaternary border-quaternary/30', shadow: 'shadow-card-emerald', badge: 'bg-quaternary' },
}

export default function PhotoCard({ activity, to, onClick, index = 0 }) {
  const cover = activity.photos[activity.coverIndex || 0]
  const peek1 = activity.photos[(activity.coverIndex || 0) + 1]
  const peek2 = activity.photos[(activity.coverIndex || 0) + 2]
  const colors = themeColors[activity.theme] || { pill: 'bg-muted text-muted-fg border-border', shadow: 'shadow-card', badge: 'bg-muted-fg' }
  const photoCount = activity.photos.length

  const Wrapper = to ? Link : 'div'
  const wrapperProps = to ? { to } : { onClick }

  return (
    <Wrapper
      className="break-inside-avoid mb-5 cursor-pointer group block"
      {...wrapperProps}
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
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
          />

          {/* Photo count badge */}
          <div className={`absolute top-3 right-3 flex items-center gap-1.5 ${colors.badge} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-pop`}>
            <Images className="w-3.5 h-3.5" />
            {photoCount}
          </div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-fg/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </div>
      </div>

      {/* Info below */}
      <div className="mt-3 space-y-2">
        <h3 className="font-heading font-bold text-lg text-fg group-hover:text-accent transition-colors leading-snug">
          {activity.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${colors.pill}`}>
            {activity.theme}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-fg">
            <Calendar className="w-3 h-3" />
            {activity.date}
          </span>
        </div>
        <p className="text-sm text-muted-fg leading-relaxed line-clamp-2">
          {activity.summary}
        </p>
      </div>
    </Wrapper>
  )
}
