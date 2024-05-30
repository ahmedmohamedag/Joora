import { Link, NavLink } from "react-router-dom"
import { navlinks } from "../data"
import { Bell, Menu, Search, X } from "lucide-react"
import { useState } from "react"
import NavbarOverLay from './navbarOverLay';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openNavberHandler = () => {
    setIsOpen(true)
  }
  const closeNavberHandler = () => {
    setIsOpen(false)
  }
  return (
    <header className="bg-bg">
      <nav className="container flex items-center justify-between py-5 mx-auto">
        <Link to="/" className="flex items-center justify-center gap-3">
          <img src="logo.png" alt="Joora Logo" loading="lazy" />
          <h2 className="text-3xl text-main">جورا</h2>
          <span className="text-xl text-accessary">جايد</span>
        </Link>
        <ul className="hidden lg:gap-8 md:flex md:gap-6">
          {
            navlinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className="text-xl lg:text-2xl" >{link.title}</NavLink>
              </li>
            ))
          }
        </ul>
        <div className="items-center hidden gap-4 md:flex">
          <Search />
          <Bell />
          <img src="Ellipse.png" alt="Ellipse image" loading="lazy" />

        </div>

        <div className="flex px-4 md:hidden cursor-pointer">

          {
            !isOpen ?
              (
                <Menu size={40} onClick={openNavberHandler} />
              ) :
              (
                <>
                  <X size={40} onClick={closeNavberHandler} />
                  <NavbarOverLay/>
                </>
              )
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
