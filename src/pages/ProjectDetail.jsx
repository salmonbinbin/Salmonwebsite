import { useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Award, ExternalLink, User, GitBranch, Sparkles } from 'lucide-react'
import Button from '../components/Button'
import projectsData from '../data/projects.json'

const tagColors = {
  '前端': 'bg-accent/10 text-accent border-accent/30',
  '产品': 'bg-secondary/10 text-secondary border-secondary/30',
  '数据': 'bg-tertiary/10 text-tertiary border-tertiary/30',
  'AI': 'bg-quaternary/10 text-quaternary border-quaternary/30',
  '内容': 'bg-accent/10 text-accent border-accent/30',
  'Java': 'bg-quaternary/10 text-quaternary border-quaternary/30',
}

const stackColors = ['bg-accent', 'bg-secondary', 'bg-tertiary', 'bg-quaternary']

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rx = ((y - cy) / cy) * -6
      const ry = ((x - cx) / cx) * 6
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`
    }

    const onLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
    }

    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [project?.id])

  if (!project) {
    return (
      <div className="pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center py-16">
            <h1 className="font-heading font-extrabold text-3xl text-fg mb-4">项目未找到</h1>
            <p className="text-muted-fg mb-8">没有找到这个项目，可能链接有误。</p>
            <Link to="/projects">
              <Button variant="primary">返回项目列表</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-10">
      <div className="max-w-2xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-fg hover:text-accent transition-colors mb-10 font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          所有项目
        </Link>

        {/* 3D Tilt Card */}
        <div className="tilt-stage" style={{ perspective: '800px' }}>
          <div
            ref={cardRef}
            className="tilt-card relative bg-card rounded-3xl border-2 border-fg p-8 sm:p-10 cursor-default"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'box-shadow 350ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 120ms ease-out',
              boxShadow: '5px 5px 0px 0px var(--color-fg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '8px 8px 0px 0px var(--color-accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '5px 5px 0px 0px var(--color-fg)'
            }}
          >
            {/* Decorative dot-grid strip */}
            <div
              className="absolute -top-0.5 left-8 right-8 h-3 bg-dot-grid opacity-30 rounded-b"
              style={{ transform: 'translateZ(20px)' }}
            />

            {/* Title + Award */}
            <div className="flex flex-wrap items-start gap-3 mb-4">
              <h1
                className="font-heading font-extrabold text-3xl sm:text-4xl text-fg leading-tight"
                style={{ transform: 'translateZ(30px)' }}
              >
                {project.title}
              </h1>
              {project.award && (
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full bg-tertiary/15 text-tertiary border-2 border-tertiary/40 whitespace-nowrap"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <Award className="w-4 h-4" />
                  {project.award}
                </span>
              )}
            </div>

            {/* Tagline */}
            <p
              className="text-lg text-muted-fg leading-relaxed mb-5"
              style={{ transform: 'translateZ(15px)' }}
            >
              {project.tagline}
            </p>

            {/* Tags */}
            <div
              className="flex flex-wrap gap-2 mb-6"
              style={{ transform: 'translateZ(10px)' }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-sm font-semibold px-3.5 py-1.5 rounded-full border ${
                    tagColors[tag] || 'bg-muted text-muted-fg border-border'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Role + Repo row */}
            <div
              className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b-2 border-fg border-dashed"
              style={{ transform: 'translateZ(15px)' }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-fg">
                <User className="w-4 h-4 text-accent" />
                <span className="font-semibold text-fg">{project.role}</span>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
                >
                  <GitBranch className="w-4 h-4" />
                  查看源码
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Screenshot Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mb-8" style={{ transform: 'translateZ(20px)' }}>
                <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-fg mb-4">
                  项目截图
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.images.map((img, i) => (
                    <a key={i} href={img} target="_blank" rel="noopener noreferrer">
                      <img
                        src={img}
                        alt={`${project.title} 截图 ${i + 1}`}
                        className="w-full rounded-xl border-2 border-fg object-cover aspect-video hover:scale-[1.02] transition-transform cursor-pointer"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div
              className="mb-8"
              style={{ transform: 'translateZ(20px)' }}
            >
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-fg mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                技术栈
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={tech}
                    className={`text-sm font-bold px-4 py-2 rounded-2xl text-white shadow-pop border-2 border-fg ${
                      stackColors[i % stackColors.length]
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div style={{ transform: 'translateZ(10px)' }}>
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-fg mb-4">
                项目详情
              </h3>
              <div className="space-y-4 text-muted-fg leading-relaxed">
                {project.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Link to="/projects">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-5 h-5" />
              返回项目列表
            </Button>
          </Link>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                查看源码
                <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
