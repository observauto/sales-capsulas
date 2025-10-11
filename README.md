# ObservAuto Awareness

**Elevator pitch digital respaldado por datos**, diseñado para presentar y vender los espacios comerciales de *Cápsulas ObservAuto*.

---

## 🚀 Descripción
**Awareness** es una SPA ligera (React + Vite) enfocada en comunicación ejecutiva: mostrar con claridad el valor comercial de las *Cápsulas ObservAuto* a marcas y agencias. Se despliega en **Vercel** y está optimizada para móvil y escritorio.

---

## 🧩 Estructura del Proyecto
/src
├── components/ # Navbar, Hero, Concept, Footer, etc.
├── config/ # Navegación (navLinks.js)
├── lib/ # Utilidades (incluye fetcher.js con logging 403)
├── styles/ # Tokens y estilos globales
└── App.jsx # Composición principal
vercel.json # Headers de seguridad + redirect /stats

yaml
Copiar código

---

## ⚙️ Scripts
```bash
npm install
npm run dev
npm run build
🌐 Deploy
Producción: https://sales-capsulas.vercel.app
Cada push a main dispara deploy en Vercel.

🔧 Variables de entorno
VITE_SITE_URL → URL pública del sitio (p. ej., https://sales-capsulas.vercel.app) para construir URLs absolutas.

(Opcional) VITE_HTTP_PROXY_ENABLED → "true" para habilitar reintento por proxy en fetchClient cuando exista /api/proxy.

🧭 Estado Actual
Sin Access Gate

vercel.json con headers de seguridad

fetcher.js con logging de 403 y buffer window.__oa403

Panel DEV opcional (si fue agregado) para inspección de [OA-403] en desarrollo

👤 Autoría
Desarrollado por ObservAuto — Dirección creativa y técnica: Felipe Garan
© ObservAuto 2025

csharp
Copiar código

---
