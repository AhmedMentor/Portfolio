import Float, { StarSticker, FlowerSticker, LoopArrowsSticker } from './Stickers.jsx'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/AhmedMentor' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ahmed-asif-74694b252' },
]

function Contact() {
  return (
    <>
      <section id="contact" className="relative overflow-hidden border-t border-line px-6 py-24 text-center">
        <Float delay="0.2s" rotate="-6deg" className="absolute left-[10%] top-[20%] hidden text-orange lg:block">
          <StarSticker className="h-8 w-8" />
        </Float>
        <Float delay="1s" rotate="8deg" className="absolute right-[12%] top-[24%] hidden text-moss lg:block">
          <FlowerSticker className="h-9 w-9" />
        </Float>
        <Float delay="0.5s" rotate="0deg" className="absolute right-[20%] bottom-[18%] hidden text-sky lg:block">
          <LoopArrowsSticker className="h-8 w-8" />
        </Float>

        <span className="font-mono text-xs uppercase tracking-widest text-orange">Get in touch</span>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          Open to internships & full-stack roles.
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-muted">
          Islamabad & Rawalpindi — usually reply within a day.
        </p>

        <a
          href="mailto:AhmedAsif6349@gmail.com"
          className="mt-8 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
        >
          AhmedAsif6349@gmail.com
        </a>
      </section>

      <footer className="border-t border-line px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Ahmed Asif</span>
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                {s.label}
              </a>
            ))}
          </div>
          <span>Built with React · Tailwind · Vite</span>
        </div>
      </footer>
    </>
  )
}

export default Contact
