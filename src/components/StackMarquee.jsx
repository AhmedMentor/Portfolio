const STACK = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'JWT Auth',
  'Git & GitHub',
  'Python',
]

function StackMarquee() {
  const row = [...STACK, ...STACK]

  return (
    <section id="stack" className="overflow-hidden py-14">
      <div className="mx-auto mb-8 max-w-3xl px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-orange">Currently using</span>
        <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">On the bench right now</h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />

        <div className="flex w-max animate-marquee gap-4">
          {row.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-line bg-card px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StackMarquee
