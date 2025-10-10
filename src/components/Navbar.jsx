import LogoOA from './LogoOA'
import MobileMenu from './MobileMenu'
import { navLinks } from '../config/navLinks'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-oa-gray/30 bg-white/80 backdrop-blur-xl">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <LogoOA className="h-7 w-auto" />
          <span className="sr-only">Observauto</span>
        </a>
        <ul className="hidden items-center gap-6 text-oa-ink md:flex">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-pill px-3 py-1.5 transition-all duration-200 hover:bg-oa-gray/30 hover:text-oa-red focus:outline-none focus:ring-2 focus:ring-oa-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <MobileMenu links={navLinks} />
      </nav>
    </header>
  )
}
