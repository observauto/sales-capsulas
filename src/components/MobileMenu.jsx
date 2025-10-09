import { useState } from 'react'
import { links } from './Navbar'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(prev => !prev)
  const closeMenu = () => setOpen(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex items-center gap-2 rounded-pill border border-oa-gray/40 px-3 py-1.5 text-sm font-semibold text-oa-ink shadow-soft hover:border-oa-red focus:outline-none focus:ring-2 focus:ring-oa-red"
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <span>{open ? 'Cerrar' : 'Menú'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4"
          aria-hidden="true"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && (
        <div id="mobile-nav" className="absolute right-4 top-14 w-48 rounded-2xl border border-oa-gray/40 bg-white p-3 shadow-lg">
          <ul className="flex flex-col gap-2 text-sm text-oa-ink">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-2 hover:bg-oa-gray/20 hover:text-oa-red focus:outline-none focus:ring-2 focus:ring-oa-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
