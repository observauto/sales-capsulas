import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactCard({ name, title, email, imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-soft p-6 flex flex-col items-center text-center max-w-xs mx-auto mb-6"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden bg-oa-gray flex items-center justify-center mb-4">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-oa-muted-blue text-4xl font-bold">{name.charAt(0)}</span>
        )}
      </div>
      <h3 className="text-xl font-bold text-oa-ink">{name}</h3>
      <p className="text-oa-ink/80 text-sm mt-1">{title}</p>
      <a
        href={`mailto:${email}`}
        className="mt-3 flex items-center gap-2 text-oa-blue hover:text-oa-red transition-colors text-sm font-medium"
      >
        <Mail size={16} />
        {email}
      </a>
    </motion.div>
  );
}