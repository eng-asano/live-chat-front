import { Viewport } from 'next'
import './globals.css'

interface Props {
  children: React.ReactNode
}

export const viewport: Viewport = {
  maximumScale: 1,
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <div className="h-dvh bg-primary-gradation">{children}</div>
      </body>
    </html>
  )
}
