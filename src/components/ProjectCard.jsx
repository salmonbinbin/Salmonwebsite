import { ExternalLink, Award } from 'lucide-react'

const tagColors = {
  '前端': 'bg-accent/10 text-accent border-accent/30',
  '产品': 'bg-secondary/10 text-secondary border-secondary/30',
  '数据': 'bg-tertiary/10 text-tertiary border-tertiary/30',
  'AI': 'bg-quaternary/10 text-quaternary border-quaternary/30',
  '内容': 'bg-accent/10 text-accent border-accent/30',
  'Java': 'bg-quaternary/10 text-quaternary border-quaternary/30',
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <div className={`relative bg-card rounded-2xl border-2 border-fg p-6 shadow-card group cursor-pointer ${
      featured ? 'md:col-span-2 md:row-span-2' : ''
    }`}>
      <div className="w-full h-40 bg-muted rounded-xl border-2 border-fg mb-5 flex items-center justify-center text-muted-fg text-sm font-medium">
        项目预览
      </div>
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <h3 className="font-heading font-bold text-xl text-fg flex-1">{project.title}</h3>
          {project.award && (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-tertiary/15 text-tertiary border border-tertiary/40 whitespace-nowrap shrink-0">
              <Award className="w-3 h-3" />
              {project.award}
            </span>
          )}
        </div>
        <p className="text-muted-fg text-sm leading-relaxed">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColors[tag] || 'bg-muted text-muted-fg border-border'}`}>
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline mt-2">
            去看看 <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}
