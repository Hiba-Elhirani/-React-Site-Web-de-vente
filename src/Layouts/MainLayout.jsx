import Footer from "../Componnents/Footer.jsx";
import NavBar from "../Componnents/NavBar.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default MainLayout