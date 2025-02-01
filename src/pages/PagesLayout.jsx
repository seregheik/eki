import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const PagesLayout = () => {
    return (
        <div style={{ minHeight: "100vh" }} className="flex flex-col justify-between">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PagesLayout