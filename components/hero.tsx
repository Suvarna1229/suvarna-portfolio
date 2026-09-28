import Image from 'next/image'
import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { personal } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'

const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${personal.email}`,
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: personal.socials.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    href: personal.socials.github,
    Icon: GithubIcon,
  },
  {
    label: 'LeetCode',
    href: personal.socials.leetcode,
    Icon: LeetcodeIcon,
  },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-[28rem] animate-float-slow rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 size-[26rem] animate-float-slower rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 size-[22rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1 className="font-display text-5xl font-bold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            {personal.name}
          </h1>

          <p className="mt-4 font-display text-2xl font-semibold sm:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-primary via-violet-400 to-accent bg-clip-text text-transparent">
              {personal.role}
            </span>
          </p>

          <p className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl">
            {personal.tagline}
          </p>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            {personal.intro}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
            >
              View My Projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              <FileText className="size-4" aria-hidden="true" />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="group inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/40 via-violet-500/20 to-accent/40 blur-2xl"
            />
            <div className="relative rounded-full bg-gradient-to-tr from-primary via-violet-500 to-accent p-[3px] shadow-2xl shadow-primary/20">
              <div className="rounded-full bg-background p-2">
                <div className="relative size-60 overflow-hidden rounded-full sm:size-72 lg:size-96">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Suvarna Kukkala"
                    fill
                    priority
                    sizes="(max-width: 640px) 15rem, (max-width: 1024px) 18rem, 24rem"
                    className="object-cover object-[50%_42%] scale-[1.9] origin-[50%_42%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
