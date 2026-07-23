const PROJECTS = [
  {
    title: 'MERN Role-Based Auth System',
    description:
      'A full authentication system with JWT-based role access control — the backbone pattern reused across every MERN project since.',
    tags: ['MongoDB', 'Express', 'React', 'JWT'],
    href: 'https://github.com/AhmedMentor',
  },
  {
    title: 'Vite + React Product Catalog',
    description:
      'A product catalog built while working through hooks and component composition — fetches live data and renders it through custom cards.',
    tags: ['React', 'Vite', 'REST API'],
    href: 'https://github.com/AhmedMentor/REACT-PROJECT-1',
  },
  {
    title: 'Cinema Scheduling & Ticketing System',
    description:
      'A group project handling showtimes, seat booking, and ticket records with a PHP backend against a MySQL database.',
    tags: ['PHP', 'MySQL'],
    href: 'https://github.com/AhmedMentor',
  },
  {
    title: 'Employee Portal GUI',
    description:
      'A desktop employee-management interface built with customtkinter, focused on clean forms and fast data entry.',
    tags: ['Python', 'customtkinter'],
    href: 'https://github.com/AhmedMentor',
  },
]

function Work() {
  return (
    <section id="work" className="border-y border-line bg-card/50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-orange">Work</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Recent builds</h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-muted sm:block">
            {PROJECTS.length} shipped
          </span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-line bg-cream p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(28,23,16,0.25)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold leading-snug">{project.title}</h3>
                <span className="mt-1 text-orange opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
