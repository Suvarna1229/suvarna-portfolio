import { Trophy } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { achievements } from '@/lib/portfolio-data'

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="// achievements"
          title="Hackathons & participation"
          description="Events and competitions I've taken part in to sharpen my problem-solving skills."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {achievements.hackathons.map((item, i) => (
            <Reveal
              as="article"
              key={item}
              delay={i * 100}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 text-center backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-16 mx-auto size-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="relative mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-primary/20 text-amber-300">
                <Trophy className="size-6" aria-hidden="true" />
              </div>
              <h3 className="relative mt-4 font-display text-base font-semibold text-foreground text-balance">
                {item}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
