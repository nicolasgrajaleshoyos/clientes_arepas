const VALUES = [
  { title: 'Calidad constante', text: 'mismo sabor y presentación en cada pedido.' },
  { title: 'Cumplimiento', text: 'entregas puntuales para que su negocio no pare.' },
  { title: 'Higiene', text: 'manipulación de alimentos bajo buenas prácticas.' },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold text-brand-dark dark:text-stone-100 sm:text-4xl">Nosotros</h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-stone-600 dark:text-stone-400">
          <p>
            Arepas El Buen Sabor es una empresa familiar dedicada a la elaboración de arepas de maíz, con un
            proceso artesanal que conserva el sabor tradicional en cada producto.
          </p>
          <p>
            Hoy abastecemos a tiendas de barrio, supermercados, minimercados, cafeterías, restaurantes y
            eventos, cuidando la misma calidad en cada entrega.
          </p>
          {/* TODO cliente: reemplazar por la historia real (año de inicio, origen familiar, hitos) */}
        </div>
        <ul className="space-y-4">
          {VALUES.map((value) => (
            <li key={value.title} className="rounded-lg bg-stone-50 p-4 dark:bg-stone-800">
              <strong className="text-brand-dark dark:text-stone-100">{value.title}</strong>{' '}
              <span className="dark:text-stone-400">— {value.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
