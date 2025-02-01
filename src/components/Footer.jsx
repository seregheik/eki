import { Link } from "react-router"
import { homeSplit, socials, phone, email } from "../../data"
const Footer = () => {
    return (
        <footer className="bg-primary-blue pt-3 pb-28 flex justify-center">
            <div style={{ maxWidth: 1200 }} className="px-4 grid gap-5 text-white w-full grid-cols-1 md:grid-cols-3">
                <div className="col-span-1 px-3">
                    <h2 className="py-8 text-xl">Download Our App</h2>
                    {homeSplit.store.map((item, index) => {
                        return (
                            <div key={item + index} className="py-1">
                                <Link to={item.link}>
                                    <img src={item.storeImage} alt={item.storeImage} />
                                </Link>
                            </div>

                        )
                    })}
                    <div className="pb-4 pt-8">
                        Follow Us on Social Media:
                    </div>
                    <div className="flex justify-start gap-5">
                        {socials.map((item, index) => {
                            return (
                                <Link title={item.name} to={item.link} key={item + index}><img src={item.icon} alt="" /></Link>
                            )
                        })}
                    </div>
                </div>
                <div className="col-span-1 px-3">
                    <h3 className="py-8 text-xl">Need Help</h3>
                    {phone.map((item, index) => {
                        return (
                            <div key={item + index} className="py-1">
                                <a href={`tel:${item}`}>{item}</a>
                            </div>

                        )
                    })}
                    <div>
                        <a className="hover:underline underline-offset-4" href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer