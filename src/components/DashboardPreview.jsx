function Stat({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#0E1526]">
      <div className="text-sm text-gray-500 dark:text-white/70">{label}</div>
      <div className="mt-2 text-3xl font-extrabold text-[#1C3B71] dark:text-white">{value}</div>
      {hint && <div className="mt-1 text-xs text-gray-500 dark:text-white/60">{hint}</div>}
    </div>
  )
}

function Card({ title, children, footer }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0E1526]">
      <h3 className="text-lg font-bold text-[#1F4086] dark:text-white">{title}</h3>
      <div className="mt-4">{children}</div>
      {footer && (
        <div className="mt-4 border-t pt-3 text-sm text-gray-600 dark:text-white/60 dark:border-white/10">{footer}</div>
      )}
    </div>
  )
}

export default function DashboardPreview() {
  return (
    <section className="bg-[#F3F4F6] dark:bg-[#0B1220]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-[#1C3B71] dark:text-white">Visión de impacto</h2>
        <p className="mt-2 text-[#0B1220]/80 dark:text-white/70 max-w-2xl">
          Un vistazo a cómo las cápsulas mueven awareness e intención.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Stat label="CTR promedio" value="4.2%" hint="Últimos 30 días – demo" />
          <Stat label="Tiempo de lectura" value="56s" hint="Mediana – demo" />
          <Stat label="Cápsulas activas" value="18" hint="Portafolio – demo" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card
            title="Top cápsulas (demo)"
            footer="Fuente: ObservAuto (demo). Integraremos tus métricas reales."
          >
            <ul className="divide-y dark:divide-white/10">
              {[
                { name: 'EV Essentials', score: '↑ alto interés' },
                { name: 'Financiación en 3 pasos', score: '↑ conversión' },
                { name: 'Garantía & posventa', score: '↑ retención' },
              ].map((i) => (
                <li key={i.name} className="py-2 flex items-center justify-between">
                  <span className="font-medium text-[#0B1220] dark:text-white">{i.name}</span>
                  <span className="text-sm text-green-600 dark:text-green-400">{i.score}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card
            title="Flujo recomendado"
            footer="El usuario puede saltar al CTA en cualquier momento."
          >
            <ol className="list-decimal pl-5 space-y-2 text-[#0B1220] dark:text-white">
              <li>Hero: promesa clara</li>
              <li>Concept: qué resuelve</li>
              <li>Cápsula: lectura en &lt; 90s</li>
              <li>CTA: agendar demo / hablar</li>
            </ol>
          </Card>
        </div>
      </div>
    </section>
  )
}
