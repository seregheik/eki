import { companyName } from "../../data"

const About = () => {
    document.title = `${companyName} - About`
    return (

        <div style={{ minHeight: "50vh", minWidth: "100vw" }} className="bg-slate-800 flex justify-center items-center text-2xl lg:text-5xl text-white">About</div>

    )
}

export default About