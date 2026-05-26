import { Link } from 'react-router-dom'
import { Sparkles, BarChart3, PenLine, ArrowRight, Star } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Marquee from '../components/Marquee'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'
import BackgroundDecorations from '../components/BackgroundDecorations'
import SectionWrapper from '../components/SectionWrapper'
import timelineData from '../data/timeline.json'
import projectsData from '../data/projects.json'

const marqueeKeywords = ['React', 'TypeScript', 'AI', 'Product', 'Data', 'Tailwind', 'Node.js', 'Prototyping', 'Content Strategy', 'Figma', 'Python']

const pillars = [
  {
    icon: <Sparkles className="text-white w-7 h-7" />,
    iconBg: 'bg-accent',
    title: '写代码',
    description: '用 React 和 AI 工具快速把想法做成能跑的原型。写过课程助手、数据看板，做过自己的网站。',
  },
  {
    icon: <BarChart3 className="text-white w-7 h-7" />,
    iconBg: 'bg-secondary',
    title: '看数据',
    description: '用数据而不是拍脑袋做判断。做过交互式看板，也写过分析报告。',
  },
  {
    icon: <PenLine className="text-white w-7 h-7" />,
    iconBg: 'bg-tertiary',
    title: '写东西',
    description: '技术、产品、运营都写一点。把复杂的事情说清楚，对我来说是种乐趣。',
  },
]

const shadowColors = ['shadow-card-pink', 'shadow-card-amber', 'shadow-card-emerald']

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <BackgroundDecorations variant="hero" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-fg shadow-pop">
              <span className="w-2 h-2 bg-quaternary rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">不只会写代码</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.08] tracking-tight text-fg">
              我是 Salmon，一个{' '}
              <span className="text-accent underline decoration-tertiary decoration-[5px] underline-offset-[8px]">
                不只写代码
              </span>{' '}
              的程序员
            </h1>

            <p className="text-lg text-muted-fg max-w-md leading-relaxed">
              我能写前端，也懂一点产品，会用 AI 提效，喜欢把事情想清楚再做。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  看看我做了什么
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/writing">
                <Button variant="outline" size="lg">
                  读点东西
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-dot-grid opacity-50 -z-10 rotate-3 rounded-2xl" />
            <div className="bg-card p-4 rounded-3xl border-2 border-fg shadow-card relative z-10" style={{ borderRadius: '24px 24px 24px 0' }}>
              <div className="bg-muted rounded-2xl p-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full border-2 border-fg flex items-center justify-center animate-wiggle">
                    <Sparkles className="text-white w-6 h-6" />
                  </div>
                  <div className="h-3 bg-border rounded-full w-28" />
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 bg-border rounded-full w-full" />
                  <div className="h-2.5 bg-border rounded-full w-3/4" />
                  <div className="h-2.5 bg-border rounded-full w-1/2" />
                </div>
                <div className="flex gap-3">
                  <div className="h-9 bg-accent rounded-lg w-20 border-2 border-fg shadow-pop" />
                  <div className="h-9 bg-quaternary rounded-lg w-20 border-2 border-fg shadow-pop" />
                </div>
              </div>
              <div className="absolute -top-5 -right-5 w-14 h-14 bg-tertiary rounded-full border-2 border-fg flex items-center justify-center shadow-pop">
                <Star className="text-fg w-5 h-5 fill-fg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeKeywords} />

      {/* Three Pillars */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我能做什么</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">技术 + 产品 + 内容，三件事我都沾一点。</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-10 relative">
          <svg className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 hidden sm:block -z-10" viewBox="0 0 1200 20">
            <path d="M100,10 Q300,10 400,10 T600,10 T800,10 T1100,10" stroke="#E2E8F0" strokeWidth="4" strokeDasharray="12,8" fill="none" />
          </svg>
          {pillars.map((p, i) => (
            <Card key={i} icon={p.icon} iconBg={p.iconBg} shadowColor={shadowColors[i]}>
              <div className="text-center space-y-3">
                <h3 className="font-heading font-bold text-xl text-fg">{p.title}</h3>
                <p className="text-muted-fg text-sm leading-relaxed">{p.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Journey Timeline */}
      <section className="py-20 sm:py-28 bg-muted border-y-2 border-fg relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我是怎么走到这里的</h2>
            <p className="text-muted-fg text-lg">从 Hello World 到做出让别人真的在用的东西。</p>
          </div>
          <Timeline events={timelineData} />
        </div>
      </section>

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">做过的东西</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">挑了几个有代表性的，更多在项目页。</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredProjects.map(p => (
            <ProjectCard key={p.id} project={p} featured={p.featured} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects">
            <Button variant="outline" size="lg">看全部 →</Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="border-t-2 border-fg">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-fg">聊一聊</h2>
          <p className="text-muted-fg text-lg">在找实习，也欢迎聊聊合作或者有意思的想法。</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about">
              <Button variant="primary" size="lg">
                给我发邮件
              </Button>
            </Link>
            <a href="mailto:hello@salmon.dev">
              <Button variant="secondary" size="lg" className="!bg-fg shadow-[6px_6px_0px_0px_var(--color-secondary)] hover:shadow-[8px_8px_0px_0px_var(--color-secondary)]">
                hello@salmon.dev
              </Button>
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
