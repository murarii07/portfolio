import "./global.css"
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
