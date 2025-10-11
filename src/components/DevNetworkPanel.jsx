import React, { useEffect, useMemo, useState } from "react";

/**
 * Panel DEV para inspeccionar eventos [OA-403] registrados por src/lib/fetcher.js
 * Atajo: Ctrl + Shift + D para abrir/cerrar.
 * En producción no se renderiza (retorna null).
 */
export default function DevNetworkPanel() {
  const isProd =
    (typeof import.meta !== "undefined" &&
      import.meta.env &&
      import.meta.env.PROD === true) ||
    (typeof process !== "undefined" &&
      process.env &&
      process.env.NODE_ENV === "production");

  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState(() => {
    if (typeof window === "undefined") return [];
    return Array.isArray(window.__oa403) ? [...window.__oa403] : [];
  });

  // Atajo de teclado: Ctrl + Shift + D
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e) => {
      // usar toLowerCase para soportar "d" y "D"
      const key = (e.key || "").toLowerCase();
      if (e.ctrlKey && e.shiftKey && key === "d") {
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Actualizar la tabla cada ~800ms con el buffer window.__oa403
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = setInterval(() => {
      const buf = Array.isArray(window.__oa403) ? [...window.__oa403] : [];
      setEvents(buf);
    }, 800);
    return () => clearInterval(id);
  }, []);

  const rows = useMemo(() => {
    return events
      .slice()
      .reverse()
      .map((e, i) => (
        <tr key={i} className="border-b border-gray-200">
          <td className="px-3 py-2 text-xs whitespace-nowrap">
            {e.ts || ""}
          </td>
          <td className="px-3 py-2 text-xs break-all">{e.url || ""}</td>
          <td className="px-3 py-2 text-xs">{e.method || ""}</td>
          <td className="px-3 py-2 text-xs">{e.note || ""}</td>
        </tr>
      ));
  }, [events]);

  if (isProd) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-3 bottom-3 z-[60] rounded-lg border border-gray-300 bg-white/90 px-3 py-1.5 text-xs shadow hover:bg-gray-50"
        title="Abrir panel de red (Ctrl+Shift+D)"
      >
        /dev/network
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] bg-black/40">
          <div className="absolute left-1/2 top-1/2 w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold">Diagnóstico de red — OA 403</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.__oa403 = [];
                    }
                    setEvents([]);
                  }}
                  className="rounded border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
                >
                  Limpiar
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded border border-gray-300 px-2 py-1 text-xs hover:bg-gray-50"
                >
                  Cerrar
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-auto rounded border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-xs">
                  <tr>
                    <th className="px-3 py-2 font-medium">Fecha</th>
                    <th className="px-3 py-2 font-medium">URL</th>
                    <th className="px-3 py-2 font-medium">Método</th>
                    <th className="px-3 py-2 font-medium">Nota</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-gray-600">
              Nota: Los eventos se guardan en <code>window.__oa403</code> (máximo 50). 
              Para probar, provoca un 403 (CORS o endpoint restringido) y verifica que se registre aquí.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
