export default function SectionHeading({ title, intro }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-brand-dark dark:text-stone-100 sm:text-4xl">{title}</h2>
      {intro && <p className="mx-auto mt-3 max-w-2xl text-stone-600 dark:text-stone-400">{intro}</p>}
    </div>
  )
}
