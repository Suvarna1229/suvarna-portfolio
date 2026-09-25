'use client'

import Image from 'next/image'
import { ArrowUpRight, FileText } from 'lucide-react'
import { personal } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'

const socialLinks = [
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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to software engineering opportunities
          </span>

          <p className="mt-6 font-mono text-sm text-primary sm:text-base">
            Hi, I&apos;m Suvarna Kukkala
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary via-violet-400 to-accent bg-clip-text text-transparent">
              Aspiring Software Engineer
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl">
            Final-Year Computer Science &amp; Engineering Student
          </p>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0">
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
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href="#"
              aria-disabled="true"
              title="Resume coming soon"
              onClick={(e) => e.preventDefault()}
              className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-white/20 px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:w-auto"
            >
              <FileText className="size-4" aria-hidden="true" />
              Resume
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                Soon
              </span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
                <div className="relative size-56 overflow-hidden rounded-full sm:size-72 lg:size-80">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Suvarna Kukkala"
                    fill
                    priority
                    sizes="(max-width: 640px) 14rem, 20rem"
                    className="object-cover"
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
