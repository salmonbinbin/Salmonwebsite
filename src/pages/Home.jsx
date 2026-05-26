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
    title: '快速原型',
    description: '用 React、AI 工具和快速迭代将想法变为可用的 MVP。快速构建，更快学习。',
  },
  {
    icon: <BarChart3 className="text-white w-7 h-7" />,
    iconBg: 'bg-secondary',
    title: '数据与可视化',
    description: '用数据驱动决策——从交互式仪表盘到分析报告。',
  },
  {
    icon: <PenLine className="text-white w-7 h-7" />,
    iconBg: 'bg-tertiary',
    title: '内容与策略',
    description: '撰写关于技术、产品思维和运营的文章。把复杂想法讲清楚。',
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
              <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">CS 学生 & 创造者</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.08] tracking-tight text-fg">
              在代码、产品与故事的{' '}
              <span className="text-accent underline decoration-tertiary decoration-[5px] underline-offset-[8px]">
                交汇处
              </span>{' '}
              创造
            </h1>

            <p className="text-lg text-muted-fg max-w-md leading-relaxed">
              我用代码和 AI 构建产品、可视化数据、讲述有影响力的故事——连接「做什么」与「为什么重要」。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  查看作品
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/writing">
                <Button variant="outline" size="lg">
                  阅读文章
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
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我做什么</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">三种我为团队带来价值的方式——构建、分析、传达。</p>
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
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我的旅程</h2>
            <p className="text-muted-fg text-lg">从写下第一行代码到构建有意义的作品。</p>
          </div>
          <Timeline events={timelineData} />
        </div>
      </section>

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">精选项目</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">一些我构建的作品，更多在项目页面。</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredProjects.map(p => (
            <ProjectCard key={p.id} project={p} featured={p.featured} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects">
            <Button variant="outline" size="lg">查看全部项目 →</Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="border-t-2 border-fg">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-fg">一起创造</h2>
          <p className="text-muted-fg text-lg">开放实习、合作和有趣的项目机会。欢迎随时联系。</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about">
              <Button variant="primary" size="lg">
                联系我
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
