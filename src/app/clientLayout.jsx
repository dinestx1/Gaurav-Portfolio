'use client'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPapers } from '@/store/slices/authSlice'
export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getPapers())
   },[dispatch])


  return (
    
      <div className="min-h-screen flex flex-col">
        { <Header />}
        <main className="flex-grow">{children}</main>
        {<Footer />}
      </div>
 
  )
}