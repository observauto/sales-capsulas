import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

const socialMediaLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/observauto' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/observauto' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/observauto' },
  { name: 'X', icon: X, href: 'https://twitter.com/observauto' },
];

export default function SocialLinks({ className = "" }) {
  return (
    <motion.div className={`flex gap-4 ${className}`}>
      {socialMediaLinks.map((platform) => (
        <a
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noreferrer"
          aria-label={platform.name}
          className="text-oa-ink/70 hover:text-oa-red transition-colors"
        >
          <platform.icon size={20} />
        </a>
      ))}
    </motion.div>
  );
}