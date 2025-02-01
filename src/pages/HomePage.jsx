import Hero from "../components/Hero"
import { cards, orderCard, services, homeBanner, sponsors, homeSplit, questionsAndAnswers } from "../../data"
import { Card, ServiceCard, LargeCard, Banner, Brands, Split, Questions } from "../components/utils"
import { Link } from "react-router"
import { motion } from "framer-motion"
const HomePage = () => {
    const gridVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .5
            },
        },
    }
    const itemVariant = {
        hidden: { opacity: 0 }, show: { opacity: 1 }
    }
    return (
        <div>
            <title>Home - Eki</title>
            <Hero />
            <section className="flex justify-center">
                <div style={{ maxWidth: 1100 }} className="px-8 lg:px-0">
                    <div className="flex justify-center py-20">
                        <motion.div variants={gridVariant} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-3">
                            {cards.map((item, index) => {
                                return (
                                    <motion.div variants={itemVariant} key={item + index} >
                                        <Card image={item.image} heading={item.title} paragraph={item.description} imageDescription={item.image} />
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                    <motion.div variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: .4
                            },
                        },
                    }} initial="hidden" whileInView="show" className="grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-4 grid pt-32 pb-5 gap-10">
                        {services.cards.map((item, index) => {
                            return (
                                <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} key={item + index}>
                                    <ServiceCard image={item.image} icon={item.icon} text={item.title} />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                    <div className="grid grid-cols-1 pb-10 pt-5 md:grid-cols-2 gap-3">
                        {orderCard.map((item, index) => {
                            return (
                                <LargeCard
                                    key={item + index}
                                    image={item.image}
                                    smalltext={item.minitext}
                                    maintext={item.mainText}
                                    buttontext={item.buttonText}
                                    buttonlink={item.link} />
                            )
                        })}
                    </div>
                </div>
            </section>
            <div>
                <Banner
                    image={homeBanner.image}
                    maintext={homeBanner.maintext}
                    submaintext={homeBanner.subMaintext}
                    description={homeBanner.description}
                    linkto={homeBanner.linkto}
                    buttontext={homeBanner.buttonText}
                    boxtext={homeBanner.boxmaintext}
                    boxsubtext={homeBanner.boxsubtext} />
            </div>
            <div className="flex justify-center">
                <div className="w-full" style={{ maxWidth: 1280 }}> <Brands brandList={sponsors} /></div>
            </div>
            <section className="flex py-20 px-5 justify-center">
                <div style={{ maxWidth: 1200 }} className="flex justify-center">
                    <Split image={homeSplit.image} heading={homeSplit.heading} description={homeSplit.description} links={homeSplit.store} />
                </div>
            </section>
            <section className="flex py-10 justify-center flex-wrap">
                <div style={{ maxWidth: 1200 }} className="w-full px-4">
                    {questionsAndAnswers.questionsandanswers.map((items, index) => {
                        return <Questions key={items + index} question={items.question} answer={items.answer} />
                    })}
                    <div className="py-10">
                        <div className="bg-ambient flex flex-wrap p-8 justify-between content-center items-center">
                            <div className="py-2">
                                <h5 className="text-2xl font-bold">{questionsAndAnswers.main}</h5>
                                <p>{questionsAndAnswers.description}</p>
                            </div>
                            <Link to={questionsAndAnswers.link}>
                                <div className="bg-primary-blue text-white p-5 rounded-md">
                                    {questionsAndAnswers.buttonText}
                                </div></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HomePage