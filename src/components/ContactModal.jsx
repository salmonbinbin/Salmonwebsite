import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Copy, Check, MessageCircle, Video } from 'lucide-react'

const EMAIL = '2186185477@qq.com'

export default function ContactModal({ open, onClose }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSendEmail = () => {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('来自网站的联系')}`
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-fg/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-card rounded-3xl border-2 border-fg shadow-card overflow-hidden max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-card border-2 border-fg rounded-full flex items-center justify-center shadow-pop hover:bg-secondary hover:text-white transition-colors"
              aria-label="关闭"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="p-6 pb-4 text-center">
              <h2 className="font-heading font-extrabold text-2xl text-fg mb-2">联系我</h2>
              <p className="text-muted-fg text-sm">选择你喜欢的方式，随时联系</p>
            </div>

            {/* Contact methods */}
            <div className="px-6 space-y-4">

              {/* Email */}
              <div className="bg-muted rounded-2xl border-2 border-border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wide text-muted-fg">邮箱</div>
                    <div className="font-semibold text-fg truncate">{EMAIL}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleSendEmail}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white rounded-xl border-2 border-fg font-bold text-sm shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--color-fg)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--color-fg)] transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    发邮件
                  </button>
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-card text-fg rounded-xl border-2 border-fg font-bold text-sm shadow-pop hover:bg-muted transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-quaternary" /> : <Copy className="w-4 h-4" />}
                    {copied ? '已复制' : '复制'}
                  </button>
                </div>
              </div>

              {/* WeChat */}
              <div className="bg-muted rounded-2xl border-2 border-border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-quaternary/10 border-2 border-quaternary/30 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-quaternary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-muted-fg">微信</div>
                    <div className="font-semibold text-fg">扫码添加好友</div>
                  </div>
                </div>
                <div className="bg-card rounded-xl border-2 border-fg overflow-hidden">
                  <img
                    src="/contact/wechat-qr.png"
                    alt="微信二维码"
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center py-10 text-muted-fg">
                    <MessageCircle className="w-8 h-8 mb-2 opacity-40" />
                    <p className="text-sm">二维码图片待添加</p>
                    <p className="text-xs opacity-60">放到 public/contact/wechat-qr.png</p>
                  </div>
                </div>
              </div>

              {/* Douyin */}
              <div className="bg-muted rounded-2xl border-2 border-border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-muted-fg">抖音</div>
                    <div className="font-semibold text-fg">关注我的抖音</div>
                  </div>
                </div>
                <div className="bg-card rounded-xl border-2 border-fg overflow-hidden">
                  <img
                    src="/contact/douyin-qr.png"
                    alt="抖音二维码"
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center py-10 text-muted-fg">
                    <Video className="w-8 h-8 mb-2 opacity-40" />
                    <p className="text-sm">二维码图片待添加</p>
                    <p className="text-xs opacity-60">放到 public/contact/douyin-qr.png</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 pt-4">
              <button
                onClick={onClose}
                className="w-full py-2.5 text-sm font-semibold text-muted-fg hover:text-fg transition-colors"
              >
                关闭
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
