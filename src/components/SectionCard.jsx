import { motion } from 'framer-motion';

export default function SectionCard({ overline, title, subtitle, children, className }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`bg-white rounded-2xl shadow-soft p-8 md:p-12 ${className || ''}`}
    >
      {overline && <p className="text-oa-blue font-bold text-sm uppercase mb-2">{overline}</p>}
      {title && <h2 className="text-3xl md:text-4xl font-extrabold text-oa-ink">{title}</h2>}
      {subtitle && <p className="mt-4 text-lg text-oa-ink/90">{subtitle}</p>}
      {children && <div className={title || subtitle ? "mt-8" : ""}>{children}</div>}
    </motion.section>
  );
}