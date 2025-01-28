import Hero from "../components/Hero"
import { cards, orderCard, services } from "../../data"
import { Card, ServiceCard, LargeCard } from "../components/utils"

const HomePage = () => {
    return (
        <div>
            <title>Home - Eki</title>
            <Hero />
            <section className="flex justify-center">
                <div style={{ maxWidth: 1100 }} className="px-8 lg:px-0">
                    <div className="flex justify-center py-20">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {cards.map((item, index) => {
                                return (
                                    <Card key={item + index} image={item.image} heading={item.title} paragraph={item.description} imageDescription={item.image} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-4 grid pt-32 pb-5 gap-10">
                        {services.cards.map((item, index) => {
                            return (
                                <ServiceCard key={item + index} image={item.image} icon={item.icon} text={item.title} />
                            )
                        })}
                    </div>
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


        </div>
    )
}

export default HomePage