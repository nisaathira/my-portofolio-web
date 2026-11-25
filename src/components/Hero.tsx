import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import AnalyticsVisual from './AnalyticsVisual'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="availability"><span />Currently working as a Data Analyst</div>
        <p className="hero-kicker">HELLO, I'M NISA ATHIRA</p>
        <h1>Turning Data Into <em>Meaningful</em> Insights.</h1>
        <p className="hero-description">Statistics graduate and Data Analyst with 3 years of experience in the government sector. Passionate about transforming complex data into clear visualizations, actionable insights, and meaningful stories.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore My Work <ArrowDownRight size={18} /></a>
          <a className="button button-secondary" href="#contact">Let's Connect <ArrowRight size={18} /></a>
        </div>
      </motion.div>
      <AnalyticsVisual />
    </section>
  )
}
