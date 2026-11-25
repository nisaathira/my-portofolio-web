import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Building2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const cards = [
  { icon: BookOpen, number: '01', title: 'Academic Background', text: 'Bachelor of Statistics (S.Stat.)' },
  { icon: Briefcase, number: '02', title: 'Professional Experience', text: '3 Years of Experience' },
  { icon: Building2, number: '03', title: 'Current Role', text: 'Data Presenter / Data Analyst' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <SectionHeading eyebrow="Behind the Data" title="A Little About Me." />
      <div className="about-grid">
        <motion.div className="about-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="lead">I help information become <strong>understandable, useful, and human.</strong></p>
          <p>With a statistics background and approximately three years of professional experience, I work across data processing, validation, statistical analysis, and reporting. My current role in the government sector has strengthened my ability to turn complex datasets into clear information that supports informed decisions.</p>
          <p>I approach every dataset with curiosity and care—making sure the story behind the numbers remains accurate, relevant, and easy to understand.</p>
        </motion.div>
        <div className="highlight-grid">
          {cards.map((card, index) => (
            <motion.article key={card.number} className="highlight-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.45 }}>
              <div className="highlight-top"><card.icon size={20} /><span>{card.number}</span></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
