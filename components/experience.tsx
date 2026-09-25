import { Briefcase, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="// experience"
          title="Where I've interned"
          description="Virtual internships that gave me hands-on exposure to cloud and web development."
        />

        <div className="mt-14 space-y-6">
          {experience.map((role, i) => (
            <Reveal
              as="article"
              key={role.title}
              delay={i * 110}
              className="group rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Briefcase className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {role.company}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground">
                  {role.period}
                </span>
              </div>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
