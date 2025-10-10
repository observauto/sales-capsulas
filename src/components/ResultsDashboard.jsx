function Gauge({ label, value }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="flex flex-col items-center p-4 border rounded-xl">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 36 36" className="h-24 w-24">
          <path
            d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
            opacity="0.7"
          />
          <path
            d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
            fill="none"
            stroke="#ef4444"
            strokeWidth="4"
            strokeDasharray={`${pct},100`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold">{pct}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm text-gray-600">{label}</span>
    </div>
  );
}

function Bar({ label, value }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{label}</span><span>{pct}%</span>
      </div>
      <div className="mt-1 h-3 w-full rounded-full bg-gray-200">
        <div className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-red-600" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function ResultsDashboard() {
  return (
    <section id="resultados" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Resultados que hablan</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Gauge label="VTR" value={82} />
        <Gauge label="ER" value={18} />
        <Gauge label="ROI" value={86} />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Bar label="Alcance" value={92} />
        <Bar label="PR value" value={75} />
      </div>
    </section>
  );
}
