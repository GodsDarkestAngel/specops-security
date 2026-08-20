import Reveal from '../components/Reveal'

const CERTS = [
  { status: 'Status: In Progress', title: 'CompTIA Security+', body: 'Foundational security certification — currently underway.' },
  { status: 'Status: Planned — Next', title: 'eJPT', body: 'Junior Penetration Tester certification — practical, hands-on exam.' },
  { status: 'Status: Planned', title: 'OSCP', body: 'Offensive Security Certified Professional — the industry benchmark for hands-on penetration testing.' },
  { status: 'Status: Planned', title: 'CRTO', body: 'Certified Red Team Operator — adversary simulation and red team tradecraft.' },
]

const SKILLS = ['Python', 'Bash / Linux', 'PowerShell', 'Active Directory', 'Network Fundamentals', 'Web Application Security']

export default function Certifications() {
  return (
    <>
      <div className="page-header contour-bg">
        <div className="wrap">
          <span className="eyebrow">Training Log</span>
          <h1>Certifications</h1>
          <p className="lede">Published in full, in progress and all — capability here is built in the open, not claimed upfront.</p>
        </div>
      </div>

      <Reveal as="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Roadmap</span>
            <h2>Certification Track</h2>
          </div>
        </div>
        <div className="card-grid wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {CERTS.map((c) => (
            <div className="card" key={c.title}>
              <span className="mono">{c.status}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Practical Training</span>
            <h2>Built on reps, not just exams</h2>
            <p>Alongside formal certification, technical skill is built through ongoing hands-on practice — hundreds of practical labs and boxes rather than theory alone.</p>
          </div>
          <div className="dossier">
            <span className="dossier-stamp">Log</span>
            <span className="mono">Practice Platforms</span>
            <h3>Active Training</h3>
            <ul className="plain">
              <li>TryHackMe — ongoing room completions</li>
              <li>HackTheBox — active machine &amp; challenge practice</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" style={{ borderBottom: 'none' }}>
        <div className="wrap section-head">
          <span className="eyebrow">Supporting Skills</span>
          <h2>Technical Toolkit</h2>
        </div>
        <div className="wrap tag-row" style={{ paddingLeft: 24 }}>
          {SKILLS.map((s) => (
            <span className="tag-pill" key={s}>{s}</span>
          ))}
        </div>
      </Reveal>
    </>
  )
}
