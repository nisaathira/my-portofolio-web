import { motion } from 'framer-motion'
import { GraduationCap, Landmark } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <SectionHeading eyebrow="Professional Journey" title="Learning, Analyzing, Growing." />
      <div className="timeline">
        <motion.article className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <div className="timeline-marker"><Landmark size={20} /></div>
          <div className="timeline-content">
            <span className="timeline-period">Approximately 3 Years</span>
            <h3>Data Presenter / Data Analyst</h3>
            <p className="timeline-place">Government Institution · Pramu Data</p>
            <p>Responsible for supporting data processing, statistical information management, data presentation, and analytical reporting to help transform data into useful information.</p>
          </div>
        </motion.article>
        <motion.article className="timeline-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
          <div className="timeline-marker"><GraduationCap size={20} /></div>
          <div className="timeline-content">
            <span className="timeline-period">Academic Background</span>
            <h3>Bachelor of Statistics (S.Stat.)</h3>
            <p className="timeline-place">Private University · Bandung, Indonesia</p>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
