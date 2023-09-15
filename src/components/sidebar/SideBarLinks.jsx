import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";
import {
  BsCurrencyDollar,
  BsFillBookFill,
  BsFillTagFill,
} from "react-icons/bs";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  BiCheck,
  BiSolidCog,
  BiSolidPencil,
  BiSolidUserCheck,
} from "react-icons/bi";
import { FaGraduationCap, FaSitemap } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SideBarLinks = ({ dark }) => {
  return (
    <Sidebar
      style={{
        backgroundColor: dark,
        position: "fixed",
        background: "#F5F7FA",
        zIndex: "99999",
        height: "100vh",
      }}
      width={"15%"}
    >
      <Menu
        className={"dark:bg-[#353C48] h-[100vh] fixed w-[15%] "}
        style={{ overflow: "scroll" }}
      >
        <div className={"mb-24"}></div>

        <MenuItem
          icon={<HomeRoundedIcon />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A] "}
          component={<NavLink to={"/"}></NavLink>}
        >
          {" "}
          Dashboard{" "}
        </MenuItem>
        <MenuItem
          icon={<HiOutlineLightBulb />}
          className={"menus-style dark:text-cyan-50  hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/enquiries"}></NavLink>}
        >
          {" "}
          Enquiries{" "}
        </MenuItem>
        <SubMenu
          label="Manage Students"
          icon={<HiUsers />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className="menus-style dark:text-cyan-50"
            component={<NavLink to={"/students/students"}></NavLink>}
          >
            {" "}
            Students
          </MenuItem>
          <MenuItem
            className="menus-style dark:text-cyan-50"
            component={<NavLink to={"/students/active"}></NavLink>}
          >
            In-Active Students
          </MenuItem>
        </SubMenu>
        <SubMenu
          label="Manage Batch"
          icon={<BsFillBookFill />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem component={<NavLink to={"/batches/batch"}></NavLink>}>
            Batches
          </MenuItem>
          <MenuItem
            className={
              "menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"
            }
            component={<NavLink to={"/batches/transfer"}></NavLink>}
          >
            Transfer Batch
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<BiSolidUserCheck />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/faculties"}></NavLink>}
        >
          Faculties
        </MenuItem>
        <MenuItem
          icon={<FaGraduationCap />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/Courses"}></NavLink>}
        >
          Courses
        </MenuItem>
        <MenuItem
          icon={<BiCheck />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/Attendance"}></NavLink>}
        >
          Attendance
        </MenuItem>
        <SubMenu
          label="Events"
          icon={<BiSolidPencil />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem component={<NavLink to={"/event/books"}></NavLink>}>
            {" "}
            Event Booking{" "}
          </MenuItem>
          <MenuItem component={<NavLink to={"/event/events"}></NavLink>}>
            {" "}
            All Events{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu
          label="Masters"
          icon={<BiSolidPencil />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            component={<NavLink to={"/master/courses-category"}></NavLink>}
          >
            Course Category{" "}
          </MenuItem>
          <MenuItem
            component={<NavLink to={"/master/Expense-category"}></NavLink>}
          >
            Expense Category{" "}
          </MenuItem>
          <MenuItem
            component={<NavLink to={"/master/enquierStatus "}></NavLink>}
          >
            Enquiry Status
          </MenuItem>
          <MenuItem component={<NavLink to={"/master/designation"}></NavLink>}>
            Designation
          </MenuItem>
          <MenuItem component={<NavLink to={"/master/department"}></NavLink>}>
            Department
          </MenuItem>
          <MenuItem component={<NavLink to={"/master/Guests"}></NavLink>}>
            Guests
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<BsFillTagFill />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          Collect Fee
        </MenuItem>
        <SubMenu
          label="HRM"
          icon={<FaSitemap />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className={
              "menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"
            }
            component={<NavLink to={"/payroll"}></NavLink>}
          >
            Payroll
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<BsCurrencyDollar />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/expenses"}></NavLink>}
        >
          Expenses
        </MenuItem>
        <SubMenu
          label="Reports"
          icon={<AiFillFile />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem component={<NavLink to={"/reports/fee-reports"}></NavLink>}>
            {" "}
            Fee Report{" "}
          </MenuItem>
          <MenuItem
            component={<NavLink to={"/reports/experence-reports"}></NavLink>}
          >
            {" "}
            Expense Report{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu
          label="Settings"
          icon={<BiSolidCog />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem component={<NavLink to={"/settings/currency"}></NavLink>}>
            {" "}
            Currency{" "}
          </MenuItem>
          <MenuItem component={<NavLink to={"/settings/users"}></NavLink>}>
            {" "}
            Users{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu
          label="Web Settings"
          icon={<BiSolidCog />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            component={<NavLink to={"/websettings/currency"}></NavLink>}
          >
            {" "}
            Currency{" "}
          </MenuItem>
          <MenuItem component={<NavLink to={"/websettings/users"}></NavLink>}>
            {" "}
            Users{" "}
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};
