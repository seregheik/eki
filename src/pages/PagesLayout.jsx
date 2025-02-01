import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const PagesLayout = () => {
    return (
        <div style={{ minHeight: "100vh" }} className="flex flex-col justify-between">
            <Navbar />
            <section style={{ minHeight: "50vh" }} className="justify-center flex items-center h-full w-full">
                <Outlet />
            </section>

            <Footer />
        </div>
    )
}

export default PagesLayout