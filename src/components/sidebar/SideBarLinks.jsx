import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {Link, NavLink} from "react-router-dom";

export const SideBarLinks = () => {
    return (
        <div className="w-full h-full justify-center items-center">
            <Sidebar>
                <Menu>
                    <SubMenu label="Charts">
                        <NavLink to={'/dashboard'}>name</NavLink>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <SubMenu label="Charts">
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}
