import { BrowserRouter, Route, Routes, HashRouter } from "react-router"
import HomePage from "./pages/HomePage"
import PagesLayout from "./pages/PagesLayout"
import Offers from "./pages/Offers"
import TodaysDeals from "./pages/TodaysDeals"
import OrderTracking from "./pages/OrderTracking"
import ScrollToTop from "./scrollToTop"
import Error404 from "./pages/404"

function App() {

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<PagesLayout />}>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/todays-deals" element={<TodaysDeals />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
