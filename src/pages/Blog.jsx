import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import posts from '../data/posts'

export default function Blog() {
  return (
    <>
      <div className="page-header contour-bg">
        <div className="wrap">
          <span className="eyebrow">Field Notes</span>
          <h1>Blog</h1>
          <p className="lede">Write-ups and notes on offensive security, OSINT, and the human side of the job.</p>
        </div>
      </div>

      <Reveal as="section">
        <div className="wrap">
          <div className="card-grid" style={{ background: 'var(--line)' }}>
            {posts.map((p) => (
              <Link className="card card-link" to={`/blog/${p.slug}`} key={p.slug} style={{ color: 'inherit' }}>
                <span className="mono">Field Note #{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="status-line">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <p className="status-line">More field notes posted regularly.</p>
        </div>
      </Reveal>
    </>
  )
}
