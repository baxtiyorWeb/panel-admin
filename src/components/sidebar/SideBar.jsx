import { SidebarLinks } from "./SidebarLinks";

// eslint-disable-next-line react/prop-types
const SideBar = ({ open }) => {
  return (
    <div className={!open ? "sidebar" : "hide-sidebar"}>
      <SidebarLinks open={open} />
    </div>
  );
};

export default SideBar;
