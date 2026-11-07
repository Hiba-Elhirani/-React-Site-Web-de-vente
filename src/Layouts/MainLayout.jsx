import NavBar from "../Componnents/NavBar.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet />
        </>
    )
}

export default MainLayout