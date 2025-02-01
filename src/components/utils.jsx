import PropTypes from "prop-types"
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { caretIcon } from "../../data";
import { motion } from "motion/react";
export const Card = ({ image, heading, paragraph, imageDescription = image }) => {
    return (
        <div className="flex flex-wrap px-8 py-6 justify-center text-center">
            <img className="object-cover w-3xs" src={image} alt={imageDescription} />
            <h4 className="w-full pt-9 font-bold">{heading}</h4>
            <p className="w-full text-base pt-4">{paragraph}</p>
        </div>
    )
}
export const ServiceCard = ({ image, icon, text }) => {
    return (
        <div style={{ height: 400, width: 250 }} className="grid grid-cols-1 grid-rows-1">
            <img className="object-cover h-full col-start-1 row-start-1 rounded-2xl" src={image} alt={image} />
            <div className="col-start-1 row-start-1 flex flex-col items-center px-5 pb-8 justify-end">
                <div style={{ width: 70, height: 70 }} className="bg-service-green z-20 flex justify-center  p-4 rounded-xl w-fit">
                    <img className="object-cover" width={50} height={50} src={icon} alt={icon} />
                </div>
                <div className="bg-white h-1/3 z-10 -mt-8 rounded-xl px-10 w-full flex flex-wrap justify-center items-center">
                    <h5 className="text-center font-bold text-xl w-full">{text}</h5>
                </div>
            </div>
        </div>
    )
};
export const LargeCard = ({ image, smalltext, maintext, buttontext, buttonlink }) => {
    const [checkDisabled, setcheckDisabled] = useState(false)
    const [buttonText, setButtonText] = useState(buttontext)
    const [mainText, setMainText] = useState(maintext)
    let navigate = useNavigate()
    async function handleClick() {
        navigate(buttonlink)
        setcheckDisabled(!checkDisabled)
        setButtonText("Lemaoooo")
        setMainText(maintext + " or You DIE")
    }
    return (
        <div className="grid grid-cols-3">
            <img className="col-span-full object-cover rounded-md row-span-full" src={image} alt={image} />
            <div className="col-start-1 col-span-full md:col-end-3 flex flex-col justify-between text-white font-manrope p-4 md:p-7 row-start-1">
                <div className="text-xs lg:text-base">{smalltext}</div>
                <div className="font-grace text-3xl md:text-2xl lg:text-5xl">{mainText}</div>
                <button disabled={checkDisabled} className={" text-xs font-bold px-3 py-2 lg:px-6 lg:py-4 w-fit rounded-sm" + " " + (checkDisabled ? "bg-black text-white" : "hover:cursor-pointer bg-white text-black")} onClick={handleClick}>{buttonText}</button>
            </div>
        </div>
    )
}
export const Banner = ({ image, maintext, submaintext, description, linkto, buttontext, boxtext, boxsubtext }) => {
    let navigate = useNavigate()
    async function handleClick() {
        navigate(linkto)
    }
    return (
        <div className="grid grid-cols-1 py-20">
            <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} style={{ maxHeight: 550 }} className="col-span-full col-start-1 row-start-1">
                <img className="object-cover h-full w-full" src={image} alt={image} />
            </motion.div>
            <div className="row-start-1 col-start-1 flex justify-center">
                <div className="grid grid-cols-2" style={{ maxWidth: 1100 }}>
                    <div className="col-span-full px-10 py-4 lg:col-span-1">
                        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} className="bg-primary-orange w-fit -mt-10 md:p-6 p-4 xl:p-12 text-center">
                            <div className="font-bold text-2xl md:text-3xl lg:text-5xl">{boxtext}</div>
                            <div className="font-extralight font-grace text-2xl md:text-3xl lg:text-5xl">{boxsubtext}</div>
                        </motion.div>
                        <motion.h5 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.65 }} className="text-primary-green md:text-4xl font-outfit pt-1 text-3xl lg:text-6xl">{maintext}</motion.h5>
                        <motion.h6 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.80 }} className="font-outfit pb-2 text-3xl md:text-4xl lg:text-6xl  font-light">{submaintext}</motion.h6>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.95 }} className="font-outfit text-sm md:text-base pb-3 w-6/8 md:w-1/2 lg:w-full">{description}</motion.div>
                        <motion.button initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.1 }} className="bg-deep-blue text-sm md:text-base rounded-sm text-white md:py-3 md:px-7 lg:py-4 py-2 md:rounded-lg px-5 lg:px-10" onClick={handleClick}>{buttontext}</motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Brands = ({ brandList }) => {
    return (
        <motion.div variants={{
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: .3
                }
            }
        }} initial="hidden" whileInView="show" className="flex w-full flex-wrap gap-4 justify-evenly items-center">
            {brandList.map((items, index) => {
                return <motion.img variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} width={100} className="object-cover h-fit" src={items} key={items + index} />
            })}
        </motion.div>
    )
}
export const Split = ({ image, heading, description, links }) => {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="bg-ambient flex justify-center content-center p-10 rounded-2xl">
                <img width={400} className="object-contain" src={image} alt={image} />
            </div>
            <div className=" flex flex-wrap content-center">
                <h5 className="font-bold font-manrope text-2xl md:text-4xl py-5">{heading}</h5>
                <p className=" text-base text-gray-600">{description}</p>
                <div className="flex gap-4 py-5 ">
                    {links.map((item, index) => {
                        return (
                            <Link title={`Get on ${item.title}`} to={item.link} key={item + index}><img className="object-contain" src={item.storeImage} alt="" /></Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export const Questions = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false)
    function handleClick(e) {
        e.stopPropagation()
        setShowAnswer(!showAnswer)
        console.log("clicked")
    }
    return (
        <div>
            <div onClick={handleClick} className="py-5 border-t border-gray-300">
                <div className="flex justify-between"><div className="font-bold text-xl"><span className="pr-3 ">Q.</span>{question}</div> <div><img className={showAnswer ? "transition rotate-180 duration-300 ease-in-out" : "transition rotate-0 duration-300 ease-in-out"} src={caretIcon} alt={caretIcon} /></div></div>
                {showAnswer && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} exit={{ opacity: 0 }} className="py-3">{answer}</motion.div>}
            </div>
        </div>
    )
}
Card.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    paragraph: PropTypes.string,
    imageDescription: PropTypes.string
}
ServiceCard.propTypes = {
    image: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string
}
LargeCard.propTypes = {
    image: PropTypes.string,
    smalltext: PropTypes.string,
    maintext: PropTypes.string,
    buttontext: PropTypes.string,
    buttonlink: PropTypes.string,
}
Banner.propTypes = {
    image: PropTypes.string,
    maintext: PropTypes.string,
    submaintext: PropTypes.string,
    description: PropTypes.string,
    linkto: PropTypes.string,
    buttontext: PropTypes.string,
    boxtext: PropTypes.string,
    boxsubtext: PropTypes.string
}
Brands.propTypes = {
    brandList: PropTypes.array
}
Split.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    links: PropTypes.array
}
Questions.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
}