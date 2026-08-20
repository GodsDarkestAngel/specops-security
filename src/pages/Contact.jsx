import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <div className="page-header contour-bg">
        <div className="wrap">
          <span className="eyebrow">Comms</span>
          <h1>Contact</h1>
          <p className="lede">Open a channel directly — every inquiry goes straight to SpecOps, no intermediaries.</p>
        </div>
      </div>

      <Reveal as="section" style={{ borderBottom: 'none' }}>
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Direct Line</span>
            <h2>Email</h2>
            <p>The fastest way to reach SpecOps Security. Include a short description of your organization and what you're looking to have tested — scope, timeline, and a proposal will follow.</p>
            <a className="btn" href="mailto:ops@yourdomain.com">ops@yourdomain.com</a>
          </div>
          <div className="dossier">
            <span className="dossier-stamp">Note</span>
            <span className="mono">Response Time</span>
            <h3>What to expect</h3>
            <ul className="plain">
              <li>Replies typically within 1–2 business days</li>
              <li>Based in Canada — remote and on-site engagements available</li>
              <li>All inquiries handled directly, no account managers</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </>
  )
}
