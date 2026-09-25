import { Brain, Code2, Cloud, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { aboutParagraphs } from '@/lib/portfolio-data'

const highlights = [
  { icon: Code2, label: 'Software & DSA', detail: 'Java, Python, C' },
  { icon: Brain, label: 'AI / ML', detail: 'GenAI, RAG, LLMs' },
  { icon: Cloud, label: 'Cloud', detail: 'Google Cloud' },
  { icon: Sparkles, label: 'Web Dev', detail: 'HTML, CSS, JS' },
]

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="// about me"
          title="A little about who I am"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-5">
            {aboutParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4 self-start">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="group rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <p className="mt-4 font-display font-semibold text-foreground">
                  {label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
