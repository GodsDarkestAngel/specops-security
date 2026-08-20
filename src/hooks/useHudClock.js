import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZoneName: 'short',
})

function formatEasternTime(date) {
  const parts = formatter.formatToParts(date)
  const lookup = Object.fromEntries(parts.map((p) => [p.type, p.value]))
  // "24" from hour12:false midnight edge case -> normalize to "00"
  const hh = lookup.hour === '24' ? '00' : lookup.hour
  return `${hh}:${lookup.minute}:${lookup.second} ${lookup.timeZoneName}`
}

export default function useHudClock() {
  const [time, setTime] = useState('--:--:-- ET')

  useEffect(() => {
    function tick() {
      setTime(formatEasternTime(new Date()))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
