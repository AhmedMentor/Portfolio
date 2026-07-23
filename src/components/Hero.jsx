import Float, {
  StarSticker,
  SpiralSticker,
  SmileySticker,
  FlowerSticker,
  LoopArrowsSticker,
} from './Stickers.jsx'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-20 sm:pt-28">
      {/* Scattered floating stickers — hidden on small screens to avoid clutter */}
      <Float delay="0s" rotate="-8deg" className="absolute left-[6%] top-[18%] hidden text-orange lg:block">
        <StarSticker className="h-9 w-9" />
      </Float>
      <Float delay="1.1s" rotate="6deg" className="absolute right-[10%] top-[10%] hidden text-sky lg:block">
        <SpiralSticker className="h-10 w-10" />
      </Float>
      <Float delay="0.6s" rotate="0deg" className="absolute left-[14%] top-[62%] hidden text-ink lg:block">
        <SmileySticker className="h-9 w-9" />
      </Float>
      <Float delay="1.6s" rotate="10deg" className="absolute right-[6%] top-[55%] hidden text-moss lg:block">
        <FlowerSticker className="h-9 w-9" />
      </Float>
      <Float delay="0.3s" rotate="-4deg" className="absolute right-[22%] top-[80%] hidden text-orange lg:block">
        <LoopArrowsSticker className="h-8 w-8" />
      </Float>

      <div className="mx-auto max-w-3xl text-center">
        <span className="mx-auto inline-block -rotate-1 rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted">
          One Profile. One Link.
        </span>

        <h1 className="mx-auto mt-6 max-w-2xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Everything I build, <span className="text-orange">in one place.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          BS IT student at IIUI, building full-stack projects with the MERN
          stack and leading student tech communities on the side. Projects,
          stack, and contact — one link, no scattered profiles.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-card"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
          </span>
          Open to internships · Islamabad / Rawalpindi
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-sm animate-rise [animation-delay:150ms]">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-card">
          <img
            src="/images/ahmed.jpg"
            alt="Ahmed Asif"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
