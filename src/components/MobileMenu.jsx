import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LogoOA from './LogoOA';

const links = [
  { href: "#que-es", label: "Qué es" },
  { href: "#proposito", label: "Propósito" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#demo-contacto", label: "Demo" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2, ease: "easeIn" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 text-oa-ink focus:outline-none focus:ring-2 focus:ring-oa-red rounded-md">
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 z-50 flex flex-col p-6 backdrop-blur-md bg-white/85" // Aplicar el mismo estilo de fondo que el header
          >
            {/* El contenido del menú ya no necesita un div de fondo separado */}
            <div className="flex justify-between items-center mb-8">
              <a href="#hero" className="flex items-center gap-2" onClick={toggleMenu}>
                <LogoOA className="h-7 w-auto" />
                <span className="text-oa-ink font-semibold"> - Awareness -</span>
                <span className="sr-only">Observauto</span>
              </a>
              <button onClick={toggleMenu} className="p-2 text-oa-ink focus:outline-none focus:ring-2 focus:ring-oa-red rounded-md">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-oa-ink text-lg">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={toggleMenu}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="block py-2 px-4 rounded-md hover:bg-oa-gray/30 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}