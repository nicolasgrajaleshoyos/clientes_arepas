export default function QualitySection() {
  return (
    <section id="calidad" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold text-brand-dark dark:text-stone-100 sm:text-4xl">Calidad e ingredientes</h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3 text-stone-600 dark:text-stone-400">
          <h3 className="font-bold text-brand-dark dark:text-stone-100">Ingredientes</h3>
          <p>
            Nuestras arepas se elaboran con maíz seleccionado y los ingredientes propios de cada presentación
            (sal, mantequilla o queso doble crema según el producto).
          </p>
          <p className="text-sm italic text-stone-500 dark:text-stone-500">
            La lista detallada de ingredientes por producto se publica solo con autorización de la empresa, sin
            cantidades ni proporciones, para proteger la receta.
          </p>
          {/* TODO cliente: confirmar qué ingredientes autoriza publicar por producto */}
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-brand-dark dark:text-stone-100">Conservación e higiene</h3>
          <ul className="list-disc space-y-2 pl-5 text-stone-600 dark:text-stone-400">
            <li>Producto elaborado bajo prácticas de manipulación de alimentos.</li>
            <li>Recomendaciones de conservación según presentación.</li>
          </ul>
          {/* TODO cliente: recomendaciones reales de conservación, registros sanitarios si desea mostrarlos */}
        </div>
      </div>
    </section>
  )
}
