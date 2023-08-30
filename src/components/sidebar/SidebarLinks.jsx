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
import styles from "./sidebar.module.scss";
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
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar} to="/home">
          <IoHomeSharp className={styles.link} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar} to="/enquiries">
          <FaRegLightbulb className={styles.link} />
          <span>Enquiries</span>
        </NavLink>
        <NavLink
          className={!open ? styles.sidebar: styles.sidebar_hidebar}
          onClick={() => setstudents(!students && !batch)}
        >
          <FaUserFriends className={styles.link} />
          <span>Manage Students </span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!students ? styles.hide : styles.show}>
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
          className={!open ? styles.sidebar: styles.sidebar_hidebar}
          onClick={() => setBach(!batch && !students)}
        >
          <FaBookOpen className={styles.link} />
          <span>manage batch </span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!batch ? styles.hide : styles.show}>
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
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar}>
          <BiSolidUserCheck className={styles.link} />
          <span>Faculties</span>
        </NavLink>
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar}>
          <FaGraduationCap className={styles.link} />
          <span>Courses</span>
        </NavLink>
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar}>
          <BsCheckLg className={styles.link} />
          <span>Attendance</span>
        </NavLink>
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar} onClick={() => setEvents(!events)}>
          <FaPen className={styles.link} />
          <span>Events</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!events ? styles.hide : styles.show}>
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
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar}>
          <BiSolidEnvelopeOpen className={styles.link} />
          <span>Email</span>
        </NavLink>
        <NavLink
          className={!open ? styles.sidebar: styles.sidebar_hidebar}
          onClick={() => setMasters(!masters)}
        >
          <FaPen className={styles.link} />
          <span>Masters</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!masters ? styles.hide : styles.show}>
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
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar}>
          <BsFillTagFill className={styles.link} />
          <span>Collect free</span>
        </NavLink>
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar} onClick={() => setHrm(!hrm)}>
          <FaSitemap className={styles.link} />
          <span>HRM</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!hrm ? styles.hide : styles.show}>
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
        <NavLink className={!open ? styles.sidebar: styles.sidebar_hidebar}>
          <FaDollarSign className={styles.link} />
          <span>Expenses</span>
        </NavLink>
        <NavLink
          className={!open ? styles.sidebar: styles.sidebar_hidebar}
          onClick={() => setReports(!reports)}
        >
          <AiTwotoneFileText className={styles.link} />
          <span>Reports</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!reports ? styles.hide : styles.show}>
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
          className={!open ? styles.sidebar: styles.sidebar_hidebar}
          onClick={() => setsettings(!settings)}
        >
          <BiSolidCog className={styles.link} />
          <span>Settings</span>
          <i>
            <RiArrowDropDownLine />
          </i>
        </NavLink>
        <ul className={!settings ? styles.hide : styles.show}>
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
          className={!open ? styles.sidebar: styles.sidebar_hidebar}
          onClick={() => setWebSettings(!webSettings)}
        >
          <BiSolidCog className={styles.link} />
          <span>Web Settings</span>
        </NavLink>
        <ul className={!webSettings ? styles.hide : styles.show}>
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
