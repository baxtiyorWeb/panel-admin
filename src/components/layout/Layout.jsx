import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import SideBar from "../sidebar/SideBar"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden fl">
            <Header />
            <SideBar />
            <div className="grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout