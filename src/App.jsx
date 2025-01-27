import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import PagesLayout from "./pages/PagesLayout"
import Offers from "./pages/Offers"
import TodaysDeals from "./pages/TodaysDeals"
import OrderTracking from "./pages/OrderTracking"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/todays-deals" element={<TodaysDeals />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
