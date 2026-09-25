import { GraduationCap, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/portfolio-data'

export function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="// education"
          title="My academic journey"
        />

        <ol className="relative mt-14 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-white/15 before:to-transparent sm:before:left-[23px]">
          {education.map((item, i) => (
            <Reveal as="li" key={item.institution} delay={i * 100}>
              <div className="relative flex gap-5 sm:gap-6">
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-lg shadow-primary/10 sm:size-12">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </div>
                <div className="flex-1 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {item.degree}
                      </h3>
                      {item.field ? (
                        <p className="mt-1 text-sm font-medium text-primary">
                          {item.field}
                        </p>
                      ) : null}
                    </div>
                    {item.status ? (
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                        {item.status}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/80">
                      {item.institution}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
