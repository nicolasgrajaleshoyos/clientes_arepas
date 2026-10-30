import { PRODUCTS } from '../../data/products.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProductCard from './ProductCard.jsx'

export default function ProductsSection() {
  return (
    <section id="productos" className="bg-stone-50 py-16 dark:bg-stone-800">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Productos"
          intro="Nuestro portafolio de arepas. Los precios se definen por cotización directa según cantidad y frecuencia de pedido."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} name={product.name} description={product.description} />
          ))}
        </div>
        {/* TODO cliente: fotos reales de cada producto (fondo limpio, luz natural, horizontal) */}
      </div>
    </section>
  )
}
