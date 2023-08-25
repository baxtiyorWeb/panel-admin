import { NavLink } from "react-router-dom"
import { IoHomeSharp } from "react-icons/io5"
import { FaRegLightbulb, FaUserFriends, FaBookOpen, FaGraduationCap, FaPen, FaSitemap, FaDollarSign } from "react-icons/fa"
import { BiSolidUserCheck, BiSolidEnvelopeOpen } from "react-icons/bi"
import { BsCheckLg, BsFillTagFill } from "react-icons/bs"
import { AiTwotoneFileText } from "react-icons/ai"
import { BiSolidCog } from "react-icons/bi"
import { RiArrowDropDownLine } from "react-icons/ri"
// import { FaUserFriends  } from "react-icons/fa"
import styles from "./sidebar.module.scss"
import { useState } from "react"
import { GiOpenBook } from "react-icons/gi"
export const SidebarLinks = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="flex flex-col items-center justify-start h-[834px] border w-full relative top-5">
            <NavLink className={styles.sidebar}><IoHomeSharp className={styles.link} /><span>Dashboard</span></NavLink>
            <NavLink className={styles.sidebar}><FaRegLightbulb className={styles.link} /><span>Enquiries</span></NavLink>
            <NavLink className={styles.sidebar}><FaUserFriends className={styles.link} /><span>Manage Students </span><i><RiArrowDropDownLine /></i></NavLink>
            <NavLink className={styles.sidebar} onClick={() => setToggle(!toggle)}>
                <FaBookOpen className={styles.link} />
                <span>manage batch  </span><i><RiArrowDropDownLine /></i>
            </NavLink>
            <ul className={toggle ? styles.hide : styles.show}>
                <li className="w-full border"><NavLink className="w-full flex items-center "><GiOpenBook className="mr-2 text-[20px] text-[#60686f]" />Batches</NavLink></li>
                <li><NavLink><GiOpenBook />Transfer Batche</NavLink></li>
            </ul>
            <NavLink className={styles.sidebar}><BiSolidUserCheck className={styles.link} /><span>Faculties</span></NavLink>
            <NavLink className={styles.sidebar}><FaGraduationCap className={styles.link} /><span>Courses</span></NavLink>
            <NavLink className={styles.sidebar}><BsCheckLg className={styles.link} /><span>Attendance</span></NavLink>
            <NavLink className={styles.sidebar}><FaPen className={styles.link} /><span>Events</span></NavLink>
            <NavLink className={styles.sidebar}><BiSolidEnvelopeOpen className={styles.link} /><span>Email</span></NavLink>
            <NavLink className={styles.sidebar}><FaPen className={styles.link} /><span>Master</span></NavLink>
            <NavLink className={styles.sidebar}><BsFillTagFill className={styles.link} /><span>Collect free</span></NavLink>
            <NavLink className={styles.sidebar}><FaSitemap className={styles.link} /><span>HRM</span></NavLink>
            <NavLink className={styles.sidebar}><FaDollarSign className={styles.link} /><span>Expenses</span></NavLink>
            <NavLink className={styles.sidebar}><AiTwotoneFileText className={styles.link} /><span>Reports</span></NavLink>
            <NavLink className={styles.sidebar}><BiSolidCog className={styles.link} /><span>Settings</span></NavLink>
            <NavLink className={styles.sidebar}><BiSolidCog className={styles.link} /><span>Web Settings</span></NavLink>
        </div>
    )
}
