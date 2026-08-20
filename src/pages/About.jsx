import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <>
      <div className="page-header contour-bg">
        <div className="wrap">
          <span className="eyebrow">Founder Brief</span>
          <h1>About</h1>
          <p className="lede">SpecOps Security is a boutique offensive security operation, built from the ground up around hands-on tradecraft rather than automated tooling.</p>
        </div>
      </div>

      <Reveal as="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Origin</span>
            <h2>Why sociology, in security?</h2>
            <p>Most offensive security findings fail for the same reason: nobody outside the security team can act on them. SpecOps was built on the idea that a technically rigorous engagement is only half the job. The other half is communicating it clearly enough that a non-technical stakeholder makes the right call.</p>
            <p>That instinct comes from a background in sociology, applied directly to two parts of the work that most firms treat as an afterthought: social engineering assessments that account for real human behavior, and reporting written to be understood, not just technically correct.</p>
          </div>
          <div className="dossier">
            <span className="dossier-stamp">Profile</span>
            <span className="mono">Operator Background</span>
            <h3>Foundation</h3>
            <ul className="plain">
              <li>Background in sociology: applied to client communication &amp; social engineering</li>
              <li>Hands-on technical training: TryHackMe, HackTheBox</li>
              <li>Certification roadmap toward red team specialization</li>
              <li>Based in Canada</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="wrap section-head">
          <span className="eyebrow">Direction</span>
          <h2>Where this is headed</h2>
          <p>SpecOps is being built deliberately, one certification and one engagement at a time, toward full red team capability: adversary simulation that tests people, process, and technology together, not just infrastructure. The certification roadmap on the next page is public because the goal is to be transparent about capability, not to oversell it.</p>
        </div>
      </Reveal>

      <Reveal as="section" style={{ textAlign: 'center', borderBottom: 'none' }}>
        <div className="wrap">
          <h2>See the training roadmap</h2>
          <Link className="btn" to="/certifications">Certifications &amp; Training</Link>
        </div>
      </Reveal>
    </>
  )
}
