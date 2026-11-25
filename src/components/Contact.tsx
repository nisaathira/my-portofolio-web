import { ArrowUpRight, BriefcaseBusiness, CodeXml, Download, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-card">
        <div>
          <span className="eyebrow">Start a Conversation</span>
          <h2>Let's Make Data<br />Meaningful.</h2>
          <p>Have a project, collaboration opportunity, or just want to talk about data? I'd love to hear from you.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-link" href={`mailto:${portfolio.email}`}><span><Mail size={18} />Email</span><strong>{portfolio.email}</strong><ArrowUpRight size={18} /></a>
          <a className="contact-link" href={portfolio.linkedin}><span><BriefcaseBusiness size={18} />LinkedIn</span><strong>View profile</strong><ArrowUpRight size={18} /></a>
          <a className="contact-link" href={portfolio.github}><span><CodeXml size={18} />GitHub</span><strong>View profile</strong><ArrowUpRight size={18} /></a>
          <a className="button button-primary cv-button" href={portfolio.cv}><Download size={18} />Download CV</a>
        </div>
      </div>
    </section>
  )
}
