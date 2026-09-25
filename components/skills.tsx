import {
  Code2,
  BadgeCheck,
  Layers,
  Server,
  Database,
  Boxes,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/portfolio-data'

const groupIcons: Record<string, typeof Code2> = {
  Programming: Code2,
  Testing: BadgeCheck,
  Frontend: Layers,
  Backend: Server,
  Database: Database,
  'Tools & Technologies': Boxes,
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title="Technologies" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.title] ?? Code2
            return (
              <Reveal
                as="article"
                key={group.title}
                delay={(i % 3) * 90}
                className="group rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
