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
            <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">关于我</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg mb-8">
            你好，我是 <span className="text-accent">Salmon</span>
          </h1>

          <div className="space-y-5 text-muted-fg text-lg leading-relaxed">
            <p>
              我在读计算机科学。但我一直觉得，只会写代码是不够的——你得理解产品为什么被需要，数据在说什么，以及怎么把事情讲清楚。
            </p>
            <p>
              平时主要写前端（React、TypeScript 这套），也用 AI 工具做原型，写点东西整理思路。做过课程助手、数据看板、这个网站——都不大，但每个都认真做完了。
            </p>
            <p>
              最近在想怎么把这些能力串起来，做点真正有用的东西。如果你也在想类似的事，可以聊聊。
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper className="bg-muted border-y-2 border-fg">
        <div className="text-center mb-10 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我会的东西</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">点一下分类可以筛选。不是罗列工具——是想说这些东西放在一起能做什么。</p>
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
