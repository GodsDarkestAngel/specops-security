// Add a new post by adding an object to this array. `slug` becomes the URL:
// /blog/your-slug. `body` is an array of paragraphs (each becomes a <p>).

const posts = [
  {
    slug: 'osint-101',
    number: '01',
    title: 'OSINT 101: What Your LinkedIn Tells an Attacker',
    lede: "Before an attacker ever sends a phishing email, they've usually already read your org chart.",
    excerpt:
      "A look at how much of an organization's attack surface is sitting in plain sight on public profiles.",
    body: [
      'Open-source intelligence, or OSINT, is the reconnaissance phase most organizations underestimate. It doesn\u2019t require breaching anything. It just requires reading what\u2019s already public.',
      'A LinkedIn page listing "IT Administrator, currently deploying our new VPN" tells an attacker exactly which vendor to spoof in a phishing email. A job posting describing your tech stack in detail hands over a shortlist of software to research for known vulnerabilities. An out-of-office reply naming a colleague becomes the seed of a convincing pretext call.',
      'None of this requires technical skill to collect. It requires patience, and an understanding of how people talk about their work. That\u2019s exactly why OSINT and social engineering assessments benefit from a perspective grounded in human behavior, not just technical tooling.',
      "The fix isn't to disappear from the internet. It's to know what's exposed, decide deliberately what should be public, and train the people most likely to be targeted, usually anyone client-facing, in IT, or in finance, to recognize when a \"routine\" request doesn't add up.",
      'An OSINT assessment maps this exposure before an attacker does, so the gaps get closed on your terms.',
    ],
  },
  {
    slug: 'red-team-vs-scanners',
    number: '02',
    title: 'Why Red Team Assessments Beat Automated Scans',
    lede: "A scanner tells you what's vulnerable. It doesn't tell you what an attacker would actually do with it.",
    excerpt:
      "Automated tools find known issues. They don't chain them together the way an attacker would.",
    body: [
      "Vulnerability scanners are useful: they're fast, cheap, and good at catching known, low-hanging issues. But a scanner report is a list of individual findings, ranked by a generic severity score that has no idea what your environment actually looks like.",
      'A real attacker doesn\u2019t stop at "medium severity." They chain a low-severity information disclosure into a foothold, that foothold into lateral movement, and lateral movement into domain admin. Individually, each step might look minor. Together, they\u2019re a full compromise. And a scanner will never show you that path, because it doesn\u2019t think in chains.',
      'A red team assessment is built around a goal, not a checklist: gain access to a specific system, exfiltrate a specific type of data, reach a specific level of privilege. That framing forces the same creativity and persistence a real adversary would bring, and it tests your detection and response along the way: not just whether a vulnerability exists, but whether anyone would notice it being used.',
      "The output isn't a severity-sorted spreadsheet. It's a narrative: here's how we got in, here's what we could reach, and here's exactly where your defenses did or didn't catch it.",
    ],
  },
]

export default posts
