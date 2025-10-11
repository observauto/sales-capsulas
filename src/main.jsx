import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/tokens.css'
import './styles.css'
import { installFetchInterceptor } from './utils/fetchClient'

// Instala el interceptor global de fetch (no hace nada en build/SSR)
installFetchInterceptor()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
