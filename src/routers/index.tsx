import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import RoutLatout from "../pages/Latout"
import About from "../pages/About"
import FindChalet from "../pages/FindChalet"
import HomePage from "../pages"
import NotFound from "../pages/NotFound"
import Contact from './../pages/Contact';

const router = createBrowserRouter((createRoutesFromElements(
    <>
        <Route path="/" element={<RoutLatout />}>
            <Route index element={<HomePage />}/>
            <Route path="about-joora" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="find-chalet" element={<FindChalet />}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </>
)))



export default router