import './globals.css'
import StoreProvider from '../store/provider'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
