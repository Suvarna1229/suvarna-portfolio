import { Check, CircleAlert, Activity, Cpu } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/portfolio-data'

const projectIcons = [Activity, Cpu]

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="// projects"
          title="Things I've built"
          description="Academic and research projects exploring AI, machine learning and healthcare systems."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = projectIcons[i] ?? Activity
            return (
              <Reveal
                as="article"
                key={project.title}
                delay={(i % 2) * 120}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/60 backdrop-blur transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:bg-card"
              >
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-primary/15 via-violet-500/10 to-accent/15 p-6">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)]"
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-background/70 text-primary backdrop-blur">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-white/15 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-semibold leading-snug text-foreground text-balance">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                      Key Features
                    </p>
                    <ul className="mt-3 space-y-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.accuracy ? (
                    <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-300">
                      {project.accuracy}
                    </div>
                  ) : null}

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                      Tech Stack
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li key={tech}>
                          <span className="inline-flex rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/80">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="flex items-start gap-2 rounded-lg bg-amber-400/5 px-3 py-2.5 text-xs leading-relaxed text-amber-200/80">
                      <CircleAlert
                        className="mt-0.5 size-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{project.disclaimer}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
