import { NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const links = [
    { to: "/", label: "Accueil" },
    { to: "/produits", label: "Produits" },     
    { to: "/contact", label: "Contact" },
]

const NavBar = () => {
    return (
        <header className="header">
            <h1 className="logo">Mon<span className="logoSpan">Shop</span></h1>
            <nav>
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === "/"}>
                                {link.label}
                        </NavLink>
                    ))}
            </nav>
            <FaShoppingCart className="cart"/>
        </header>
    )
}

export default NavBar