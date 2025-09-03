'use client';

import Link from "next/link"
import {PAGES} from "@/config/pages.config"
import { usePathname } from "next/navigation"


export default function Navbar() {
  
  
  const pathname = usePathname()
  console.log(pathname)
  //usePathname хук для проверки путя но лучше использовать библиотеку match лучше для динамическийх путей 
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black">
      
      <Link href="/" className="text-2xl font-bold text-black dark:text-white">
        X
      </Link>

      
      <div className="flex gap-6 text-gray-900 dark:text-gray-100 font-medium">
        <Link href={PAGES.HOME()}>Home</Link>
        <Link href={PAGES.EXPLORE()}>Explore</Link>
        <Link href={PAGES.PROFILE_FAKE()}>Profile</Link>
      </div>
    </nav>
  )
}
