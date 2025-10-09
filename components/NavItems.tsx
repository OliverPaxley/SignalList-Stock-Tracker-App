'use client'
import { navItem } from "@/lib/constant"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItem = () => {
  const pathname = usePathname() 

  const isActive = (path: string) => {
    if (pathname === '/') return pathname === path;
    
    return pathname?.startsWith(path);
  }

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {navItem.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className={`hover:text-yellow-500 transition-colors ${isActive(href) ? 'text-gray-100' : ''
          }`}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavItem