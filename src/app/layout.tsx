import "./global.css"
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'

const display = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-display' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  metadataBase: new URL('https://abhay-portfolio-07.vercel.app'),
  title: 'Abhay Jaiswal | Back End Developer',
  description: 'Backend, cloud and DevOps projects: multi-tenant APIs, AWS deployments and ML-integrated web apps.',
  openGraph: {
    title: 'Abhay Jaiswal | Back End Developer',
    description: 'Backend, cloud and DevOps projects.',
    url: 'https://abhay-portfolio-07.vercel.app',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-[#F5F1E8] font-[family-name:var(--font-sans)] antialiased">{children}</body>
    </html>
  )
}
