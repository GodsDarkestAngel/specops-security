import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <>
      <section className="hero contour-bg grid-frame">
        <div className="wrap">
          <span className="eyebrow">Classification: Unclassified // For Public Release</span>

          <div className="hero-logo-wrap redact-wrap">
            <img src="/logo.png" alt="SpecOps Security" className="hero-logo" />
            <span className="bar" />
          </div>

          <p className="lede">
            Human-driven penetration testing and red team assessments, for teams who've
            outgrown a vulnerability scanner and want to know how they'd actually be breached.
          </p>
          <a className="btn" href="mailto:marco@specopssecurity.com">
            Open a Channel: marco@specopssecurity.com
          </a>
        </div>
      </section>

      <Reveal as="section">
        <div className="wrap section-head">
          <span className="eyebrow">Mission Brief</span>
          <h2>Attackers don't run a scanner and call it a day.</h2>
          <p>
            Neither do we. SpecOps Security is a boutique offensive security operation built
            around manual testing, adversary tradecraft, and reporting that a non-technical
            stakeholder can actually act on. Every engagement is run hands-on: no outsourced
            testers, no templated findings.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="eyebrow">Methodology</span>
        </div>
        <div className="method-strip wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="method-step">
            <span className="mono">01: Recon</span>
            <h3>Recon</h3>
            <p>Map the real attack surface: infrastructure, applications, exposed people.</p>
          </div>
          <div className="method-step">
            <span className="mono">02: Access</span>
            <h3>Access</h3>
            <p>Exploit what's actually exploitable, the way a real adversary would.</p>
          </div>
          <div className="method-step">
            <span className="mono">03: Analyze</span>
            <h3>Analyze</h3>
            <p>Chain findings into real business impact, not a raw CVE dump.</p>
          </div>
          <div className="method-step">
            <span className="mono">04: Report</span>
            <h3>Report</h3>
            <p>Plain-language findings your team can prioritize and fix.</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Capabilities</span>
            <h2>Core Services</h2>
          </div>
        </div>
        <div className="card-grid wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="card">
            <span className="mono">Service</span>
            <h3>Penetration Testing</h3>
            <p>Network, web application, and cloud testing that goes past the automated-scan surface level.</p>
          </div>
          <div className="card">
            <span className="mono">Service</span>
            <h3>Red Team Assessments</h3>
            <p>Full adversary simulation against your people, processes, and technology: objective-based, not checklist-based.</p>
          </div>
          <div className="card">
            <span className="mono">Service</span>
            <h3>Social Engineering &amp; OSINT</h3>
            <p>Phishing simulations and open-source reconnaissance grounded in an understanding of how people actually behave.</p>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 34 }}>
          <Link className="btn" to="/services">View All Services</Link>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Why SpecOps</span>
            <h2>A founder-led operation, not a ticket queue.</h2>
            <p>
              You work directly with the person testing your systems, not an account manager
              relaying findings from someone you'll never speak to. Every report is written to
              be read by both your engineers and your board.
            </p>
            <p>
              A background in sociology shapes how engagements are run: social engineering
              assessments grounded in real human behavior, and reports that translate technical
              risk into decisions non-technical stakeholders can actually make.
            </p>
          </div>
          <div className="dossier">
            <span className="dossier-stamp">Service Record</span>
            <span className="mono">Operator Status</span>
            <h3>In Active Training</h3>
            <ul className="plain">
              <li>Based in Canada: remote &amp; on-site engagements</li>
              <li>Hands-on practice: TryHackMe, HackTheBox</li>
              <li>Certification track underway: see Certifications</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </>
  )
}
