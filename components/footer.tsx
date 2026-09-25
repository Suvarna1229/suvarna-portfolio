import { personal } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'

const socials = [
  { label: 'LinkedIn', href: personal.socials.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', href: personal.socials.github, Icon: GithubIcon },
  { label: 'LeetCode', href: personal.socials.leetcode, Icon: LeetcodeIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-semibold text-foreground">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Suvarna
            </span>{' '}
            Kukkala
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Aspiring Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground/70">
        &copy; {new Date().getFullYear()} Suvarna Kukkala. Built with Next.js
        &amp; Tailwind CSS.
      </p>
    </footer>
  )
}
