import { useState } from "react"
import { SidebarLinks } from "./SidebarLinks"

const SideBar = ({open}) => {
    return (
        <div className={!open ? "sidebar" : "hide-sidebar"}>
            <SidebarLinks open={open} />
        </div>
    )
}

export default SideBar