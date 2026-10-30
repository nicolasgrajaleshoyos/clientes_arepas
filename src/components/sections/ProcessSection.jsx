import SectionHeading from '../ui/SectionHeading.jsx'
import PlaceholderBox from '../ui/PlaceholderBox.jsx'

const GALLERY_ITEMS = [
  'Manos formando la arepa',
  'Arepas en el asador',
  'Empaque del producto',
  'Equipo con elementos de higiene',
]

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-stone-50 py-16 dark:bg-stone-800">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Proceso de fabricación" intro="El carácter artesanal de nuestras arepas, de principio a fin." />
        <PlaceholderBox label="Video del proceso — pendiente de grabación (30–60 seg)" className="mb-8 h-64" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <PlaceholderBox key={item} label={item} className="h-32" />
          ))}
        </div>
        {/* TODO cliente: reemplazar por fotos y video reales del proceso */}
      </div>
    </section>
  )
}
