import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import {
  FaRegLightbulb,
  FaUserFriends,
  FaBookOpen,
  FaGraduationCap,
  FaPen,
  FaSitemap,
  FaDollarSign,
} from "react-icons/fa";
import { BiSolidUserCheck, BiSolidEnvelopeOpen } from "react-icons/bi";
import { BsCheckLg, BsFillTagFill } from "react-icons/bs";
import { AiTwotoneFileText } from "react-icons/ai";
import { BiSolidCog } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { FaUserFriends  } from "react-icons/fa"
import "./sidebar.scss";
import { useState } from "react";
import { GiOpenBook } from "react-icons/gi";
export const SidebarLinks = ({open}) => {
  const [students, setstudents] = useState(false);
  const [batch, setBach] = useState(false);
  const [events, setEvents] = useState(false);
  const [masters, setMasters] = useState(false);
  const [hrm, setHrm] = useState(false);
  const [reports, setReports] = useState(false);
  const [settings, setsettings] = useState(false);
  const [webSettings, setWebSettings] = useState(false);

  return (
    <div className={"wrapper"}>
      <div className="side-links">
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"} to="/home">
          <IoHomeSharp className={"link"} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"} to="/enquiries">
          <FaRegLightbulb className={"link"} />
          <span>Enquiries</span>
        </NavLink>
        <NavLink
          className={!open ? "sidebar": "sidebar_hidebar"}
          onClick={() => setstudents(!students && !batch)}
        >
          <FaUserFriends className={"link"} />
          <span>Manage Students </span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!students ? "hide" : "show"}>
          <li className="w-full border">
            <NavLink className="w-full flex items-center" to="/students">
              <GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />
              <span>Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>in-Active Student</span>
            </NavLink>
          </li>
        </ul>
        <NavLink
          className={!open ? "sidebar": "sidebar_hidebar"}
          onClick={() => setBach(!batch && !students)}
        >
          <FaBookOpen className={"link"} />
          <span>manage batch </span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!batch ? "hide" : "show"}>
          <li className="w-full border">
            <NavLink className="w-full flex items-center" to="/students">
              <GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />
              <span>Batches</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Transfer Batche</span>
            </NavLink>
          </li>
        </ul>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"}>
          <BiSolidUserCheck className={"link"} />
          <span>Faculties</span>
        </NavLink>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"}>
          <FaGraduationCap className={"link"} />
          <span>Courses</span>
        </NavLink>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"}>
          <BsCheckLg className={"link"} />
          <span>Attendance</span>
        </NavLink>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"} onClick={() => setEvents(!events)}>
          <FaPen className={"link"} />
          <span>Events</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!events ? "hide" : "show"}>
          <li className="w-full border">
            <NavLink className="w-full flex items-center" to="/students">
              <GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />
              <span>Event Booking</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>All Events</span>
            </NavLink>
          </li>
        </ul>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"}>
          <BiSolidEnvelopeOpen className={"link"} />
          <span>Email</span>
        </NavLink>
        <NavLink
          className={!open ? "sidebar": "sidebar_hidebar"}
          onClick={() => setMasters(!masters)}
        >
          <FaPen className={"link"} />
          <span>Masters</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!masters ? "hide" : "show"}>
          <li className="w-full border">
            <NavLink className="w-full flex items-center" to="/students">
              <GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />
              <span>Course Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Expense Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Enquire Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Designation</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Department</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Guests</span>
            </NavLink>
          </li>
        </ul>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"}>
          <BsFillTagFill className={"link"} />
          <span>Collect free</span>
        </NavLink>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"} onClick={() => setHrm(!hrm)}>
          <FaSitemap className={"link"} />
          <span>HRM</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!hrm ? "hide" : "show"}>
          <li className="w-full border">
            <NavLink className="w-full flex items-center" to="/students">
              <GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />
              <span>Batches</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Transfer Batche</span>
            </NavLink>
          </li>
        </ul>
        <NavLink className={!open ? "sidebar": "sidebar_hidebar"}>
          <FaDollarSign className={"link"} />
          <span>Expenses</span>
        </NavLink>
        <NavLink
          className={!open ? "sidebar": "sidebar_hidebar"}
          onClick={() => setReports(!reports)}
        >
          <AiTwotoneFileText className={"link"} />
          <span>Reports</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!reports ? "hide" : "show"}>
          <li className="w-full border">
            <NavLink className="w-full flex items-center" to="/students">
              <GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />
              <span>Batches</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Transfer Batche</span>
            </NavLink>
          </li>
        </ul>
        <NavLink
          className={!open ? "sidebar": "sidebar_hidebar"}
          onClick={() => setsettings(!settings)}
        >
          <BiSolidCog className={"link"} />
          <span>Settings</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!settings ? "hide" : "show"}>
          <li className="w-full border">
            <NavLink className="w-full flex items-center" to="/students">
              <GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />
              <span>Batches</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Transfer Batche</span>
            </NavLink>
          </li>
        </ul>
        <NavLink
          className={!open ? "sidebar": "sidebar_hidebar"}
          onClick={() => setWebSettings(!webSettings)}
        >
          <BiSolidCog className={"link"} />
          <span>Web Settings</span>
        </NavLink>
        <ul className={!webSettings ? "hide" : "show"}>
          <li className="w-full border">
            <NavLink className="w-full flex items-center" to="/students">
              <GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />
              <span>Batches</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GiOpenBook />
              <span>Transfer Batche</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
