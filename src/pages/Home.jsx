import { Link } from 'react-router-dom'
import { Sparkles, BarChart3, PenLine, ArrowRight, Star, Trophy, FolderGit2, FileText, GraduationCap } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Marquee from '../components/Marquee'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'
import BackgroundDecorations from '../components/BackgroundDecorations'
import SectionWrapper from '../components/SectionWrapper'
import timelineData from '../data/timeline.json'
import projectsData from '../data/projects.json'
import writingsData from '../data/writings.json'
import galleryData from '../data/gallery.json'
import { EMAIL } from '../data/contact'

const marqueeKeywords = ['需求梳理', '产品设计', '前端开发', '后端实现', 'AI 应用', '运营执行', '内容表达']

const pillars = [
  {
    icon: <Sparkles className="text-white w-7 h-7" />,
    iconBg: 'bg-accent',
    title: '把方案做出来',
    description: '在校园 AI 助手、健康管理等项目中参与前后端实现，能把产品想法拆成具体功能。',
  },
  {
    icon: <BarChart3 className="text-white w-7 h-7" />,
    iconBg: 'bg-secondary',
    title: '把事情推进去',
    description: '在市场部参与文案与活动执行，也在冬夏令营现场做过后勤协作，理解方案落地时的沟通与协调。',
  },
  {
    icon: <PenLine className="text-white w-7 h-7" />,
    iconBg: 'bg-tertiary',
    title: '把过程讲清楚',
    description: '参与公众号推文与短视频内容制作，习惯用清楚的文字、图片和演示介绍做过的事。',
  },
]

const stats = [
  { icon: <Trophy className="w-6 h-6" />, value: projectsData.filter(project => project.award).length, label: '获奖项目', color: 'text-tertiary' },
  { icon: <FolderGit2 className="w-6 h-6" />, value: projectsData.length, label: '项目案例', color: 'text-accent' },
  { icon: <FileText className="w-6 h-6" />, value: writingsData.length, label: '文章记录', color: 'text-secondary' },
  { icon: <GraduationCap className="w-6 h-6" />, value: galleryData.length, label: '活动记录', color: 'text-quaternary' },
]

const shadowColors = ['shadow-card-pink', 'shadow-card-amber', 'shadow-card-emerald']

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <BackgroundDecorations variant="hero" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-fg shadow-pop">
              <span className="w-2 h-2 bg-quaternary rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">计算机专业在读 · 产品与开发</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.08] tracking-tight text-fg">
              我是 Salmon，
              <span className="block text-accent underline decoration-tertiary decoration-[5px] underline-offset-[8px]">
                把想法做成作品
              </span>
            </h1>

            <p className="text-lg text-muted-fg max-w-lg leading-relaxed">
              从校园 AI 助手到本地美食网站，我喜欢先弄清需求，再参与设计与开发。市场运营和冬夏令营的经历，也让我学会在真实现场推进事情。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  看项目案例
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  了解我
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative md:col-span-2 w-full max-w-[460px] mx-auto mt-4 md:mt-0" aria-label="Salmon 的个人照片">
            <div aria-hidden="true" className="absolute -top-7 -left-7 w-28 h-28 rounded-full border-[3px] border-secondary/50" />
            <div aria-hidden="true" className="absolute -top-3 -right-5 w-20 h-20 rotate-45 border-[3px] border-tertiary/40" />
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-5 rounded-[34px] bg-secondary border-[3px] border-fg" />
            <div aria-hidden="true" className="absolute inset-0 translate-x-8 translate-y-9 rounded-[34px] bg-accent/15 -z-10" />

            <div className="hero-portrait-frame relative overflow-hidden bg-card p-2.5 sm:p-3 rounded-[34px] border-[3px] border-fg shadow-[8px_8px_0px_0px_var(--color-fg)]">
              <img
                src="/images/salmon-portrait.jpg"
                alt="Salmon 戴着蓝色帽子的自拍照"
                width="960"
                height="1280"
                fetchPriority="high"
                className="hero-portrait-image block w-full aspect-[4/5] object-cover object-[center_38%] rounded-[23px]"
              />
            </div>

            <div className="absolute -top-5 -right-4 sm:-right-7 w-14 h-14 bg-tertiary rounded-full border-2 border-fg flex items-center justify-center shadow-pop rotate-12" aria-hidden="true">
              <Star className="text-fg w-6 h-6 fill-fg" />
            </div>
            <div className="absolute -bottom-7 -left-3 sm:-left-6 bg-card px-4 py-2.5 rounded-full border-2 border-fg shadow-pop -rotate-3 font-heading font-extrabold text-sm sm:text-base text-fg">
              你好，见个面！ <span aria-hidden="true">✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">精选项目</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">先看作品，再了解我如何把需求变成具体功能。</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredProjects.map(p => (
            <ProjectCard key={p.id} project={p} featured={p.id === 'ai-xiaoshang'} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects">
            <Button variant="outline" size="lg">看全部项目 →</Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Stats Strip */}
      <section className="py-10 bg-muted border-y-2 border-fg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-1">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-fg bg-card shadow-pop ${s.color}`}>
                  {s.icon}
                </div>
                <div className="font-heading font-extrabold text-3xl text-fg">{s.value}</div>
                <div className="text-muted-fg text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeKeywords} />

      {/* Three Pillars */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我怎样做事</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">做出功能，推进协作，也把过程讲清楚。</p>
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
            <p className="text-muted-fg text-lg">项目、运营与志愿服务中的几段实践。</p>
          </div>
          <Timeline events={timelineData} />
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper className="border-t-2 border-fg">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-fg">聊一聊</h2>
          <p className="text-muted-fg text-lg">正在寻找能结合产品思考与技术实践的机会，也欢迎交流项目、内容和合作想法。</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button as="a" href={`mailto:${EMAIL}`} variant="primary" size="lg">
              给我发邮件
            </Button>
            <span className="self-center text-muted-fg">或联系 <a href={`mailto:${EMAIL}`} className="font-semibold text-accent hover:underline">{EMAIL}</a></span>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
