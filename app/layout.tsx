import './globals.css'
import Footer from './src/components/layout/Footer'
import Header from './src/components/layout/Header'
import {EMSContextProvider} from './src/context/EMSContext'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-gray-100 text-slate-900  antialiased">
      <body className="flex min-h-screen flex-col bg-slate-50 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
