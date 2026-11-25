import { motion } from 'framer-motion'
import { BarChart3, Layers3, Wrench } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const icons = { chart: BarChart3, visual: Layers3, tools: Wrench }

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <SectionHeading eyebrow="My Expertise" title="Where I Create Clarity." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon as keyof typeof icons]
          return (
            <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }}>
              <div className="skill-icon"><Icon size={21} /></div>
              <h3>{group.title}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
