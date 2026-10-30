const VARIANTS = {
  primary: 'bg-brand-red text-white hover:bg-red-700',
  outline: 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white',
  small: 'bg-brand-gold text-brand-dark text-sm hover:brightness-95',
}

/**
 * Botón/enlace de acción. `as="a"` lo renderiza como ancla (navegación,
 * anclas internas); por defecto renderiza un <button>.
 */
export default function Button({ as = 'button', variant = 'primary', className = '', children, ...props }) {
  const Tag = as
  const base = 'inline-block rounded-full px-6 py-3 font-semibold transition-colors'
  const sizing = variant === 'small' ? 'px-4 py-2' : ''

  return (
    <Tag className={`${base} ${sizing} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
