import { Award, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  aboutParagraphs,
  certifications,
  education,
} from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title="About" />

        <Reveal className="mx-auto mt-12 max-w-3xl space-y-5 text-center">
          {aboutParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-foreground">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              Education
            </h3>
            <ol className="mt-6 space-y-4">
              {education.map((item) => (
                <li
                  key={item.institution}
                  className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-display text-lg font-semibold text-foreground">
                      {item.degree}
                    </p>
                    <p className="font-mono text-sm text-primary">
                      {item.period}
                    </p>
                  </div>
                  {item.field ? (
                    <p className="mt-1 text-sm font-medium text-foreground/85">
                      {item.field}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-foreground">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award className="size-5" aria-hidden="true" />
              </span>
              Certifications &amp; Learning
            </h3>
            <ul className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
                >
                  <p className="font-display text-base font-semibold text-foreground">
                    {cert.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
