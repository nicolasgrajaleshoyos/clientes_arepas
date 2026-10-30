const SIZES = {
  sm: 'h-10 w-10',
  lg: 'w-64 sm:w-80',
}

/**
 * Logo de marca: imagen cuadrada tal cual, con esquinas suaves y sombra.
 */
export default function BrandLogo({ size = 'sm', className = '' }) {
  return (
    <img
      src="/assets/img/logo.jpeg"
      alt="Arepas El Buen Sabor"
      className={`aspect-square rounded-xl object-contain shadow-lg ${SIZES[size]} ${className}`}
    />
  )
}
