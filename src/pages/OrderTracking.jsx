import { companyName } from "../../data"

const OrderTracking = () => {
  document.title = `${companyName} - Track`
  return (

    <div style={{ minHeight: "50vh", minWidth: "100vw" }} className="bg-slate-800 flex justify-center items-center text-2xl lg:text-5xl text-white">Track Your Orders</div>

  )
}

export default OrderTracking