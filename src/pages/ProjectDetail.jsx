import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Award, ExternalLink, User, GitBranch, Sparkles } from 'lucide-react'
import projectsData from '../data/projects.json'
import projectStories from '../data/projectStories'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(item => item.id === id)

  if (!project) {
    return (
      <div className="pt-28 pb-16 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-heading font-extrabold text-3xl text-fg mb-4">项目未找到</h1>
        <p className="text-muted-fg mb-8">没有找到这个项目，可能链接有误。</p>
        <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white border-2 border-fg rounded-full font-bold shadow-pop">
          <ArrowLeft className="w-4 h-4" /> 返回项目列表
        </Link>
      </div>
    )
  }

  const story = projectStories[id] || {
    goal: project.summary,
    contribution: project.role,
    highlights: [],
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-muted-fg hover:text-accent transition-colors mb-10 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" /> 所有项目
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider px-4 py-2 bg-card border-2 border-fg rounded-full shadow-pop">
              <Sparkles className="w-4 h-4 text-accent" /> 项目案例
            </span>
            {project.award && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full bg-tertiary/15 text-fg border-2 border-tertiary/40">
                <Award className="w-4 h-4 text-tertiary" /> {project.award}
              </span>
            )}
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg leading-tight mb-4">{project.title}</h1>
          <p className="text-lg text-muted-fg leading-relaxed max-w-3xl">{project.summary}</p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">
            <span className="inline-flex items-center gap-2 font-semibold text-fg"><User className="w-4 h-4 text-accent" />{project.role}</span>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline">
                <GitBranch className="w-4 h-4" /> 查看源码 <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <section className="bg-accent/10 rounded-2xl border-2 border-fg p-6 shadow-card">
            <span className="text-xs font-extrabold tracking-widest text-accent">01 / 目标</span>
            <h2 className="font-heading font-extrabold text-xl text-fg mt-3 mb-2">要解决什么</h2>
            <p className="text-muted-fg leading-relaxed">{story.goal}</p>
          </section>
          <section className="bg-tertiary/15 rounded-2xl border-2 border-fg p-6 shadow-card">
            <span className="text-xs font-extrabold tracking-widest text-fg">02 / 职责</span>
            <h2 className="font-heading font-extrabold text-xl text-fg mt-3 mb-2">我负责什么</h2>
            <p className="text-muted-fg leading-relaxed">{story.contribution}</p>
          </section>
        </div>

        {story.highlights.length > 0 && (
          <section className="mb-12">
            <div className="mb-5">
              <span className="text-xs font-extrabold tracking-widest text-accent">03 / 实现</span>
              <h2 className="font-heading font-extrabold text-2xl text-fg mt-2">关键实现</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {story.highlights.map((highlight, index) => (
                <div key={highlight} className="bg-card rounded-2xl border-2 border-fg p-5 shadow-card">
                  <span className="font-heading font-extrabold text-2xl text-accent">0{index + 1}</span>
                  <p className="text-fg font-medium leading-relaxed mt-3">{highlight}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.images?.length > 0 && (
          <section className="mb-12">
            <div className="mb-5">
              <span className="text-xs font-extrabold tracking-widest text-accent">04 / 作品</span>
              <h2 className="font-heading font-extrabold text-2xl text-fg mt-2">页面与功能截图</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <a key={image} href={image} target="_blank" rel="noopener noreferrer" className="block bg-card rounded-2xl border-2 border-fg p-2 shadow-card hover:-translate-y-1 transition-transform">
                  <img src={image} alt={`${project.title} 功能截图 ${index + 1}`} loading="lazy" className="w-full aspect-video object-cover rounded-xl" />
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="mb-10">
          <h2 className="font-heading font-extrabold text-2xl text-fg mb-4">使用的技术</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span key={tech} className="text-sm font-bold px-4 py-2 rounded-full bg-card border-2 border-fg text-fg shadow-pop">{tech}</span>
            ))}
          </div>
        </section>

        <details className="group bg-muted rounded-2xl border-2 border-fg p-6 mb-10">
          <summary className="font-heading font-bold text-lg text-fg cursor-pointer">展开完整项目说明</summary>
          <div className="space-y-4 text-muted-fg leading-relaxed mt-5 max-w-3xl">
            {project.description.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </details>

        <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-fg rounded-full text-fg font-bold shadow-pop hover:bg-tertiary transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回项目列表
        </Link>
      </div>
    </div>
  )
}
