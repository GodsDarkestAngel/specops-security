import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="wrap page-header" style={{ textAlign: 'center' }}>
      <span className="eyebrow">Error 404</span>
      <h1>Signal Lost</h1>
      <p className="lede" style={{ margin: '0 auto 1.5em' }}>That page doesn't exist.</p>
      <Link className="btn" to="/">Return to Base</Link>
    </div>
  )
}
