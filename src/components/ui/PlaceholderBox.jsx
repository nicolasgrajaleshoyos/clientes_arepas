/**
 * Marcador visual para contenido que el cliente aún debe suministrar
 * (fotos, video, logos). Se reemplaza por <img>/<video> reales cuando
 * llegue el material — ver requisitos en la propuesta del proyecto.
 */
export default function PlaceholderBox({ label, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border-2 border-dashed border-stone-300 bg-stone-100 p-6 text-center text-sm text-stone-400 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-500 ${className}`}
    >
      {label}
    </div>
  )
}
