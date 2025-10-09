import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Counter({ value, duration = 1.5 }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 100, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{displayValue}</motion.span>;
}