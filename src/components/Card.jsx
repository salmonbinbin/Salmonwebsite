export default function Card({ children, className = '', icon, iconBg = 'bg-accent', shadowColor = '' }) {
  return (
    <div className={`relative bg-card rounded-2xl border-2 border-fg p-8 shadow-card ${shadowColor} group cursor-pointer ${className}`}>
      {icon && (
        <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 ${iconBg} rounded-full border-2 border-fg flex items-center justify-center shadow-pop group-hover:scale-110 transition-transform z-10`}>
          {icon}
        </div>
      )}
      <div className={icon ? 'mt-8' : ''}>
        {children}
      </div>
    </div>
  )
}
