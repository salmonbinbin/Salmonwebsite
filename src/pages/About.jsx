import { Sparkles } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SkillVisual from '../components/SkillVisual'
import ContactForm from '../components/ContactForm'
import skillsData from '../data/skills.json'

export default function About() {
  return (
    <div className="pt-28 pb-10">
      {/* Bio */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-fg shadow-pop mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">很高兴认识你</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg mb-8">
            你好，我是 <span className="text-accent">Salmon</span>
          </h1>

          <div className="space-y-5 text-muted-fg text-lg leading-relaxed">
            <p>
              我是一名计算机科学专业的学生，相信最好的产品是由同时理解<span className="text-fg font-semibold">怎么做</span>和<span className="text-fg font-semibold">为什么做</span>的人构建的。我不想只写代码——我想理解什么让产品有用、如何衡量它的影响、以及如何讲述它的故事。
            </p>
            <p>
              我的优势在于<span className="text-accent font-semibold">前端工程</span>、<span className="text-secondary font-semibold">产品思维</span>和<span className="text-tertiary font-semibold">内容策略</span>的交叉点。我用 AI 工具快速原型、用数据指导决策、用写作梳理思考。
            </p>
            <p>
              不写代码的时候，我会阅读产品设计相关的书、尝试新的 AI 工具、或者写下我学到的东西。目前正在寻找能将这种跨领域能力带入真实产品的机会。
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper className="bg-muted border-y-2 border-fg">
        <div className="text-center mb-10 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">技能与工具箱</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">点击分类筛选。不仅是我会什么——更是我如何把它们结合起来。</p>
        </div>
        <SkillVisual skills={skillsData} />
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">联系我</h2>
            <p className="text-muted-fg text-lg">聊聊项目、机会或想法。</p>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>
    </div>
  )
}
