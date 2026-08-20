import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import posts from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="wrap page-header">
        <h1>Post not found</h1>
        <p><Link to="/blog">← Back to Blog</Link></p>
      </div>
    )
  }

  return (
    <>
      <div className="page-header contour-bg">
        <div className="wrap">
          <span className="eyebrow">Field Note — {post.number}</span>
          <h1>{post.title}</h1>
          <p className="lede">{post.lede}</p>
        </div>
      </div>

      <Reveal as="section" style={{ borderBottom: 'none' }}>
        <div className="wrap" style={{ maxWidth: '72ch' }}>
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" style={{ textAlign: 'center', borderBottom: 'none' }}>
        <div className="wrap">
          <Link className="btn" to="/blog">← Back to Blog</Link>
        </div>
      </Reveal>
    </>
  )
}
