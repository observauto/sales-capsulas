# ObservAuto Awareness

**Elevator pitch digital respaldado por datos**, diseñado para presentar y vender los espacios comerciales de *Cápsulas ObservAuto*.

---

## 🚀 Descripción
**Awareness** es una aplicación ligera desarrollada con **React + Vite**, pensada como una pieza de comunicación ejecutiva y visual.  
Su propósito es mostrar, con claridad y datos, el valor comercial de las *Cápsulas ObservAuto* ante marcas, agencias y aliados.

Este proyecto funciona como un micrositio tipo **elevator pitch digital**, optimizado para escritorio y móvil, desplegado mediante **Vercel**.

---

## 🧩 Estructura del Proyecto
/src
├── components/ # Navbar, Hero, Concept, Footer, etc.
├── config/ # Configuración de navegación
├── lib/ # Utilidades (incluye fetcher.js con manejo anti-403)
├── styles/ # Tokens y estilos globales
└── App.jsx # Punto de entrada principal
vercel.json # Configuración de headers y redirect /stats

yaml
Copiar código

---

## ⚙️ Scripts de Ejecución
Instalar dependencias:
```bash
npm install
Entorno de desarrollo:

bash
Copiar código
npm run dev
Build de producción:

bash
Copiar código
npm run build
🌐 Deploy
Producción: https://sales-capsulas.vercel.app

Cada actualización en la rama main genera un deploy automático en Vercel.

🧭 Estado Actual
Código base limpio y funcional

Sin Access Gate

Headers de seguridad activos (vercel.json)

Wrapper fetcher.js con manejo de errores 403 implementado

Panel DEV opcional (DevNetworkPanel) para ver eventos [OA-403] (no se renderiza en producción)

🔧 Variables de entorno relevantes
VITE_SITE_URL → URL pública del sitio (ej.: https://sales-capsulas.vercel.app) para construir URLs absolutas en producción.

(Opcional) VITE_HTTP_PROXY_ENABLED → "true" para habilitar reintentos vía proxy en fetchClient cuando corresponda.

👤 Autoría
Desarrollado por ObservAuto
Dirección creativa y técnica: Felipe Garan
© ObservAuto 2025