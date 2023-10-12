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
export const SideBarLinks = ({ dark, }) => {
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
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A] "}
          component={<NavLink to={"/"}></NavLink>}
        >
          Boshqaruv paneli
        </MenuItem>
        <MenuItem
          icon={<HiOutlineLightBulb />}
          className={"menus-style dark:text-cyan-50  hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/enquiries"}></NavLink>}
        >
          {" "}
          So{"'"}rovlar{" "}
        </MenuItem>
        <SubMenu
          label="Talabalarni boshqarish"
          icon={<HiUsers />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className="menus-style dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/students/students"}></NavLink>}
          >
            {" "}
            Talabalar
          </MenuItem>
          <MenuItem
            className="menus-style dark:bg-[#3B4452]  dark:text-[#e2e6ec] "
            component={<NavLink to={"/students/active"}></NavLink>}
          >
            Faol talabalar
          </MenuItem>
        </SubMenu>
        <SubMenu
          label="To'plamni boshqarish"
          icon={<BsFillBookFill />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            component={
              <NavLink
                to={"/batches/batch"}
                className={"dark:bg-[#3B4452] dark:text-[#e2e6ec]"}
              ></NavLink>
            }
          >
            Partiyalar
          </MenuItem>
          <MenuItem
            className={"menus-style dark:bg-[#3B4452] dark:text-[#e2e6ec]"}
            component={<NavLink to={"/batches/transfer"}></NavLink>}
          >
            O{"'"}tkazish to{"'"}plami
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<BiSolidUserCheck />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/faculties"}></NavLink>}
        >
          Fakultetlar
        </MenuItem>
        <MenuItem
          icon={<FaGraduationCap />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/courses/courses"}></NavLink>}
        >
          Kurslar
        </MenuItem>
        <MenuItem
          icon={<BiCheck />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/Attendance"}></NavLink>}
        >
          Davomat
        </MenuItem>
        <SubMenu
          label="Events"
          icon={<BiSolidPencil />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/event/books"}></NavLink>}
          >
            {" "}
            Tadbirni bron qilish{" "}
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/event/events"}></NavLink>}
          >
            {" "}
            Barcha voqealar{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu
          label="Magistrlar"
          icon={<BiSolidPencil />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/master/courses-category"}></NavLink>}
          >
            Kurs toifasi{" "}
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/master/Expense-category"}></NavLink>}
          >
            Xarajatlar toifasi{" "}
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/master/enquierStatus "}></NavLink>}
          >
            So{"'"}rov holati
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/master/designation"}></NavLink>}
          >
            Belgilanish
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/master/department"}></NavLink>}
          >
            Bo{"'"}lim
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/master/Guests"}></NavLink>}
          >
            Mehmonlar
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<BsFillTagFill />}
          component={<NavLink to={"/collect"}></NavLink>}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          To{"'"}lovni yig{""}ish
        </MenuItem>
        <SubMenu
          label="HRM"
          icon={<FaSitemap />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className={"menus-style dark:bg-[#3B4452] dark:text-[#e2e6ec]"}
            component={<NavLink to={"/payroll"}></NavLink>}
          >
            Ish haqi
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<BsCurrencyDollar />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
          component={<NavLink to={"/expenses"}></NavLink>}
        >
          Xarajatlar
        </MenuItem>
        <SubMenu
          label="Reports"
          icon={<AiFillFile />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/reports/fee-reports"}></NavLink>}
          >
            To{"'"}lov hisoboti
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/reports/experence-reports"}></NavLink>}
          >
            Xarajatlar hisoboti
          </MenuItem>
        </SubMenu>
        <SubMenu
          label="Sozlamalar"
          icon={<BiSolidCog />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/settings/currency"}></NavLink>}
          >
            {" "}
            Valyuta{" "}
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/settings/users"}></NavLink>}
          >
            {" "}
            Foydalanuvchilar{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu
          label="Veb sozlamalari"
          icon={<BiSolidCog />}
          className={"menus-style dark:text-cyan-50   hover:dark:bg-[#2A303A]"}
        >
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/websettings/currency"}></NavLink>}
          >
            Tadbir
          </MenuItem>
          <MenuItem
            className="dark:bg-[#3B4452] dark:text-[#e2e6ec]"
            component={<NavLink to={"/websettings/users"}></NavLink>}
          >
            Foydalanuvchilar
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};
