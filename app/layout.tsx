import { ClerkProvider,SignIn } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { SignedIn } from '@clerk/nextjs/app-beta'
import { SignedOut } from '@clerk/nextjs/app-beta/client'
import Navbar from '../components/Navbar'
const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Rental App',
  description: 'A Car Rental Application provides renting car on daily basis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
       <SignedIn>
        <Navbar/>
         {children}
       </SignedIn>
       <SignedOut>
         <SignIn/>
       </SignedOut>
      </body>
    </html>
    </ClerkProvider>
  )
}
