import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12 bg-card rounded-2xl border-2 border-fg shadow-card">
        <div className="w-20 h-20 bg-quaternary rounded-full border-2 border-fg flex items-center justify-center mx-auto mb-6 shadow-pop">
          <Send className="text-white w-8 h-8" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-fg mb-2">消息已发送！</h3>
        <p className="text-muted-fg">感谢联系，我会尽快回复。</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl border-2 border-fg p-8 shadow-card">
      <Input label="姓名" id="name" type="text" placeholder="你的名字" required />
      <Input label="邮箱" id="email" type="email" placeholder="you@example.com" required />
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wide text-fg">留言</label>
        <textarea
          id="message"
          rows={4}
          placeholder="说说你的想法..."
          className="w-full px-4 py-3 bg-white border-2 border-[#CBD5E1] rounded-lg text-fg placeholder-[#94A3B8] input-focus-shadow transition-all resize-none"
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="w-5 h-5" />
        发送消息
      </Button>
    </form>
  )
}
