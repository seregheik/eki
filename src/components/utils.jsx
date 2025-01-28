import PropTypes from "prop-types"
import { useNavigate } from "react-router";
import { useState } from "react";
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
        <div style={{ height: 400, width: 250 }} className="grid grid-cols-1 grid-rows-1 ">
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
    let navigate = useNavigate()
    async function handleClick() {
        navigate(buttonlink)
        setcheckDisabled(!checkDisabled)
    }
    return (
        <div className="grid grid-cols-3">
            <img className="col-span-full object-cover rounded-md row-span-full" src={image} alt={image} />
            <div className="col-start-1 col-span-full md:col-end-3 flex flex-col justify-between text-white font-manrope p-4 md:p-7 row-start-1">
                <div className="text-xs lg:text-base">{smalltext}</div>
                <div className="font-grace text-3xl md:text-2xl lg:text-5xl">{maintext}</div>
                <button disabled={checkDisabled} className={" text-xs font-bold px-3 py-2 lg:px-6 lg:py-4 w-fit rounded-sm" + " " + (checkDisabled ? "bg-black text-white" : "hover:cursor-pointer bg-white text-black")} onClick={handleClick}>{buttontext}</button>
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
