import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Fragment } from "react/jsx-runtime"

const RoutLatout = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto mt-32">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  )
}

export default RoutLatout
