import { CONTACT, buildWhatsAppLink } from '../../data/siteConfig.js'
import PlaceholderBox from '../ui/PlaceholderBox.jsx'

const CONTACT_ITEMS = [
  { label: 'Teléfono', value: CONTACT.phone },
  { label: 'Correo', value: CONTACT.email },
  { label: 'Dirección', value: CONTACT.address },
  { label: 'Horario', value: CONTACT.schedule },
  { label: 'Zonas de cobertura', value: CONTACT.coverage },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-stone-50 py-16 dark:bg-stone-800">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-brand-dark dark:text-stone-100 sm:text-4xl">Contacto</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <ul className="space-y-3 text-stone-600 dark:text-stone-400">
            <li>
              <strong className="text-brand-dark dark:text-stone-100">WhatsApp:</strong>{' '}
              <a href={buildWhatsAppLink('Hola, quiero más información.')} className="text-brand-red hover:underline dark:text-red-400">
                {CONTACT.whatsappLabel}
              </a>
            </li>
            {CONTACT_ITEMS.map((item) => (
              <li key={item.label}>
                <strong className="text-brand-dark dark:text-stone-100">{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
          <PlaceholderBox label="Mapa — pendiente dirección real" className="h-64" />
          {/* TODO cliente: reemplazar por iframe de Google Maps con la dirección real */}
        </div>
      </div>
    </section>
  )
}
