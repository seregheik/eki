import { herodata } from "../../data"
const Hero = () => {
    return (
        <section className="bg-gray-400 w-full content-center items-center grid grid-cols-1 justify-center">
            <img style={{ minHeight: 400 }} className="row-start-1 col-start-1 object-cover" src={herodata.image} alt="" />
            <div className="row-start-1 w-full col-start-1 flex justify-center">
                <div style={{ maxWidth: 1200 }} className="grid px-10 w-full grid-cols-1 md:grid-cols-2">
                    <div className="col-span-full lg:col-span-1">
                        <h2 className=" text-4xl md:text-5xl font-semibold">{herodata.mainText}</h2>
                        <div className="md:flex justify-start gap-10 pt-10">
                            {herodata.subText.map((item, index) => {
                                return (<div className="flex gap-3 py-1 items-center" key={item + index}>
                                    <img className="object-cover" width={20} src={item.icon} alt={item.text} />
                                    <span className="font-normal text-xs md:text-base text-gray-500">{item.text}</span>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default Hero