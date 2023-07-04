import './globals.css'
import {ReactNode} from 'react'
import { Mulish } from 'next/font/google'
 

const mulish = Mulish ({ subsets: ['latin'], variable:'--font-mulish' })

export const metadata = {
  title: 'Zion',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} font-sans bg-black-500 text-white-500 px-[1.5rem]  md:px-[100px]`}>{children}</body>
    </html>
  )
}
