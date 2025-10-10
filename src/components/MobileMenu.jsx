import { useEffect, useId, useRef, useState } from 'react'
import navLinks from '../config/navLinks'

export default function MobileMenu({ links = navLinks }) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty('overflow')
      return
    }

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const toggleMenu = () => setOpen(previous => !previous)
  const closeMenu = () => setOpen(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-oa-gray/40 bg-white/90 text-oa-ink shadow-soft transition focus:outline-none focus:ring-2 focus:ring-oa-red"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-haspopup="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6 transition-transform duration-200">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
          onClick={closeMenu}
        />
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          ref={panelRef}
          tabIndex={-1}
          className={`absolute inset-y-0 right-0 flex h-full w-full max-w-xs flex-col gap-6 bg-white/95 px-6 pb-10 pt-20 text-oa-ink shadow-xl backdrop-blur transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className="space-y-2 text-base font-semibold">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-oa-gray/40"
              >
                <span>{link.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={closeMenu}
            className="mt-auto rounded-pill border border-oa-gray px-4 py-3 text-sm font-semibold text-oa-ink transition-colors duration-200 hover:border-oa-red hover:text-oa-red"
          >
            Cerrar menú
          </button>
        </div>
      </div>
    </div>
  )
}
