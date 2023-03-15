import './globals.css'

export const metadata = {
  title: 'Fancam Station',
  description: 'Increase your productivity with pretty K-pop idols. Beautiful voice + beautiful fancams.',
}

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
