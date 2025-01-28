import Hero from "../components/Hero"
import { cards, services } from "../../data"
import { Card, ServiceCard } from "../components/utils"

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
                    <div className="grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-4 grid py-32 gap-10">
                        {services.cards.map((item, index) => {
                            return (
                                <ServiceCard key={item + index} image={item.image} icon={item.icon} text={item.title} />
                            )
                        })}
                    </div>
                </div>

            </section>


        </div>
    )
}

export default HomePage