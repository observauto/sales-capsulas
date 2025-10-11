import React from "react";

export default function FloatingWhatsApp() {
  const wa = "https://wa.me/573000000000?text=Hola%20ObservAuto%2C%20quiero%20saber%20m%C3%A1s%20de%20C%C3%A1psulas";
  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg border border-gray-200 bg-white hover:bg-gray-50"
      aria-label="WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      <span role="img" aria-label="whatsapp">💬</span>
    </a>
  );
}
