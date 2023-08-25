import { SidebarLinks } from "./SidebarLinks"


const SideBar = () => {
    return (
        <div className="w-[250px] h-[100vh] bg-[#fff] shadow-[10px_0px_15px_1px_#ccc] fixed left-0  flex items-end ">
            <SidebarLinks />
        </div>
    )
}

export default SideBar