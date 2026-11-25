import { ArrowUp, BriefcaseBusiness, CodeXml } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Nisa Athira. Built with curiosity and data.</p>
      <div className="footer-links">
        <a href="#" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a>
        <a href="#" aria-label="GitHub"><CodeXml size={17} /></a>
        <a className="back-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
      </div>
    </footer>
  )
}
