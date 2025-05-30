import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from 'next/font/google'
import ClientLayout from './clientLayout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gourav Aggarwal",
  description: " Innovator & Tech Entrepreneur | Bridging Research with Industry Solutions",
};



const roboto = Roboto({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}