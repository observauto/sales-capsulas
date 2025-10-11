import LogoOA from './LogoOA'
import { navLinks } from '../config/navLinks'

const iconSources = {
  Premios: 'https://api.iconify.design/lucide:trophy.svg',
  Ingreso: 'https://api.iconify.design/lucide:log-in.svg',
  Favoritos: 'https://api.iconify.design/lucide:heart.svg',
  Compartir: 'https://api.iconify.design/lucide:share-2.svg',
  Switcher: 'https://api.iconify.design/lucide:sun-moon.svg'
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--oa-border)] bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <a href="#hero" className="flex items-center gap-2 text-[color:var(--oa-fg)]">
          <LogoOA className="h-7 w-auto" />
          <span className="sr-only">Observauto Awareness</span>
        </a>
        <ul className="flex items-center gap-2 sm:gap-4">
          {navLinks.map(link => {
            const icon = iconSources[link.label]
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 rounded-full px-3 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--oa-muted)] transition-colors duration-200 hover:bg-[color:var(--oa-border)]/60 hover:text-[color:var(--oa-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--oa-accent)]/40"
                >
                  {icon ? (
                    <img
                      src={icon}
                      alt=""
                      width="20"
                      height="20"
                      loading="lazy"
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="hidden sm:inline text-[0.7rem]">{link.label}</span>
                  <span className="sm:hidden sr-only">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
