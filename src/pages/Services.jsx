import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const SERVICES = [
  {
    n: '01',
    title: 'Penetration Testing',
    body: "Network, web application, API, and cloud configuration testing. We chain misconfigurations and vulnerabilities together the way a real attacker would, rather than reporting isolated CVEs.",
    tags: ['Network', 'Web App', 'Cloud'],
  },
  {
    n: '02',
    title: 'Red Team Assessments',
    body: 'Objective-based adversary simulation testing detection and response, not just exploitability. Built around a defined goal, such as data access, domain admin, or physical entry, rather than a checklist.',
    tags: ['Adversary Simulation', 'Active Directory'],
  },
  {
    n: '03',
    title: 'Social Engineering & Phishing Simulation',
    body: 'Human-layer testing informed by a background in sociology: realistic pretexts, phishing campaigns, and vishing exercises that measure how your people respond under pressure.',
    tags: ['Phishing', 'Vishing', 'Pretexting'],
  },
  {
    n: '04',
    title: 'OSINT & Attack Surface Recon',
    body: 'Open-source reconnaissance to map what an attacker can learn about your organization before they ever send a payload: exposed infrastructure, leaked credentials, and public employee footprint.',
    tags: ['Recon', 'Exposure Mapping'],
  },
  {
    n: '05',
    title: 'Security Audits & Risk Assessments',
    body: 'A structured review of your current controls against real-world attack techniques, with a prioritized remediation roadmap your team can action.',
    tags: ['Controls Review', 'Remediation'],
  },
  {
    n: '06',
    title: 'Remediation Support',
    body: "Post-engagement support validating fixes and answering your team's questions. Testing isn't useful if the findings sit in a PDF.",
    tags: ['Retesting', 'Advisory'],
  },
]

export default function Services() {
  return (
    <>
      <div className="page-header contour-bg">
        <div className="wrap">
          <span className="eyebrow">Capabilities</span>
          <h1>Services</h1>
          <p className="lede">Every engagement is scoped to your environment and run hands-on. No boilerplate scan-and-stamp reports.</p>
        </div>
      </div>

      <Reveal as="section">
        <div className="card-grid wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {SERVICES.map((s) => (
            <div className="card" key={s.n}>
              <span className="mono">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="tag-row">
                {s.tags.map((t) => (
                  <span className="tag-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Process</span>
            <h2>How an engagement runs</h2>
            <p>Every project follows the same four-stage methodology (recon, access, analysis, reporting), scoped and confirmed with you before any testing begins, and closed out with a walkthrough of findings, not just a document handoff.</p>
          </div>
          <div className="dossier">
            <span className="dossier-stamp">Note</span>
            <span className="mono">Engagement Scope</span>
            <h3>Every test is scoped first</h3>
            <p>Rules of engagement, testing windows, and target scope are agreed in writing before anything begins. Nothing outside the agreed scope is touched.</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" style={{ textAlign: 'center', borderBottom: 'none' }}>
        <div className="wrap">
          <h2>Ready to scope an engagement?</h2>
          <Link className="btn" to="/contact">Get in Touch</Link>
        </div>
      </Reveal>
    </>
  )
}
