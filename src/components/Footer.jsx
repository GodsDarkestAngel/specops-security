import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-row">
          <Link to="/" className="wordmark">
            <img src="/icon.svg" alt="" className="wordmark-icon" />
            <img src="/logo.png" alt="SpecOps Security" className="wordmark-img footer-logo" />
          </Link>
          <nav className="footer-nav">
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SpecOps Security</span>
          <span>marco@specopssecurity.com</span>
        </div>
      </div>
    </footer>
  )
}
