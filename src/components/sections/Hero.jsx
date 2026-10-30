import Button from '../ui/Button.jsx'
import BrandLogo from '../ui/BrandLogo.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-brand-gold/20 to-white dark:from-brand-gold/10 dark:to-stone-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <p className="font-semibold uppercase tracking-wide text-brand-red">Arepas de maíz · Elaboración artesanal</p>
          <h1 className="mt-3 text-4xl font-extrabold text-brand-dark dark:text-stone-100 sm:text-5xl">
            El sabor tradicional que su negocio necesita
          </h1>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            Abastecemos tiendas de barrio, supermercados, minimercados, cafeterías y eventos con arepas de
            maíz de calidad constante, listas para vender o servir.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button as="a" href="#productos" variant="primary">
              Ver productos
            </Button>
            <Button as="a" href="#cotizacion" variant="outline">
              Solicitar cotización
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <BrandLogo size="lg" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}
