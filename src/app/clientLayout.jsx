'use client'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const isAuthRoute = pathname === '/auth' // Check if current route is /auth

  return (
    
      <div className="min-h-screen flex flex-col">
        {!isAuthRoute && <Header />}
        <main className="flex-grow">{children}</main>
        {!isAuthRoute && <Footer />}
      </div>
 
  )
}