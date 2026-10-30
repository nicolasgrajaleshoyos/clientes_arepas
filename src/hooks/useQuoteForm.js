import { useState } from 'react'
import { buildWhatsAppLink } from '../data/siteConfig.js'

const INITIAL_STATE = {
  name: '',
  business: '',
  products: '',
  quantity: '',
  frequency: '',
}

function formatMessage(fields) {
  const lines = [
    'Hola, quiero solicitar una cotización:',
    `Nombre: ${fields.name}`,
    `Tipo de negocio: ${fields.business}`,
    fields.products && `Productos de interés: ${fields.products}`,
    fields.quantity && `Cantidad aproximada: ${fields.quantity}`,
    fields.frequency && `Frecuencia: ${fields.frequency}`,
  ]
  return lines.filter(Boolean).join('\n')
}

/**
 * Encapsula el estado y el envío del formulario de cotización: arma el
 * mensaje y abre WhatsApp con el texto prellenado. No depende de un
 * backend propio (etapa "Inicial" del alcance del proyecto).
 */
export function useQuoteForm() {
  const [fields, setFields] = useState(INITIAL_STATE)

  const setField = (name, value) => setFields((prev) => ({ ...prev, [name]: value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    const message = formatMessage(fields)
    window.open(buildWhatsAppLink(message), '_blank', 'noopener')
  }

  return { fields, setField, handleSubmit }
}
