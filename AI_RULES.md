# AI Rules for Observauto Cápsulas SPA

This document outlines the core technologies used in this application and provides guidelines for library usage to maintain consistency and best practices.

## Tech Stack Description

*   **Frontend Framework**: React for building dynamic and interactive user interfaces.
*   **Build Tool**: Vite for a fast development experience and optimized production builds.
*   **Styling Framework**: Tailwind CSS for a utility-first approach to styling, enabling rapid and consistent UI development.
*   **Animation Library**: Framer Motion for declarative and performant animations and transitions.
*   **Language**: JavaScript (with JSX) for all application logic and component definitions.
*   **HTML Structure**: Standard HTML5 for semantic document structure.
*   **CSS Pre/Post-processing**: PostCSS with Autoprefixer for handling CSS compatibility and enhancements.
*   **Class Name Utility**: `clsx` for easily constructing conditional CSS class strings.
*   **Routing**: React Router for managing navigation and different views within the Single Page Application.
*   **Icons**: Lucide React for a consistent set of SVG icons.
*   **UI Components**: shadcn/ui for pre-built, accessible, and customizable UI components.

## Library Usage Rules

*   **UI Development**: All user interface components must be built using **React**.
*   **Styling**: **Tailwind CSS** classes are the primary method for styling. Avoid custom CSS files or inline styles unless absolutely necessary for global overrides in `src/styles.css`.
*   **Animations**: Use **Framer Motion** for all animations, transitions, and gestures.
*   **Build Process**: **Vite** is the designated build tool; do not introduce other bundlers or build configurations.
*   **Class Utilities**: When conditionally applying CSS classes, use the **`clsx`** utility.
*   **Routing**: Use **React Router** for all client-side navigation. Routes should be defined and managed within `src/App.tsx`.
*   **Icons**: Integrate icons using the **`lucide-react`** library.
*   **UI Components**: Leverage **shadcn/ui** components for common UI elements (e.g., buttons, cards, forms). If a shadcn/ui component needs modification, create a new component that wraps or extends it rather than editing the original shadcn/ui file.