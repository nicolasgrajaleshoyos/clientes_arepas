import { useState } from 'react'
import { NAV_LINKS } from '../../data/siteConfig.js'
import ThemeToggle from '../ui/ThemeToggle.jsx'
import BrandLogo from '../ui/BrandLogo.jsx'

export default function Header({ theme, onToggleTheme }) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur dark:bg-stone-900/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2">
          <BrandLogo size="sm" />
          <span className="font-bold text-brand-dark dark:text-stone-100">Arepas El Buen Sabor</span>
        </a>

        <div className="flex items-center gap-3 md:order-last">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setIsNavOpen((open) => !open)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={isNavOpen}
          >
            <span className="h-0.5 w-6 bg-brand-dark dark:bg-stone-100" />
            <span className="h-0.5 w-6 bg-brand-dark dark:bg-stone-100" />
            <span className="h-0.5 w-6 bg-brand-dark dark:bg-stone-100" />
          </button>
        </div>

        <nav
          className={`${isNavOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-4 bg-white p-4 shadow-md dark:bg-stone-900 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:p-0 md:shadow-none`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsNavOpen(false)}
              className="text-stone-700 transition-colors hover:text-brand-red dark:text-stone-300 dark:hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
