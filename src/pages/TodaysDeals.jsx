import { companyName } from "../../data"


const TodaysDeals = () => {
  document.title = `${companyName} - Today's Deals`
  return (

    <div style={{ minHeight: "50vh", minWidth: "100vw" }} className="bg-slate-800 flex justify-center items-center text-2xl lg:text-5xl text-white">Todays Deals</div>

  )
}

export default TodaysDeals