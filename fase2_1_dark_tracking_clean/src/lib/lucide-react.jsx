/** Shim liviano de lucide-react para no agregar dependencias. */
import React from 'react';

function wrap(pathProps) {
  return function Icon(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {pathProps}
      </svg>
    );
  };
}

export const ArrowRight = wrap(<path d="M5 12h14M13 5l7 7-7 7" />);
export const Twitter = wrap(<path d="M23 3c-1 .5-2 .9-3 1 1-.6 2-2 2-3-1 .7-2 1.3-3 1.6A5 5 0 0012 6v1C8 7 5 5 3 2c0 0-3 6 3 9-1 1-2 1-3 1 0 3 3 5 6 5-3 2-7 2-9 1 3 2 7 3 11 2 9-3 12-11 11-18z" />);
export const Instagram = wrap(<>
  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
</>);
export const Youtube = wrap(<>
  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
</>);
export const Linkedin = wrap(<>
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect x="2" y="9" width="4" height="12" />
  <circle cx="4" cy="4" r="2" />
</>);
export const Moon = wrap(<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />);
export const Sun = wrap(<>
  <circle cx="12" cy="12" r="5" />
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
</>);
export default {};
