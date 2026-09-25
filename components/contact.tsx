import { Mail, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { personal } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'

const channels = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'suvarna-kukkala',
    href: personal.socials.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'Suvarna1229',
    href: personal.socials.github,
    Icon: GithubIcon,
  },
  {
    label: 'LeetCode',
    value: '238r1a05f9',
    href: personal.socials.leetcode,
    Icon: LeetcodeIcon,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="// contact"
          title="Let's connect"
          description="I'm open to software engineering opportunities and always happy to connect. Reach out through any of the channels below."
        />

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-8 backdrop-blur sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
              {channels.map(({ label, value, href, Icon }) => {
                const external = !href.startsWith('mailto:')
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium text-foreground">
                        {value}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                )
              })}
            </div>

            <div className="relative mt-8 text-center">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <Mail className="size-4" aria-hidden="true" />
                Send me an email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
