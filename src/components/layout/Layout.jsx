import {Outlet} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import {useState} from "react";
import {BiCog} from "react-icons/bi";
import {FiSun} from "react-icons/fi";
import {FaMoon} from "react-icons/fa";
import UseTheme from "../context/ThemeToggle.jsx";


// eslint-disable-next-line react/prop-types
const Layout = () => {
	const [colors, setColor] = useState("");
	const [dark, setDark] = useState("");
	
	
	return (
		<div className="flex flex-col min-h-screen overflow-hidden dark:bg-[#3B4452] bg-[#E5E5E5]">
			<Header
				colors={colors}
				setColor={setColor}
			
			/>
			<SideBar dark={dark} colors={colors}/>
			<div className="grow">
				{/*<div*/}
				{/*	style={{*/}
				{/*		width: "40px",*/}
				{/*		height: "40px",*/}
				{/*		borderTopLeftRadius: "30px",*/}
				{/*		borderBottomLeftRadius: "30px",*/}
				{/*		background: "#6777EF",*/}
				{/*		position: "fixed",*/}
				{/*		right: !sideOpen ? "0" : "288px",*/}
				{/*		top: "50%",*/}
				{/*		cursor: "pointer",*/}
				{/*		transition: "0.3s ease-in-out",*/}
				{/*		zIndex: "10000",*/}
				{/*		display: "flex",*/}
				{/*		justifyContent: "center",*/}
				{/*		alignItems: "center",*/}
				{/*		fontSize: "20px",*/}
				{/*		color: "#fff",*/}
				{/*	}}*/}
				{/*	onClick={() => setSideOpen(!sideOpen)}*/}
				{/*	*/}
				{/*>*/}
				{/*	<BiCog className="animation-icon"/>*/}
				{/*</div>*/}
				{/*<div*/}
				{/*	style={{*/}
				{/*		*/}
				{/*		// boxShadow: "1px 10px 5px 3px gray",*/}
				{/*		position: "fixed",*/}
				{/*		right: !sideOpen ? "-300px" : "0",*/}
				{/*		transition: "0.3s ease-in-out",*/}
				{/*		zIndex: "10",*/}
				{/*		padding: "10px",*/}
				{/*	}}*/}
				{/*	className={'w-[15%] h-[100vh] bg-white  fixed  dark:bg-[#353C48]'}*/}
				{/*	*/}
				{/*>*/}
				{/*	<div*/}
				{/*		style={{*/}
				{/*			marginTop: "30px",*/}
				{/*			marginBottom: "-10px",*/}
				{/*			fontSize: "20px",*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		Select Layout*/}
				{/*	</div>*/}
				{/*	<div*/}
				{/*		style={{*/}
				{/*			display: "flex",*/}
				{/*			justifyContent: "flex-start",*/}
				{/*			alignItems: "center",*/}
				{/*			marginTop: "30px",*/}
				{/*			marginRight: "50px",*/}
				{/*			paddingBottom: "30px",*/}
				{/*			borderBottom: "1px solid #DEE2E6",*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		*/}
				{/*	</div>*/}
				{/*	<div*/}
				{/*		style={{*/}
				{/*			marginTop: "30px",*/}
				{/*			marginBottom: "-10px",*/}
				{/*			fontSize: "20px",*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		sidebar theme*/}
				{/*	</div>*/}
				{/*	<div*/}
				{/*		style={{*/}
				{/*			display: "flex",*/}
				{/*			justifyContent: "flex-start",*/}
				{/*			alignItems: "center",*/}
				{/*			marginTop: "30px",*/}
				{/*			marginRight: "50px",*/}
				{/*			paddingBottom: "30px",*/}
				{/*			borderBottom: "1px solid #DEE2E6",*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		<div className="light-dark" onClick={() => setDark("")}>*/}
				{/*			<FiSun/>*/}
				{/*		</div>*/}
				{/*		<div className="light-dark" onClick={() => setDark("#353C48")}>*/}
				{/*			<FaMoon/>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*	<div*/}
				{/*		style={{*/}
				{/*			marginTop: "30px",*/}
				{/*			marginBottom: "10px",*/}
				{/*			fontSize: "20px",*/}
				{/*		}}*/}
				{/*	>*/}
				{/*		color theme*/}
				{/*	</div>*/}
				{/*	<div className="colors">*/}
				{/*		<div className="circle" onClick={() => setColor("")}></div>*/}
				{/*		<div className="circle" onClick={() => setColor("#3DC7BE")}></div>*/}
				{/*		<div className="circle" onClick={() => setColor("black")}></div>*/}
				{/*		<div className="circle" onClick={() => setColor("#0000FF")}></div>*/}
				{/*		<div*/}
				{/*			className="circle"*/}
				{/*			onClick={() => setColor("darkorange")}*/}
				{/*		></div>*/}
				{/*		<div className="circle" onClick={() => setColor("green")}></div>*/}
				{/*		<div className="circle" onClick={() => setColor("#EA5455")}></div>*/}
				{/*	</div>*/}
				{/*</div>*/}
				<Outlet/>
			</div>
			<Footer/>
		</div>
	);
};

export default Layout;
