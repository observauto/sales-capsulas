import React from "react";

const OALogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220 28"
    aria-hidden="true"
    className="h-6"
  >
    <g fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontSize="20" fontWeight="800">
      <text x="0" y="20" fill="#1C3B71">
        OBSER
      </text>
      <text x="72" y="20" fill="#1F4086">
        V
      </text>
      <text x="86" y="20" fill="#D70102">
        AUTO
      </text>
    </g>
  </svg>
);

const socialIcons = {
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
      <path d="M7.55 21c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.41-.01-.61A9.18 9.18 0 0 0 22 4.88a9.09 9.09 0 0 1-2.6.71 4.55 4.55 0 0 0 2-2.51 9.06 9.06 0 0 1-2.88 1.1A4.53 4.53 0 0 0 12.2 8.7a12.86 12.86 0 0 1-9.33-4.73 4.52 4.52 0 0 0 1.4 6.04 4.5 4.5 0 0 1-2.05-.57v.06a4.53 4.53 0 0 0 3.63 4.44 4.58 4.58 0 0 1-2.04.08 4.54 4.54 0 0 0 4.23 3.14A9.08 9.08 0 0 1 2 19.54 12.81 12.81 0 0 0 7.55 21" />
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M16.5 7.5h.01" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M21.58 7.2a2.6 2.6 0 0 0-1.83-1.84C18 5 12 5 12 5s-6 0-7.75.36A2.6 2.6 0 0 0 2.42 7.2 27.85 27.85 0 0 0 2 12a27.85 27.85 0 0 0 .42 4.8 2.6 2.6 0 0 0 1.83 1.84C6 19 12 19 12 19s6 0 7.75-.36a2.6 2.6 0 0 0 1.83-1.84A27.85 27.85 0 0 0 22 12a27.85 27.85 0 0 0-.42-4.8ZM10.2 15.02V8.98L15.2 12Z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M4.98 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3 9h3.96v12H3zm6.5 0H13v1.64h.05c.55-1.04 1.92-2.14 3.95-2.14 4.23 0 5 2.78 5 6.39V21h-3.96v-5.62c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.96V21H9.5z" />
    </svg>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { key: "twitter", href: "https://x.com/ObservAuto", label: "ObservAuto en X" },
    { key: "instagram", href: "https://instagram.com/observauto", label: "ObservAuto en Instagram" },
    { key: "youtube", href: "https://youtube.com/@observauto", label: "ObservAuto en YouTube" },
    { key: "linkedin", href: "https://linkedin.com/company/observauto", label: "ObservAuto en LinkedIn" },
  ];

  return (
    <footer className="mt-24 border-t border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <OALogo />
            <span className="text-sm text-gray-600">© {year} ObservAuto</span>
          </div>
          <nav aria-label="Social media" className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-200 p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1F4086] focus:ring-offset-2"
                aria-label={social.label}
              >
                {socialIcons[social.key]}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-sm text-gray-600 max-w-3xl">
          Awareness: elevator pitch digital respaldado por datos para vender espacios comerciales de Cápsulas ObservAuto.
        </p>
      </div>
    </footer>
  );
}
