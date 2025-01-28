import PropTypes from "prop-types"
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
