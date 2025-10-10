// src/components/Footer.jsx
const LOGO_URL = "https://stats.observauto.com/pauta/logo_full.png";

function SocialIcon({ href, src, alt }) {
  return (
    <a
      href={href}
      aria-label={alt}
      target="_blank"
      rel="noreferrer"
      className="hover:opacity-100 opacity-75 transition"
    >
      <img src={src} alt={alt} width="20" height="20" loading="lazy" />
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Marca / Awareness */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="Observauto"
                className="h-7 w-auto"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-sm font-medium text-gray-700">Awareness</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Elevator pitch digital respaldado por datos. Comunicación que
              convierte conocimiento en confianza.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
              Producto
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/#como-funciona" className="text-gray-600 hover:text-gray-900">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="/#resultados" className="text-gray-600 hover:text-gray-900">
                  Resultados
                </a>
              </li>
              <li>
                <a href="/pauta" className="text-gray-600 hover:text-gray-900">
                  Pauta
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
              Recursos
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://stats.observauto.com/pauta/"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  Guía de estilo
                </a>
              </li>
              <li>
                <a
                  href="https://stats.observauto.com/"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  Panel de datos
                </a>
              </li>
              <li>
                <a
                  href="https://capsulas.observauto.com/"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sitio histórico
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto + Redes */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@observauto.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  info@observauto.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573053500400?text=Hola%20Observauto%2C%20quiero%20saber%20m%C3%A1s%20de%20Awareness"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  +57 305 350 0400 (WhatsApp)
                </a>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-4">
              <SocialIcon
                href="https://twitter.com/observauto"
                src="https://api.iconify.design/lucide:twitter.svg"
                alt="X / Twitter"
              />
              <SocialIcon
                href="https://instagram.com/observauto"
                src="https://api.iconify.design/lucide:instagram.svg"
                alt="Instagram"
              />
              <SocialIcon
                href="https://youtube.com/@observauto"
                src="https://api.iconify.design/lucide:youtube.svg"
                alt="YouTube"
              />
              <SocialIcon
                href="https://linkedin.com/company/observauto"
                src="https://api.iconify.design/lucide:linkedin.svg"
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>© {year} Observauto. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/legal/terminos" className="hover:text-gray-900">
              Términos
            </a>
            <a href="/legal/privacidad" className="hover:text-gray-900">
              Privacidad
            </a>
            <a href="/legal/cookies" className="hover:text-gray-900">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
