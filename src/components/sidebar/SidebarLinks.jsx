import { Link, NavLink } from "react-router-dom";

// import { FaUserFriends  } from "react-icons/fa"
// import { useState } from "react";
// import { GiOpenBook } from "react-icons/gi";
import { DashboardMenu } from "./sidebarmap";
// import { AiOutlineArrowDown } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
export const SidebarLinks = ({ open, dark }) => {
  //   const [students, setstudents] = useState(false);
  //   const [batch, setBach] = useState(false);
  // const [events, setEvents] = useState(false);
  // const [masters, setMasters] = useState(false);
  // const [hrm, setHrm] = useState(false);
  // const [reports, setReports] = useState(false);
  // const [settings, setsettings] = useState(false);
  // const [webSettings, setWebSettings] = useState(false);

  return (
    <div className={"wrapper"}>
      <div className="side-links" style={{ color: dark }}>
        {DashboardMenu.map((item) => {
          <div key={item.id}>
            <NavLink to={"#"}>
              <span>{item.id}</span>
            </NavLink>
          </div>;
         })}
      </div>
    </div>
  );
};
{
  /* <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    to="/"
                >
                    <IoHomeSharp className={"link"}/>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    to="/enquiries"
                >
                    <FaRegLightbulb className={"link"}/>
                    <span>Enquiries</span>
                </NavLink>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} ${styles.dropdown_link}`}
                    onClick={() => setstudents(!students && !batch)}
                >
                    <FaUserFriends className={"link"}/>
                    <span>Manage Students </span>
                    <i>
                        <RiArrowDropDownLine/>
                    </i>
                    <ul className={styles.drop}>
                        <li className="w-full border">
                            <NavLink
                                className="w-full flex items-center"
                                to="/students/students"
                            >
                                <GiOpenBook className="book-icons"/>
                                <div>Students</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/students/active">
                                <GiOpenBook className="book-icons"/>
                                <div>in-Active Student</div>
                            </NavLink>
                        </li>
                    </ul>
                </NavLink>
                <ul className={`${!students ? styles.hide : styles.show}`}>
                    <li className="w-full border">
                        <NavLink
                            className="w-full flex items-center"
                            to="/students/students"
                        >
                            <GiOpenBook className="book-icons"/>
                            <span>Students</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/students/active">
                            <GiOpenBook className="book-icons"/>
                            <span>in-Active Student</span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    onClick={() => setBach(!batch && !students)}
                >
                    <FaBookOpen className={"link"}/>
                    <span>manage batch </span>
                    <i>
                        <RiArrowDropDownLine/>
                    </i>
                    <ul className={styles.drop}>
                        <li className="w-full border">
                            <NavLink
                                className="w-full flex items-center"
                                to="/batches/batch"
                            >
                                <GiOpenBook className="book-icons"/>
                                <div>Batches</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/batches/transfer">
                                <GiOpenBook className="book-icons"/>
                                <div>Transfer Batch</div>
                            </NavLink>
                        </li>
                    </ul>
                </NavLink>
                <ul className={!batch ? styles.hide : styles.show}>
                    <li className="w-full border">
                        <NavLink className="w-full flex items-center" to="/batches/batch">
                            <GiOpenBook className="book-icons"/>
                            <span>Batches</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/batches/transfer">
                            <TbPlayerTrackNextFilled className="book-icons"/>
                            <span>Transfer Batches</span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    to={"/faculties"}
                >
                    <BiSolidUserCheck className={"link"}/>
                    <span>Faculties</span>
                </NavLink>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    to={"Courses"}
                >
                    <FaGraduationCap className={"link"}/>
                    <span>Courses</span>
                </NavLink>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    to={"Attendance"}
                >
                    <BsCheckLg className={"link"}/>
                    <span>Attendance</span>
                </NavLink>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    onClick={() => setEvents(!events)}
                >
                    <FaPen className={"link"}/>
                    <span>Events</span>
                    <i>
                        <RiArrowDropDownLine/>
                    </i>
                    <ul className={styles.drop}>
                        <li className="w-full border">
                            <NavLink
                                className="w-full flex items-center"
                                to="/event/books"
                            >
                                <GiOpenBook className="book-icons"/>
                                <div>Event booking</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/event/events">
                                <GiOpenBook className="book-icons"/>
                                <div>Events</div>
                            </NavLink>
                        </li>
                    </ul>
                </NavLink>
                <ul className={!events ? styles.hide : styles.show}>
                    <li className="w-full border">
                        <NavLink className="w-full flex items-center" to="/event/books">
                            <GiOpenBook className="book-icons"/>
                            <span>Event Booking</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/event/events"}>
                            <GiOpenBook className="book-icons"/>
                            <span>All Events</span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}>
                    <BiSolidEnvelopeOpen className={"link"}/>
                    <span>Email</span>
                </NavLink>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    onClick={() => setMasters(!masters)}
                >
                    <FaPen className={"link"}/>
                    <span>Masters</span>
                    <i>
                        <RiArrowDropDownLine/>
                    </i>
                    <ul className={styles.drop}>
                        <li className="w-full border">
                            <NavLink
                                className="w-full flex items-center"
                                to="/master/courses-category"
                            >
                                <GiOpenBook className="book-icons"/>
                                <div>Course Category</div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/master/Expense-category">
                                <GiOpenBook className="book-icons"/>
                                <div>Expense Category</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/master/enquierStatus">
                                <GiOpenBook className="book-icons"/>
                                <div>Enquiry Status</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/master/designation">
                                <GiOpenBook className="book-icons"/>
                                <div>Designation</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/master/department">
                                <GiOpenBook className="book-icons"/>
                                <div>Department</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/master/Guests">
                                <GiOpenBook className="book-icons"/>
                                <div>Guests</div>
                            </NavLink>
                        </li>
                    </ul>
                </NavLink>
                <ul className={!masters ? styles.hide : styles.show}>
                    <li className="w-full border">
                        <NavLink
                            className="w-full flex items-center"
                            to="/master/courses-category"
                        >
                            <GiOpenBook className="book-icons"/>
                            <span>Course Category</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/master/Expense-category"}>
                            <GiOpenBook className="book-icons"/>
                            <span>Expense Category</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/master/enquierStatus">
                            <GiOpenBook className="book-icons"/>
                            <span>Enquire Category</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/master/designation"}>
                            <GiOpenBook className="book-icons"/>
                            <span>Designation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/master/department"}>
                            <GiOpenBook className="book-icons"/>
                            <span>Department</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/master/Guests"}>
                            <GiOpenBook className="book-icons"/>
                            <span>Guests</span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    to="/collect"
                >
                    <BsFillTagFill className={"link"}/>
                    <span>Collect free</span>
                </NavLink>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    onClick={() => setHrm(!hrm)}
                >
                    <FaSitemap className={"link"}/>
                    <span>HRM</span>
                    <i>
                        <RiArrowDropDownLine/>
                    </i>
                    <ul className={styles.drop}>
                        <li className="w-full border">
                            <NavLink
                                className="w-full flex items-center"
                                to="/payroll"
                            >
                                <GiOpenBook className="book-icons"/>
                                <div>payroll</div>
                            </NavLink>
                        </li>
                    </ul>
                </NavLink>
                <ul className={!hrm ? styles.hide : styles.show}>
                    <li className="w-full border">
                        <NavLink className="w-full flex items-center" to="/payroll">
                            <GiOpenBook className="book-icons"/>
                            <span>payroll</span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    to="/expenses"
                >
                    <FaDollarSign className={"link"}/>
                    <span>Expenses</span>
                </NavLink>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    onClick={() => setReports(!reports)}
                >
                    <AiTwotoneFileText className={"link"}/>
                    <span>Reports</span>
                    <i>
                        <RiArrowDropDownLine/>
                    </i>
                    <ul className={styles.drop}>
                        <li className="w-full border">
                            <NavLink
                                className="w-full flex items-center"
                                to="reports/fee-reports"
                            >
                                <GiOpenBook className="book-icons"/>
                                <div>Fee Reports</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reports/experence-reports">
                                <GiOpenBook className="book-icons"/>
                                <div>Expense Reports</div>
                            </NavLink>
                        </li>
                    </ul>
                </NavLink>
                <ul className={!reports ? styles.hide : styles.show}>
                    <li className="w-full border">
                        <NavLink
                            className="w-full flex items-center"
                            to="/reports/fee-reports"
                        >
                            <GiOpenBook className="book-icons"/>
                            <span>Fee Report</span>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/reports/experence-reports"}>
                            <GiOpenBook className="book-icons"/>
                            <span>Expense Report</span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    onClick={() => setsettings(!settings)}
                >
                    <BiSolidCog className={"link"}/>
                    <span>Settings</span>
                    <i>
                        <RiArrowDropDownLine/>
                    </i>
                    <ul className={styles.drop}>
                        <li className="w-full border">
                            <NavLink
                                className="w-full flex items-center"
                                to="/settings/currency"
                            >
                                <GiOpenBook className="book-icons"/>
                                <div>Currency</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings/users">
                                <GiOpenBook className="book-icons"/>
                                <div>Users</div>
                            </NavLink>
                        </li>
                    </ul>
                </NavLink>
                <ul className={!settings ? styles.hide : styles.show}>
                    <li className="w-full border">
                        <NavLink
                            className="w-full flex items-center"
                            to="/settings/currency"
                        >
                            <GiOpenBook className="book-icons"/>
                            <span>Currency</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings/users">
                            <GiOpenBook className="book-icons"/>
                            <span>Users</span>
                        </NavLink>
                    </li>
                </ul>
                <NavLink
                    className={`${!open ? styles.sidebar : styles.sidebar_hidebar} dropdown-link`}
                    onClick={() => setWebSettings(!webSettings)}
                >
                    <BiSolidCog className={"link"}/>
                    <span>Web Settings</span>
                    <i>
                        <RiArrowDropDownLine/>
                    </i>
                    <ul className={`${styles.drop} ${styles.fixed}`}>
                        <li className="w-full border">
                            <NavLink
                                className="w-full flex items-center"
                                to="students"
                            >
                                <GiOpenBook className="book-icons"/>
                                <div>Events</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/students/active">
                                <GiOpenBook className="book-icons"/>
                                <div>in-Active Student</div>
                            </NavLink>
                        </li>
                    </ul>
                </NavLink>
                <ul className={!webSettings ? styles.hide : styles.show}>
                    <li className="w-full border">
                        <NavLink className="w-full flex items-center" to="/students">
                            <GiOpenBook className="book-icons"/>
                            <span>Events</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <GiOpenBook className="book-icons"/>
                            <span>About us</span>
                        </NavLink>
                    </li>
                </ul> */
}
