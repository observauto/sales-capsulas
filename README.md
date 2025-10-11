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

Próximo paso: Healthcheck /dev/network

👤 Autoría
Desarrollado por ObservAuto
Dirección creativa y técnica: Felipe Garan
© ObservAuto 2025

pgsql
Copiar código

---

--- Archivo: vercel.json
```json
{
  "version": 2,
  "public": true,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ],
  "redirects": [
    { "source": "/stats", "destination": "https://stats.observauto.com", "permanent": false }
  ]
}
