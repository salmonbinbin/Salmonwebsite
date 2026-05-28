import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Button from '../components/Button'
import writingsData from '../data/writings.json'
import renderContent from '../utils/renderContent'

const tagColors = {
  '前端': 'bg-accent/10 text-accent border-accent/30',
  '产品': 'bg-secondary/10 text-secondary border-secondary/30',
  '数据': 'bg-tertiary/10 text-tertiary border-tertiary/30',
  'AI': 'bg-quaternary/10 text-quaternary border-quaternary/30',
  '内容': 'bg-accent/10 text-accent border-accent/30',
}

export default function WritingDetail() {
  const { id } = useParams()
  const article = writingsData.find(w => w.id === id)

  if (!article) {
    return (
      <div className="pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center py-16">
            <h1 className="font-heading font-extrabold text-3xl text-fg mb-4">文章未找到</h1>
            <p className="text-muted-fg mb-8">没有找到这篇文章，可能链接有误。</p>
            <Link to="/writing">
              <Button variant="primary">返回文章列表</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-10">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/writing"
          className="inline-flex items-center gap-2 text-muted-fg hover:text-accent transition-colors mb-10 font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          所有文章
        </Link>

        {/* Article Header */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-fg">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className={`text-sm font-semibold px-3.5 py-1.5 rounded-full border ${tagColors[tag] || 'bg-muted text-muted-fg border-border'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <article className="bg-card rounded-3xl border-2 border-fg p-8 sm:p-10 shadow-card mb-10">
          <div className="prose-custom space-y-4 text-lg">
            {renderContent(article.content)}
          </div>
        </article>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Link to="/writing">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-5 h-5" />
              返回文章列表
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
