import { motion } from 'framer-motion';

export default function ProductShowcaseContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.2 }}
      className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* Placeholder para imágenes/videos del producto */}
      <div className="bg-oa-gray rounded-2xl p-6 h-64 flex items-center justify-center text-oa-muted-blue text-xl font-semibold">
        Imagen/Video 1
      </div>
      <div className="bg-oa-gray rounded-2xl p-6 h-64 flex items-center justify-center text-oa-muted-blue text-xl font-semibold">
        Imagen/Video 2
      </div>
      <div className="bg-oa-gray rounded-2xl p-6 h-64 flex items-center justify-center text-oa-muted-blue text-xl font-semibold">
        Imagen/Video 3
      </div>
    </motion.div>
  );
}