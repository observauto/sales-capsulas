# AI Development Rules for Observauto Cápsulas SPA

This document outlines the technical stack and development guidelines for the Observauto Cápsulas Single Page Application.

## Tech Stack Overview

*   **Frontend Framework:** React.js for building dynamic and interactive user interfaces.
*   **Build Tool:** Vite, providing a fast development server and optimized build process.
*   **Styling:** Tailwind CSS, a utility-first CSS framework for rapid and consistent UI development.
*   **Animations:** Framer Motion, a production-ready motion library for React, enabling fluid and engaging animations.
*   **Language:** JavaScript (JSX) for existing components, with a transition to TypeScript (TSX) for all new development and modified files.
*   **Conditional Class Names:** `clsx` for easily toggling CSS classes based on conditions.
*   **Routing:** React Router for declarative client-side navigation.
*   **Icons:** `lucide-react` for a comprehensive set of customizable SVG icons.
*   **UI Components:** `shadcn/ui` for accessible and customizable UI components, built on Radix UI and styled with Tailwind CSS.

## Library Usage Guidelines

*   **Core UI Development:** All user interface components must be built using React.
*   **Styling:** Exclusively use Tailwind CSS for all styling. Avoid writing custom CSS unless absolutely necessary for global styles or specific overrides not achievable with Tailwind.
*   **Animations:** Implement all animations and transitions using Framer Motion.
*   **Routing:** For managing application routes and navigation, use React Router. All main application routes should be defined in `src/App.tsx`.
*   **Icons:** When icons are needed, use components from the `lucide-react` library.
*   **UI Components:** Prioritize using components from `shadcn/ui` for common UI elements (e.g., buttons, forms, cards, dialogs). If a specific `shadcn/ui` component does not meet the requirements, create a new custom component following the project's styling and structure.
*   **Conditional Classes:** Use the `clsx` utility for dynamically applying CSS classes.
*   **Language:** While existing files are in JavaScript (JSX), all new components, pages, and utility files should be written in TypeScript (TSX/TS). When modifying an existing `.jsx` file, it should be converted to `.tsx` during the modification.
*   **File Structure:**
    *   Application pages should reside in `src/pages/`.
    *   Reusable UI components should be placed in `src/components/`.
    *   Utility functions and helpers should be in `src/utils/`.
    *   All source code must be within the `src/` directory.
*   **Responsiveness:** All designs must be responsive and adapt gracefully to different screen sizes.
*   **Simplicity:** Aim for simple, elegant, and maintainable code. Avoid over-engineering.
*   **Error Handling:** Do not implement `try/catch` blocks unless specifically requested. Errors should bubble up for easier debugging and resolution.