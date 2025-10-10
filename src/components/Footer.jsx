const LOGO_URL = "https://stats.observauto.com/pauta/logo_full.png"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="Observauto"
                className="h-7 w-auto"
                loading="lazy"
                onError={event => {
                  event.currentTarget.classList.add('hidden')
                }}
              />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gray-700">Awareness</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Experiencia digital respaldada por datos que conecta equipos y audiencias con la visión Observauto en tiempo real.
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
                <a
                  href="mailto:info@observauto.com"
                  className="rounded-full px-2 py-1 transition hover:bg-gray-100 hover:text-[#D70102]"
                >
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
                <img
                  src="https://api.iconify.design/lucide:twitter.svg"
                  alt="Twitter"
                  width="20"
                  height="20"
                  loading="lazy"
                  className="opacity-75 transition hover:opacity-100"
                />
              </a>
              <a
                href="https://instagram.com/observauto"
                aria-label="Instagram"
                className="rounded-full p-2 transition hover:bg-gray-100 hover:text-[#D70102]"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://api.iconify.design/lucide:instagram.svg"
                  alt="Instagram"
                  width="20"
                  height="20"
                  loading="lazy"
                  className="opacity-75 transition hover:opacity-100"
                />
              </a>
              <a
                href="https://youtube.com/@observauto"
                aria-label="YouTube"
                className="rounded-full p-2 transition hover:bg-gray-100 hover:text-[#D70102]"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://api.iconify.design/lucide:youtube.svg"
                  alt="YouTube"
                  width="20"
                  height="20"
                  loading="lazy"
                  className="opacity-75 transition hover:opacity-100"
                />
              </a>
              <a
                href="https://linkedin.com/company/observauto"
                aria-label="LinkedIn"
                className="rounded-full p-2 transition hover:bg-gray-100 hover:text-[#D70102]"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://api.iconify.design/lucide:linkedin.svg"
                  alt="LinkedIn"
                  width="20"
                  height="20"
                  loading="lazy"
                  className="opacity-75 transition hover:opacity-100"
                />
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
