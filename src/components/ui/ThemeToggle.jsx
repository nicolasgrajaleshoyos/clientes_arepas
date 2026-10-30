export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition-colors hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M12 4.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1V6a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1V4.5zm0 14.5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1V19zm9.5-8.5a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1v0a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v0zM6 10.5a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1v0a1 1 0 0 1 1-1H5a1 1 0 0 1 1 1v0zm12.02-6.02a1 1 0 0 1 0 1.41L17 6.9a1 1 0 1 1-1.41-1.41l1.02-1.02a1 1 0 0 1 1.41 0zM7.4 16.6a1 1 0 0 1 0 1.41l-1.02 1.02a1 1 0 1 1-1.41-1.41l1.02-1.02a1 1 0 0 1 1.41 0zm11.62 2.43a1 1 0 0 1-1.41 0L16.6 17.99a1 1 0 1 1 1.41-1.41l1.02 1.02a1 1 0 0 1 0 1.41zM7.4 7.4a1 1 0 0 1-1.41 0L4.98 6.4A1 1 0 0 1 6.4 4.98L7.4 6a1 1 0 0 1 0 1.41zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M20.7 14.9A8.5 8.5 0 1 1 9.1 3.3a1 1 0 0 1 1.1 1.5A6.5 6.5 0 0 0 19.2 13.8a1 1 0 0 1 1.5 1.1z" />
        </svg>
      )}
    </button>
  )
}
