import {useState} from 'react'
import {NavLink} from "react-router-dom";

const Usertab = () => {
	
	return (
		<div className={
			"flex flex-col justify-around w-[8%] h-[18vh] shadow-lg  absolute top-[70px] right-12 rounded-b-2xl p-1 indent-3 bg-[#fff] z-[99999] cursor-auto"
		}>
			<NavLink to={"/profile"} className={"p-1 rounded-5   block hover:bg-amber-50 rounded-[5px] "}>Profile</NavLink>
			<NavLink to={"/settings/currency"} className={"p-1 rounded-5   block hover:bg-amber-50 rounded-[5px] "}>Profile</NavLink>
		</div>
	)
}
export default Usertab
