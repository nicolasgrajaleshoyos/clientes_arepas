// Datos de contacto y navegación del sitio. Centralizados aquí para no
// repetir literales en los componentes y facilitar su actualización.

// TODO cliente: reemplazar por el número real en formato internacional sin "+" (ej: 573001234567)
export const WHATSAPP_NUMBER = '573000000000'

export const CONTACT = {
  whatsappLabel: 'TODO: número de WhatsApp',
  phone: 'TODO: teléfono',
  email: 'TODO: correo@ejemplo.com',
  address: 'TODO: dirección',
  schedule: 'TODO: horario de atención',
  coverage: 'TODO: zonas de entrega',
}

export const NAV_LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#productos', label: 'Productos' },
  { href: '#calidad', label: 'Calidad' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#cotizacion', label: 'Cotizar' },
  { href: '#contacto', label: 'Contacto' },
]

export function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
