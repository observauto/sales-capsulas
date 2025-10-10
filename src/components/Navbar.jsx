import LogoOA from './LogoOA'
import { navLinks } from '../config/navLinks'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/#hero" className="flex items-center gap-2 text-oa-ink">
          <LogoOA className="h-7 w-auto" />
          <span className="sr-only">Observauto Awareness</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-oa-ink/80 transition-colors duration-200 hover:bg-gray-100 hover:text-[#D70102] focus:outline-none focus:ring-2 focus:ring-[#D70102]/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
