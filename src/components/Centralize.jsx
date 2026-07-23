const FEATURES = [
  {
    n: '1',
    title: ['One clean', 'profile'],
    body: 'Projects, stack, roles, and contact — in one scroll, not five scattered links.',
  },
  {
    n: '2',
    title: ['Always', 'shipping'],
    body: 'New projects get added as I build them, not batched into a stale PDF resume.',
  },
  {
    n: '3',
    title: ['Instant', 'sharing'],
    body: 'One link works in a DM, on a CV, or dropped into a recruiter chat.',
  },
  {
    n: '4',
    title: ['Easy to', 'find'],
    body: 'Indexed on GitHub and searchable — not buried behind a login wall.',
  },
]

function Centralize() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-orange">Centralize</span>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            No more scattered links, drives, and half-finished profiles.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.n} className="rounded-2xl border border-line bg-cream p-6">
              <span className="font-mono text-sm text-muted">{f.n}</span>
              <h3 className="mt-3 font-display text-xl font-bold leading-snug">
                {f.title[0]}
                <br />
                {f.title[1]}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Centralize
