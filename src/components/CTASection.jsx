export default function CTASection() {
  return (
    <section id="cta" className="relative bg-white dark:bg-[#0B1220]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-[#F3F4F6] p-8 md:p-12 dark:border-white/10 dark:from-[#0E1526] dark:to-[#0B1220]">
          <div className="grid gap-8 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-extrabold text-[#1C3B71] dark:text-white">¿Listo para ver tus cápsulas en acción?</h2>
              <p className="mt-2 text-[#0B1220]/80 dark:text-white/70">
                Adaptamos el formato a tus objetivos y medimos el impacto desde el día uno.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="https://capsulas.observauto.com/contacto"
                target="_blank"
                rel="noreferrer"
                data-oa="cta-contact"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-2xl bg-[#D70102] px-6 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2"
              >
                Agendar una demo
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500 dark:text-white/60">
            *Resultados no garantizados: optimizamos para impacto, pero cada experimento depende del contexto.
          </p>
        </div>
      </div>
    </section>
  );
}
