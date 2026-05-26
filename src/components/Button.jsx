import { forwardRef } from 'react'

const variants = {
  primary: 'bg-accent text-white shadow-pop',
  secondary: 'bg-secondary text-white shadow-pop',
  outline: 'bg-transparent text-fg border-2 border-fg hover:bg-tertiary transition-colors',
  ghost: 'bg-transparent text-fg hover:bg-muted transition-colors',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = forwardRef(({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-fg font-bold tracking-wide transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
