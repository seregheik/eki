import { companyName } from "../../data"

const Error404 = () => {
    document.title = `${companyName} - Error404`
    return (

        <div style={{ minHeight: "50vh", minWidth: "100vw" }} className="bg-slate-800 flex justify-center items-center text-2xl lg:text-5xl text-white">{"I don't think I exist"}</div>

    )
}

export default Error404