import { useQuoteForm } from '../../hooks/useQuoteForm.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'

const BUSINESS_TYPES = ['Tienda de barrio', 'Supermercado / minimercado', 'Cafetería / restaurante', 'Organizador de eventos', 'Otro']
const FREQUENCIES = ['Única vez', 'Semanal', 'Quincenal', 'Mensual']

export default function QuoteSection() {
  const { fields, setField, handleSubmit } = useQuoteForm()

  return (
    <section id="cotizacion" className="mx-auto max-w-3xl px-4 py-16">
      <SectionHeading title="Solicitar cotización" intro="Cuéntenos qué necesita y le respondemos por WhatsApp." />

      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Nombre" id="q-name">
          <input
            id="q-name"
            type="text"
            required
            value={fields.name}
            onChange={(e) => setField('name', e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Tipo de negocio" id="q-business">
          <select
            id="q-business"
            required
            value={fields.business}
            onChange={(e) => setField('business', e.target.value)}
            className="input"
          >
            <option value="">Seleccione…</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>

        <Field label="Productos de interés" id="q-products">
          <input
            id="q-products"
            type="text"
            placeholder="Ej: arepa tela con sal, con queso doble crema"
            value={fields.products}
            onChange={(e) => setField('products', e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Cantidad aproximada" id="q-quantity">
          <input
            id="q-quantity"
            type="text"
            placeholder="Ej: 200 unidades"
            value={fields.quantity}
            onChange={(e) => setField('quantity', e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Frecuencia de pedido" id="q-frequency">
          <select
            id="q-frequency"
            value={fields.frequency}
            onChange={(e) => setField('frequency', e.target.value)}
            className="input"
          >
            <option value="">Seleccione…</option>
            {FREQUENCIES.map((freq) => (
              <option key={freq}>{freq}</option>
            ))}
          </select>
        </Field>

        <p className="text-xs text-stone-500 dark:text-stone-500">
          Al enviar este formulario autoriza el uso de sus datos para dar respuesta a su solicitud, conforme a
          la Ley 1581 de 2012.
        </p>

        <Button type="submit" variant="primary" className="w-full text-center">
          Enviar solicitud por WhatsApp
        </Button>
      </form>
    </section>
  )
}

function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">
        {label}
      </label>
      {children}
    </div>
  )
}
