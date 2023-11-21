import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";

// eslint-disable-next-line react/prop-types
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden dark:bg-[#3B4452] bg-[#E5E5E5]">
      <Header />
      <SideBar />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
