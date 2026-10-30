import Button from '../ui/Button.jsx'
import PlaceholderBox from '../ui/PlaceholderBox.jsx'

export default function EventsSection() {
  return (
    <section id="eventos" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold text-brand-dark dark:text-stone-100 sm:text-4xl">Eventos</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-stone-600 dark:text-stone-400">
          <p>Atendemos pedidos especiales para eventos que requieren arepas en cantidad, con cumplimiento en la fecha acordada.</p>
          <p>Cuéntenos el tipo de evento, la cantidad aproximada y la fecha, y le enviaremos una cotización.</p>
          <Button as="a" href="#cotizacion" variant="outline">
            Cotizar para mi evento
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <PlaceholderBox label="Galería de eventos atendidos" className="h-40" />
          <PlaceholderBox label="Galería de eventos atendidos" className="h-40" />
        </div>
        {/* TODO cliente: fotos reales de eventos atendidos */}
      </div>
    </section>
  )
}
