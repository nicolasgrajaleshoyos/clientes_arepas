import SectionHeading from '../ui/SectionHeading.jsx'
import PlaceholderBox from '../ui/PlaceholderBox.jsx'

export default function ClientsSection() {
  return (
    <section id="clientes" className="bg-stone-50 py-16 dark:bg-stone-800">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Clientes" intro="Negocios que ya confían en nuestro producto." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <PlaceholderBox key={n} label="Logo cliente" className="h-20" />
          ))}
        </div>
        <blockquote className="mt-10 border-l-4 border-brand-gold pl-4 italic text-stone-500 dark:text-stone-400">
          "Espacio reservado para testimonios de clientes."
        </blockquote>
        {/* TODO cliente: logos/nombres de aliados (con autorización) y testimonios reales */}
      </div>
    </section>
  )
}
