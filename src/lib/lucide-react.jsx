import React from 'react'

function IconBase({ children, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      {children}
    </svg>
  )
}

export const ArrowRight = (props) => (
  <IconBase {...props}>
    <line x1='5' y1='12' x2='19' y2='12' />
    <polyline points='12 5 19 12 12 19' />
  </IconBase>
)

export const Moon = (props) => (
  <IconBase {...props}>
    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
  </IconBase>
)

export const Sun = (props) => (
  <IconBase {...props}>
    <circle cx='12' cy='12' r='5' />
    <line x1='12' y1='1' x2='12' y2='3' />
    <line x1='12' y1='21' x2='12' y2='23' />
    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
    <line x1='1' y1='12' x2='3' y2='12' />
    <line x1='21' y1='12' x2='23' y2='12' />
    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
  </IconBase>
)

export const Twitter = (props) => (
  <IconBase {...props}>
    <path d='M23 3.01a9.16 9.16 0 0 1-2.64.73A4.6 4.6 0 0 0 22.4 1a9.18 9.18 0 0 1-2.9 1.14 4.56 4.56 0 0 0-7.82 4.16A12.94 12.94 0 0 1 3 2.17a4.56 4.56 0 0 0 1.41 6.08 4.43 4.43 0 0 1-2.06-.57v.06a4.57 4.57 0 0 0 3.66 4.47 4.58 4.58 0 0 1-2.05.08 4.57 4.57 0 0 0 4.26 3.17A9.15 9.15 0 0 1 1 18.57 12.9 12.9 0 0 0 8 20.64c8.3 0 12.84-6.9 12.84-12.88 0-.2 0-.39-.01-.58A9.19 9.19 0 0 0 23 3.01z' />
  </IconBase>
)

export const Instagram = (props) => (
  <IconBase {...props}>
    <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
  </IconBase>
)

export const Youtube = (props) => (
  <IconBase {...props}>
    <path d='M21.8 7.2a2.2 2.2 0 0 0-1.55-1.56C18.3 5 12 5 12 5s-6.3 0-8.25.64A2.2 2.2 0 0 0 2.2 7.2 23.4 23.4 0 0 0 2 12a23.4 23.4 0 0 0 .2 4.8 2.2 2.2 0 0 0 1.55 1.56C5.7 19 12 19 12 19s6.3 0 8.25-.64A2.2 2.2 0 0 0 21.8 16.8 23.4 23.4 0 0 0 22 12a23.4 23.4 0 0 0-.2-4.8z' />
    <polygon points='10 15 15 12 10 9 10 15' fill='currentColor' stroke='none' />
  </IconBase>
)

export const Linkedin = (props) => (
  <IconBase {...props}>
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-14h4v2a4 4 0 0 1 3-1z' />
    <rect x='2' y='9' width='4' height='14' />
    <circle cx='4' cy='4' r='2' />
  </IconBase>
)

export default {
  ArrowRight,
  Moon,
  Sun,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
}
