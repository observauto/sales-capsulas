import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render( // Añadido '!' para aserción no nula
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);