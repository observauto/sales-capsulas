import LogoOA from './LogoOA';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastLoadDate = "8 de octubre de 2025, 10:09 p. m."; // Placeholder, you might want to make this dynamic

  return (
    <footer className="bg-oa-white py-12 text-oa-ink">
      <div className="mx-auto max-w-6xl px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Column 1: Logo and description */}
          <div className="flex flex-col gap-2">
            <a href="#hero" className="flex items-center gap-2">
              <LogoOA className="h-7 w-auto" />
              <span className="text-oa-ink font-semibold">Cápsulas</span>
              <span className="sr-only">Observauto Cápsulas</span>
            </a>
            <p className="text-sm text-oa-ink/80 mt-2">Observemos más autos juntos</p>
          </div>

          {/* Column 2: Aprende */}
          <div>
            <h3 className="font-bold text-lg mb-3">Aprende</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-oa-red transition-colors">Todas las cápsulas</a></li>
              <li><a href="#" className="hover:text-oa-red transition-colors">Favoritos</a></li>
              <li><a href="#" className="hover:text-oa-red transition-colors">Mis progresos</a></li>
            </ul>
          </div>

          {/* Column 3: Recursos */}
          <div>
            <h3 className="font-bold text-lg mb-3">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://observauto.com" target="_blank" rel="noreferrer" className="hover:text-oa-red transition-colors">Sitio principal</a></li>
              <li><a href="#" className="hover:text-oa-red transition-colors">Blog automotor</a></li>
              <li><a href="#" className="hover:text-oa-red transition-colors">Guías descargables</a></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hola@observauto.com" className="hover:text-oa-red transition-colors">hola@observauto.com</a></li>
              <li><a href="#" className="hover:text-oa-red transition-colors">Redes sociales</a></li>
              <li><a href="#" className="hover:text-oa-red transition-colors">Soporte</a></li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <hr className="border-t border-oa-gray my-8" />

        {/* Bottom section: Copyright and legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-oa-ink/70 gap-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
            <span>© {currentYear} Observauto</span>
            <a href="#" className="hover:text-oa-red transition-colors">Términos de uso</a>
            <a href="#" className="hover:text-oa-red transition-colors">Privacidad</a>
            <a href="#" className="hover:text-oa-red transition-colors">Cookies</a>
          </div>
          <div className="text-right">
            Última carga: {lastLoadDate}
          </div>
        </div>
      </div>
    </footer>
  );
}