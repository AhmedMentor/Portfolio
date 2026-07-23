const POINTS = [
  'Learn the stack in public — React, Node, Express, MongoDB.',
  'Ship small, complete projects instead of tutorials left half-finished.',
  'Lead student communities that get other people building too.',
]

function HowIBuild() {
  return (
    <section id="about" className="border-y border-line bg-card/50 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-orange">
          Student Developer
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
          How I build
        </h2>

        <ul className="mx-auto mt-10 max-w-xl space-y-5 text-left">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange" />
              <span className="text-lg leading-relaxed text-ink/90">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HowIBuild
