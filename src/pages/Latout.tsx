import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Fragment } from "react/jsx-runtime"

const RoutLatout = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container py-8 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  )
}

export default RoutLatout
