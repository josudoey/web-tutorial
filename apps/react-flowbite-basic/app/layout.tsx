import { ThemeModeScript } from 'flowbite-react'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import './globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Navbar />
        <div className='flex items-start'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
