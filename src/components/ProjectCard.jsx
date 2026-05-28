import { Link } from 'react-router-dom'
import { Award, ArrowRight, ImageOff } from 'lucide-react'

const tagColors = {
  '前端': 'bg-accent/10 text-accent border-accent/30',
  '产品': 'bg-secondary/10 text-secondary border-secondary/30',
  '数据': 'bg-tertiary/10 text-tertiary border-tertiary/30',
  'AI': 'bg-quaternary/10 text-quaternary border-quaternary/30',
  '内容': 'bg-accent/10 text-accent border-accent/30',
  'Java': 'bg-quaternary/10 text-quaternary border-quaternary/30',
}

export default function ProjectCard({ project, featured = false }) {
  const hasImage = project.image && project.image.length > 0

  return (
    <Link to={`/projects/${project.id}`} className={`block group ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="relative bg-card rounded-2xl border-2 border-fg p-6 shadow-card transition-all h-full overflow-hidden">
        {/* Screenshot or placeholder */}
        <div className="w-full h-40 bg-muted rounded-xl border-2 border-fg mb-5 overflow-hidden relative">
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-fg gap-2">
              <ImageOff className="w-5 h-5" />
              <span className="text-sm font-medium">暂无预览</span>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <h3 className="font-heading font-bold text-xl text-fg flex-1 group-hover:text-accent transition-colors">{project.title}</h3>
            {project.award && (
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-tertiary/15 text-tertiary border border-tertiary/40 whitespace-nowrap shrink-0">
                <Award className="w-3 h-3" />
                {project.award}
              </span>
            )}
          </div>
          <p className="text-muted-fg text-sm leading-relaxed">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColors[tag] || 'bg-muted text-muted-fg border-border'}`}>
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-accent mt-2">
            查看详情 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  )
}
