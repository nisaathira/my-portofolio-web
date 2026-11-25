import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function ProjectPreview({ type }: { type: string }) {
  return (
    <div className={`project-preview preview-${type}`}>
      {type === 'bars' && <div className="preview-bars">{[42, 68, 54, 82, 64, 92].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div>}
      {type === 'line' && <><div className="preview-line-grid" /><svg viewBox="0 0 300 150" aria-hidden="true"><path d="M10 118 C50 110,55 82,92 92 S145 126,174 75 S220 42,290 28" /><circle cx="290" cy="28" r="5" /></svg></>}
      {type === 'donut' && <><div className="donut"><div /></div><div className="donut-legend"><span><i /> Completed</span><span><i /> In progress</span></div></>}
      {type === 'scatter' && <div className="scatter">{[18, 34, 48, 61, 77].map((left, i) => <span key={i} style={{ left: `${left}%`, bottom: `${22 + i * 12}%` }} />)}<span className="trend-line" /></div>}
      <small>ILLUSTRATIVE DATA</small>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <SectionHeading eyebrow="Selected Works" title="Turning Numbers Into Stories." />
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.07, duration: 0.5 }}>
            <ProjectPreview type={project.type} />
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <div className="tool-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                <a href="#contact" aria-label={`View case study for ${project.title}`}>View Case Study <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
