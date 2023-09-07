import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {HiOutlineLightBulb} from "react-icons/hi"
import {HiUsers} from "react-icons/hi2"
import {BsCurrencyDollar, BsFillBookFill, BsFillTagFill} from "react-icons/bs"
import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import {useState} from "react";
import {BiCheck, BiSolidCog, BiSolidPencil, BiSolidUserCheck} from "react-icons/bi";
import {FaGraduationCap, FaSitemap} from "react-icons/fa";
import {AiFillFile} from "react-icons/ai";

// eslint-disable-next-line react/prop-types
export const SideBarLinks = ({dark}) => {
    const {collapseSidebar} = useProSidebar();
    const [toggle, setToggle] = useState(false)

    function collapses() {
        if (!toggle) {
            setToggle(true)
            collapseSidebar()
        } else {
            setToggle(false)
            collapseSidebar()
        }
    }

    return (
        <Sidebar style={{backgroundColor: dark}} className={'fixed top-0 h-[100vh] bg-amber-50 '} width={'100%'}>
            <Menu>

                <MenuRoundedIcon
                    onClick={collapses}
                    className={!toggle ? 'mb-10 relative left-[240px] transition-opacity' : " mb-10 relative left-[20px]"}
                    style={{
                        transition: "0.2s ease-in-out", marginTop: "15px", cursor: "pointer"
                    }}
                />

                <MenuItem icon={<HomeRoundedIcon/>}> Dashboard </MenuItem>
                <MenuItem icon={<HiOutlineLightBulb/>}> Enquiries </MenuItem>
                <SubMenu label="Manage Students" icon={<HiUsers/>}>
                    <MenuItem> Students</MenuItem>
                    <MenuItem>In-Active Students</MenuItem>
                </SubMenu>
                <SubMenu label="Manage Batch" icon={<BsFillBookFill/>}>
                    <MenuItem>
                        Batches
                    </MenuItem>
                    <MenuItem>Transfer Batch</MenuItem>
                </SubMenu>
                <MenuItem icon={<BiSolidUserCheck/>}>Faculties</MenuItem>
                <MenuItem icon={<FaGraduationCap/>}>Courses</MenuItem>
                <MenuItem icon={<BiCheck/>}>Attendance</MenuItem>
                <SubMenu label="Events" icon={<BiSolidPencil/>}>
                    <MenuItem> Event Booking </MenuItem>
                    <MenuItem> All Events </MenuItem>
                </SubMenu>
                <SubMenu label="Masters" icon={<BiSolidPencil/>}>
                    <MenuItem> Course Category </MenuItem>
                    <MenuItem> Expense Category </MenuItem>
                    <MenuItem> Enquiry Status </MenuItem>
                    <MenuItem> Designation </MenuItem>
                    <MenuItem> Department </MenuItem>
                    <MenuItem> Guests </MenuItem>
                </SubMenu>
                <MenuItem icon={<BsFillTagFill/>}> Collect Fee </MenuItem>
                <SubMenu label="HRM" icon={<FaSitemap/>}>
                    <MenuItem> Payroll </MenuItem>
                </SubMenu>
                <MenuItem icon={<BsCurrencyDollar/>}> Expenses </MenuItem>
                <SubMenu label='Reports' icon={<AiFillFile/>}>
                    <MenuItem> Fee Report </MenuItem>
                    <MenuItem> Expense Report </MenuItem>

                </SubMenu>
                <SubMenu label='Settings' icon={<BiSolidCog/>}>
                    <MenuItem> Currency </MenuItem>
                    <MenuItem> Users </MenuItem>

                </SubMenu>
                <SubMenu label='Web Settings' icon={<BiSolidCog/>}>
                    <MenuItem> Currency </MenuItem>
                    <MenuItem> Users </MenuItem>

                </SubMenu>
            </Menu>
        </Sidebar>)
}
