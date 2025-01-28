import { NavLink, Link } from "react-router"
import { icon } from "../../data"
import { NavBarData } from "../../data"
import { email } from "../../data"
const Navbar = () => {
    return (
        <div className="w-full">
            <div className="bg-primary-blue py-5 border-b-2 border-gray-600">
                <div>
                    <img className="px-2 w-32 lg:w-48 object-cover lg:px-7" src={icon} alt={icon} srcSet="" />
                </div>
            </div>
            <div className="bg-primary-blue flex justify-center">
                <div style={{ maxWidth: 1100 }} className="flex flex-wrap w-full justify-between">
                    <div className="px-3 text-white font-light text-xs md:text-base flex flex-wrap">
                        {NavBarData.links.map((items, index) => {
                            return (
                                <NavLink className={({ isActive }) => [
                                    isActive ? "text-white py-4 px-2 md:px-6 bg-cyan-900" : "text-white px-2 md:px-6 py-4"
                                ]} to={items.link} key={items + index}>{items.title}</NavLink>
                            )
                        })}
                    </div>
                    <div className="text-end py-4 text-xs w-full lg:w-fit hidden md:block text-white">
                        Need Help? <Link inputMode="email" className="hover:underline underline-offset-4" to={email}>{email}</Link>
                    </div>
                </div>
                {/* <div className="flex justify-center">
                    <div className="px-3 text-white font-light text-xs md:text-lg flex gap-5 md:gap-10 flex-wrap-reverse  w-full">
                        <NavLink to={"/"} className={({ isActive }) => [
                            isActive ? "text-primary-blue py-4 px-6 bg-white font-bold" : "text-white py-4"
                        ]}>All Categories</NavLink>
                        {NavBarData.links.map((items, index) => {
                            return (
                                <NavLink className={({ isActive }) => [
                                    isActive ? "text-primary-blue py-4 px-6 font-bold bg-white" : "text-white py-4"
                                ]} to={items.link} key={items + index}>{items.title}</NavLink>
                            )
                        })}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar