const ROLES = [
  {
    org: 'MLSC IIUI',
    role: 'Operations Lead',
    body: 'Microsoft Learn Student Community — running the day-to-day so members actually finish what they start.',
  },
  {
    org: 'CS Society Islamabad',
    role: 'Marketing Lead',
    body: 'Getting the word out on events and initiatives across the IIUI CS student body.',
  },
]

function Community() {
  return (
    <section id="community" className="px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-orange">Community</span>
        <h2 className="mx-auto mt-4 max-w-lg font-display text-3xl font-bold leading-tight sm:text-4xl">
          Building community, not just code
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Outside of my own projects, I help run two student tech communities at IIUI.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        {ROLES.map((r) => (
          <div key={r.org} className="rounded-2xl border border-line bg-card p-6 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">{r.role}</span>
            <h3 className="mt-2 font-display text-xl font-bold">{r.org}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Community
