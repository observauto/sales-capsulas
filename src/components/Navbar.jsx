import LogoOA from './LogoOA'
import MobileMenu from './MobileMenu' // Re-añadido

// Lista de enlaces de navegación
const links = [
  { href: "#que-es", label: "Qué es" },
  { href: "#proposito", label: "Propósito" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#demo-contacto", label: "Demo" },
  { href: "/pauta", label: "Pauta" } // 🔹 Nuevo enlace comercial añadido
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/85 border-b border-oa-gray/30 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <LogoOA className="h-7 w-auto" />
          <span className="text-oa-link font-semibold">– Awareness</span>
          <span className="sr-only">Observauto</span>
        </a>

        {/* Menú de navegación principal */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-oa-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  )
}
