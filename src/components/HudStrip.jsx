import useHudClock from '../hooks/useHudClock'

export default function HudStrip() {
  const time = useHudClock()
  return (
    <div className="hud-strip">
      <div className="wrap">
        <span><span className="status-dot">●</span> STATUS: OPERATIONAL</span>
        <span>{time}</span>
        <span>SECTOR: OFFENSIVE SECURITY // CANADA</span>
      </div>
    </div>
  )
}
