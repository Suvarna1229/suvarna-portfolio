import { Award } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { certifications } from '@/lib/portfolio-data'

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="// certifications"
          title="Certifications & programs"
          description="Courses, certifications and programs I've completed along the way."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal
              as="article"
              key={cert.title}
              delay={(i % 3) * 80}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Award className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold leading-snug text-foreground text-balance">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
                {cert.focus ? (
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80">
                    {cert.focus}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
