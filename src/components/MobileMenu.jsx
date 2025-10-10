import { AnimatePresence, motion } from 'framer-motion'
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
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-oa-gray/50 bg-white/80 text-oa-ink shadow-soft transition hover:border-oa-red focus:outline-none focus:ring-2 focus:ring-oa-red"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className="sr-only">Abrir menú</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="ml-auto flex h-full w-72 flex-col gap-8 bg-white px-6 pb-8 pt-20"
              onClick={event => event.stopPropagation()}
            >
              <nav className="space-y-2 text-lg font-semibold text-oa-ink">
                {links.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-oa-gray/50"
                  >
                    <span>{link.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </nav>
              <div className="mt-auto space-y-4">
                <a
                  href="https://wa.me/56971993925"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-pill bg-oa-blue px-4 py-3 text-sm font-semibold text-white shadow-soft"
                >
                  WhatsApp Awareness
                </a>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="w-full rounded-pill border border-oa-gray px-4 py-3 text-sm font-semibold text-oa-ink"
                >
                  Cerrar menú
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
