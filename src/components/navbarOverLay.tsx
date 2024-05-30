import { NavLink } from "react-router-dom"
import { navlinks } from "../data"

const NavbarOverLay = () => {
    return (
        <nav className="fixed inset-0 flex items-center justify-center -z-10 md:hidden bg-bg">
            <ul className="flex flex-col text-center gap-7">
                {
                    navlinks.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.path} className="text-xl lg:text-2xl" >{link.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavbarOverLay
