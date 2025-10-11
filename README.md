# Observauto Cápsulas · SPA
SPA creada con **React + Vite + Tailwind + Framer Motion** siguiendo identidad Observauto.

## Scripts
- `npm i`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Deploy en Vercel
1. Crea un repo en GitHub y sube este proyecto.
2. En Vercel: **New Project** → importa el repo.
3. Framework preset: **Vite**.
4. Root: `/` (por defecto), comando build `npm run build`, output `dist/`.
5. Deploy. Listo.

## Variables de entorno
- `VITE_HTTP_PROXY_ENABLED`: (`true`/`false`) activa el fallback de proxy.
- `VITE_HTTP_PROXY_URL`: endpoint del proxy para solicitudes externas.
- `VITE_HTTP_RETRY_ON_403`: controla si se reintenta al recibir un 403 (por defecto `true`).
- `VITE_HTTP_TIMEOUT`: timeout en ms para las solicitudes (por defecto `15000`).
- `VITE_SITE_URL`: dominio base utilizado por el wrapper `fetcher` para construir rutas relativas en producción (ej. `https://sales-capsulas.vercel.app`).

_Construido: 2025-10-08T23:16:35.655884_
