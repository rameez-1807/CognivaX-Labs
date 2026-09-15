import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CognivaX Labs | AI • Technology • Consulting',
  description: 'CognivaX Labs builds intelligent systems, AI agents, automation and digital engineering solutions for modern enterprises.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
