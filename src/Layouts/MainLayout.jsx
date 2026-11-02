import NavBar from "../Componnents/NavBar.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default MainLayout