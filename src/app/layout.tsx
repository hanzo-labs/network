import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hanzo Network - AI Infrastructure for the Decentralized Economy',
  description: 'Native Lux L2 built for heterogeneous AI compute. Chain ID: 36963, Token: AI',
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
