import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </motion.div>
  )
}
