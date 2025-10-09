import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"
import UserDropDown from "./UserDropDown"

const Header = () => {
  return (
    <header className="top-0 sticky header">
      <div className="container header-wrapper flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>
        </Link>
        {/* Navigation - now on the same line as logo */}
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        {/* UserDropDown */}  
        <UserDropDown />
      </div>
      
    </header>
  )
}

export default Header