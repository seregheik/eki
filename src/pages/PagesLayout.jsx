import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const PagesLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default PagesLayout