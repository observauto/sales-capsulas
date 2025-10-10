import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-4">
            <p className="text-sm text-gray-600">
              Awareness: elevator pitch digital respaldado por datos para vender espacios comerciales de Cápsulas ObservAuto.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {year} ObservAuto
        </div>
      </div>
    </footer>
  );
}
