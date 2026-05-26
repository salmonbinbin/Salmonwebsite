import { forwardRef } from 'react'

const Input = forwardRef(({ label, id, className = '', ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-bold uppercase tracking-wide text-fg">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={`w-full px-4 py-3 bg-white border-2 border-[#CBD5E1] rounded-lg text-fg placeholder-[#94A3B8] input-focus-shadow transition-all ${className}`}
        {...props}
      />
    </div>
  )
})

Input.displayName = 'Input'
export default Input
