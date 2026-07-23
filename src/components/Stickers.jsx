/**
 * Stickers
 * A handful of simple, hand-built SVG doodles (not traced from any
 * source) that float around the hero and CTA sections — the page's
 * nod to the reference site's scattered icon motif.
 */

function Float({ children, className = '', delay = '0s', rotate = '0deg' }) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{ '--rot': rotate, animationDelay: delay }}
    >
      {children}
    </div>
  )
}

export function StarSticker(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M20 2 L23.5 16.5 L38 20 L23.5 23.5 L20 38 L16.5 23.5 L2 20 L16.5 16.5 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SpiralSticker(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M20 6a14 14 0 1 1-9.9 4.1M20 12a8 8 0 1 1-5.66 2.34M20 18a2 2 0 1 1-1.41.59"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SmileySticker(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="14" cy="17" r="2.2" fill="currentColor" />
      <circle cx="26" cy="17" r="2.2" fill="currentColor" />
      <path
        d="M12 25c2.5 3.2 5.6 4.8 8 4.8s5.5-1.6 8-4.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function FlowerSticker(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="20"
          cy="11"
          rx="5"
          ry="8"
          fill="currentColor"
          opacity="0.9"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="4" fill="currentColor" />
    </svg>
  )
}

export function LoopArrowsSticker(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M6 24c0-8 6-14 14-14s14 6 14 14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M28 6 34 10 28 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path
        d="M34 16c0 8-6 14-14 14S6 24 6 16"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M12 34 6 30 12 26" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default Float
