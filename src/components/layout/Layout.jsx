import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import { useState } from "react";
import { BiCog } from "react-icons/bi";
// import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ open, setOpen }) => {
  const [sideOpen, setSideOpen] = useState(null);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden fl">
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} />
      <div className="grow">
        <div
          style={{
            width: "40px",
            height: "40px",
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            background: "#6777EF",
            position: "fixed",
            right: !sideOpen ? "0" : "285px",
            top: "50%",
            cursor: "pointer",
            transition: "0.3s ease-in-out",
            zIndex: "10000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            color: "#fff",
          }}
          onClick={() => setSideOpen(!sideOpen)}
        >
          <BiCog className="animation-icon" />
        </div>
        <div
          style={{
            width: "15%",
            height: "100vh",
            background: "#FFFFFF",
            boxShadow: "1px 10px 5px 3px gray",
            position: "fixed",
            right: !sideOpen ? "-300px" : "0",
            transition: "0.3s ease-in-out",
            zIndex: "10",
          }}
        ></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
