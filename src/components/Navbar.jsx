import LogoOA from './LogoOA'

const links = [
  { href: "#que-es", label: "Qué es" },
  { href: "#proposito", label: "Propósito" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#demo-contacto", label: "Demo" },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/85 border-b border-oa-gray/30 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <LogoOA className="h-6 md:h-7" />
          <span className="sr-only">Observauto</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-oa-ink">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="hover:text-oa-red hover:bg-oa-gray/30 px-3 py-1.5 rounded-pill transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-oa-red">{l.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
