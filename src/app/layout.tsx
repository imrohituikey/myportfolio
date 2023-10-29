import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import {webName,webDescri} from '../../Constants';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: webName,
  description: webDescri,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <body className={sora.className}>{children}</body>
    </html>
  )
}
