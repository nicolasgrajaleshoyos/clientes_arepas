import Button from '../ui/Button.jsx'
import PlaceholderBox from '../ui/PlaceholderBox.jsx'

export default function ProductCard({ name, description }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-700 dark:bg-stone-900">
      <PlaceholderBox label="Foto pendiente" className="h-40" />
      <h3 className="font-bold text-brand-dark dark:text-stone-100">{name}</h3>
      <p className="flex-1 text-sm text-stone-600 dark:text-stone-400">{description}</p>
      <Button as="a" href="#cotizacion" variant="small">
        Solicitar cotización
      </Button>
    </article>
  )
}
