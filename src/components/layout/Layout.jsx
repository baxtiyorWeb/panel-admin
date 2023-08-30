import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden fl">
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
