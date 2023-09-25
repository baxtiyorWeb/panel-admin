import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

import "./main_1.css";
import Block from "./Block";
import { Progress } from "../progress/Progress";
import Container from "../shared/Container";
import { FiArrowDown } from "react-icons/fi";
import Charts from "../Chart/Chart";
// eslint-disable-next-line react/prop-types
const Main = ({ open }) => {
  return (
    <Container>
      <div style={{ width: "100%" }}>
        <div>
          <div className="top_menu ">
            <div className="box ">
              <h1 className={"dark:text-[#96a2b4] text-[25px] "}>Dashboard</h1>
            </div>
            <div className="box_2  dark:bg-[#353C48]  dark:text-[#EEE8CC] font-normal">
              <Link to={"/"}>Dashboard</Link>/<Link to={"/"}>Dashboard</Link>/
              <Link to={"#"}>Home</Link>
            </div>
          </div>
        </div>

        <div className="top_chart ">
          <div className="blocks flex flex-col items-start justify-between dark:bg-[#353C48] text-[#B6BDC2] font-normal">
            <div
              className={
                "flex  h-[80%] w-full justify-between items-center p-3"
              }
            >
              <div>
                <h4 className="title">
                  Monthly Fee Collection
                  <br />
                  32,000 ₨
                </h4>
              </div>
              <div
                className={
                  "w-[40px] h-[40px] bg-gradient-to-b from-[#f48665] to-[#fda23f] flex justify-center items-center text-[18px] text-[#fff] rounded-[30px]"
                }
              >
                <FaBookOpen />
              </div>
            </div>
            <div className={"flex items-center p-1"}>
              <FiArrowDown className={"mt-1 text-red-500 mr-1 ml-1"} />
              <span className={"mt-1 text-red-500"}>0%</span>
              <div className={"mt-1 ml-2 text-[13px] text-[#dddcc]"}>
                Since last month
              </div>
            </div>
          </div>
          <div className="blocks flex flex-col items-start justify-between dark:bg-[#353C48] text-[#B6BDC2] font-normal">
            <div
              className={
                "flex  h-[80%] w-full justify-between items-center p-3"
              }
            >
              <div>
                <h4 className="title">
                  Monthly Fee Collection
                  <br />
                  32,000 ₨
                </h4>
              </div>
              <div
                className={
                  "w-[40px] h-[40px] bg-gradient-to-b from-[#289cf5] to-[#84c0ec] flex justify-center items-center text-[18px] text-[#fff] rounded-[30px]"
                }
              >
                <FaBookOpen />
              </div>
            </div>
            <div className={"flex items-center p-1"}>
              <FiArrowDown className={"mt-1 text-red-500 mr-1 ml-1"} />
              <span className={"mt-1 text-red-500"}>0%</span>
              <div className={"mt-1 ml-2 text-[13px] text-[#dddcc]"}>
                Since last month
              </div>
            </div>
          </div>
          <div className="blocks flex flex-col items-start justify-between dark:bg-[#353C48] text-[#B6BDC2] font-normal">
            <div
              className={
                "flex  h-[80%] w-full justify-between items-center p-3"
              }
            >
              <div>
                <h4 className="title">
                  Monthly Fee Collection
                  <br />
                  32,000 ₨
                </h4>
              </div>
              <div
                className={
                  "w-[40px] h-[40px] bg-gradient-to-b from-[#23bdb8] to-[#43e794] flex justify-center items-center text-[18px] text-[#fff] rounded-[30px]"
                }
              >
                <FaBookOpen />
              </div>
            </div>
            <div className={"flex items-center p-1"}>
              <FiArrowDown className={"mt-1 text-red-500 mr-1 ml-1"} />
              <span className={"mt-1 text-red-500"}>0%</span>
              <div className={"mt-1 ml-2 text-[13px] text-[#dddcc]"}>
                Since last month
              </div>
            </div>
          </div>
        </div>
        <Block open={open} />
        <Charts open={open} />
        <Progress />
      </div>
    </Container>
  );
};

export default Main;
