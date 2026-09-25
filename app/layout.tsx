import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suvarna Kukkala | Aspiring Software Engineer',
  description:
    'Portfolio of Suvarna Kukkala, a final-year Computer Science and Engineering student interested in software engineering, Java, Python, DSA, web development, AI and machine learning.',
  generator: 'v0.app',
  keywords: [
    'Suvarna Kukkala',
    'Software Engineer',
    'Computer Science',
    'Java',
    'Python',
    'DSA',
    'Web Development',
    'Machine Learning',
    'Portfolio',
  ],
  authors: [{ name: 'Suvarna Kukkala' }],
  openGraph: {
    title: 'Suvarna Kukkala | Aspiring Software Engineer',
    description:
      'Portfolio of Suvarna Kukkala, a final-year Computer Science and Engineering student interested in software engineering, Java, Python, DSA, web development, AI and machine learning.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0d17',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
