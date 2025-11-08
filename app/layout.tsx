import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Squad Busters - دليل المبتدئين',
  description: 'دليل تفاعلي للمبتدئين في لعبة Squad Busters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
