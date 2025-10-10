export default function Footer() {
  const year = new Date().getFullYear()

  const Icon = ({ children }) => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
      {children}
    </svg>
  )

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Observauto" className="h-7 w-auto" loading="lazy" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gray-700">Awareness</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Elevator pitch digital respaldado por datos. Comunicación que convierte conocimiento en confianza.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-900">Producto</h3>
            <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.26em] text-gray-600">
              <li>
                <a href="/#como-funciona" className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="/#resultados" className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]">
                  Resultados
                </a>
              </li>
              <li>
                <a href="/pauta" className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]">
                  Pauta
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-900">Recursos</h3>
            <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.26em] text-gray-600">
              <li>
                <a
                  href="https://stats.observauto.com/pauta/"
                  className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Guía de estilo
                </a>
              </li>
              <li>
                <a
                  href="https://stats.observauto.com/"
                  className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Panel de datos
                </a>
              </li>
              <li>
                <a
                  href="https://capsulas.observauto.com/"
                  className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sitio histórico
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-900">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.26em] text-gray-600">
              <li>
                <a href="mailto:info@observauto.com" className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]">
                  info@observauto.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573053500400?text=Hola%20Observauto%2C%20quiero%20saber%20m%C3%A1s%20de%20Awareness"
                  className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]"
                  target="_blank"
                  rel="noreferrer"
                >
                  +57 305 350 0400 (WhatsApp)
                </a>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-4 text-gray-500">
              <a
                href="https://twitter.com/observauto"
                aria-label="X / Twitter"
                className="rounded-full p-2 transition hover:bg-gray-100 hover:text-[#D70102]"
                target="_blank"
                rel="noreferrer"
              >
                <Icon>
                  <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-5.83l-4.56-5.31L6.9 22H3.64l8.02-9.17L1.5 2h5.97l4.12 4.79L18.24 2Zm-2.04 18h2.02L7.88 4h-2L16.2 20Z" />
                </Icon>
              </a>
              <a
                href="https://instagram.com/observauto"
                aria-label="Instagram"
                className="rounded-full p-2 transition hover:bg-gray-100 hover:text-[#D70102]"
                target="_blank"
                rel="noreferrer"
              >
                <Icon>
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </Icon>
              </a>
              <a
                href="https://youtube.com/@observauto"
                aria-label="YouTube"
                className="rounded-full p-2 transition hover:bg-gray-100 hover:text-[#D70102]"
                target="_blank"
                rel="noreferrer"
              >
                <Icon>
                  <path d="M23.5 7.5s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C17.2 4.2 12 4.2 12 4.2h0s-5.2 0-8.6.4c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S0 9.1 0 10.7v1.7c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6.8.4 6.8.4s5.2 0 8.6-.4c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.7c0-1.6-.2-3.2-.2-3.2ZM9.5 13.8V8.6l5.7 2.6-5.7 2.6Z" />
                </Icon>
              </a>
              <a
                href="https://linkedin.com/company/observauto"
                aria-label="LinkedIn"
                className="rounded-full p-2 transition hover:bg-gray-100 hover:text-[#D70102]"
                target="_blank"
                rel="noreferrer"
              >
                <Icon>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.06c.53-1 1.83-2.2 3.76-2.2 4.02 0 4.76 2.65 4.76 6.1V24h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.77 0-2.04 1.38-2.04 2.8V24h-4V8Z" />
                </Icon>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs uppercase tracking-[0.32em] text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Observauto. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/legal/terminos" className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]">
              Términos
            </a>
            <a href="/legal/privacidad" className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]">
              Privacidad
            </a>
            <a href="/legal/cookies" className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
