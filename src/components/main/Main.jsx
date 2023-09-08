import {Link} from "react-router-dom";
import {FaBookOpen} from "react-icons/fa";
import {AiOutlineArrowDown} from "react-icons/ai";
import {PiBookOpenLight, PiSuitcaseSimple} from "react-icons/pi";
import {AiOutlinePhone} from "react-icons/ai";
import {AiOutlineArrowUp} from "react-icons/ai";
import "./main_1.css";
import Block from "./Block";
import Chart from "../Chart/Chart";
import {Progress} from "../progress/Progress";
import Container from "../shared/Container";
import {FiArrowDown} from "react-icons/fi";
// eslint-disable-next-line react/prop-types
const Main = ({open}) => {
	return (<Container >
		<div style={{width: "100%"}}>
			<div>
				<div className="top_menu">
					<div className="box">
						<h1>Dashboard</h1>
					</div>
					<div className="box_2">
						<Link to={'/'}>Dashboard</Link>/<Link to={'/'}>Dashboard</Link>/<Link to={'#'}>Home</Link>
					</div>
				</div>
			</div>
			
			<div className="top_chart">
				<div className="blocks flex flex-col items-start justify-between">
					<div className={'flex  h-[80%] w-full justify-between items-center p-3'}>
						<div>
							<h4 className="title">
								Monthly Fee Collection
								<br/>
								32,000 ₨
							</h4>
						</div>
						<div
							className={'w-[40px] h-[40px] bg-gradient-to-b from-[#f48665] to-[#fda23f] flex justify-center items-center text-[18px] text-[#fff] rounded-[30px]'}>
							<FaBookOpen/>
						</div>
					</div>
					<div className={'flex items-center p-1'}>
						<FiArrowDown className={'mt-1 text-red-500 mr-1 ml-1'}/>
						<span className={'mt-1 text-red-500'}>0%</span>
						<div className={'mt-1 ml-2 text-[13px] text-[#dddcc]'}>
							Since last month
						</div>
					</div>
				
				
				</div>
				<div className="blocks flex flex-col items-start justify-between">
					<div className={'flex  h-[80%] w-full justify-between items-center p-3'}>
						<div>
							<h4 className="title">
								Monthly Fee Collection
								<br/>
								32,000 ₨
							</h4>
						</div>
						<div
							className={'w-[40px] h-[40px] bg-gradient-to-b from-[#289cf5] to-[#84c0ec] flex justify-center items-center text-[18px] text-[#fff] rounded-[30px]'}>
							<FaBookOpen/>
						</div>
					</div>
					<div className={'flex items-center p-1'}>
						<FiArrowDown className={'mt-1 text-red-500 mr-1 ml-1'}/>
						<span className={'mt-1 text-red-500'}>0%</span>
						<div className={'mt-1 ml-2 text-[13px] text-[#dddcc]'}>
							Since last month
						</div>
					</div>
				
				
				</div>
				<div className="blocks flex flex-col items-start justify-between">
					<div className={'flex  h-[80%] w-full justify-between items-center p-3'}>
						<div>
							<h4 className="title">
								Monthly Fee Collection
								<br/>
								32,000 ₨
							</h4>
						</div>
						<div
							className={'w-[40px] h-[40px] bg-gradient-to-b from-[#23bdb8] to-[#43e794] flex justify-center items-center text-[18px] text-[#fff] rounded-[30px]'}>
							<FaBookOpen/>
						</div>
					</div>
					<div className={'flex items-center p-1'}>
						<FiArrowDown className={'mt-1 text-red-500 mr-1 ml-1'}/>
						<span className={'mt-1 text-red-500'}>0%</span>
						<div className={'mt-1 ml-2 text-[13px] text-[#dddcc]'}>
							Since last month
						</div>
					</div>
				
				
				</div>
			
			</div>
			<Block open={open}/>
			<Chart open={open}/>
			<Progress/>
		</div>
	</Container>);
};

export default Main;
