const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#community', label: 'Community' },
]

function Nav() {
  return (
    <header className="sticky top-4 z-40 mx-auto max-w-5xl px-4">
      <nav className="flex items-center justify-between gap-4 rounded-full border border-line bg-cream/90 px-5 py-3 shadow-[0_1px_0_rgba(28,23,16,0.04)] backdrop-blur">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
          AHMED<span className="text-orange">.</span>
        </a>

        <ul className="hidden items-center gap-7 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/images/Ahmed_Asif_CV_general%20-3.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-card sm:block"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
          >
            Say hi
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Nav
