import { NavLink } from "react-router-dom"
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const links = [
    { to: "/", label: "Accueil" },
    { to: "/produits", label: "Produits" },     
    { to: "/contact", label: "Contact" },
]
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div>
                    <h1 className="logo">Tech<span className="logoSpan">Shop</span></h1>
                    <p>Your trusted destination for the latest<br/> technology and innovation.</p>
                </div>
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
                <div className="contact-info">
                    <div className="contact-item">
                        <MdEmail size={22} />
                        <span>contact@TechShop.com</span>
                    </div>
                    <div className="contact-item">
                        <FaPhone size={20} />
                        <span>+212 6 00 00 00 00</span>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt size={20} />
                        <span>Casablanca, Maroc</span>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2026 - All right are reserved</p>
            </div>
        </footer>
    )
}

export default Footer