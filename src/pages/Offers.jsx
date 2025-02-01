import { companyName } from "../../data"


const Offers = () => {
    document.title = `${companyName} - Offers`
    return (

        <div style={{ minHeight: "50vh" }} className="bg-slate-800 flex justify-center items-center text-5xl text-white">Offers</div>

    )
}

export default Offers