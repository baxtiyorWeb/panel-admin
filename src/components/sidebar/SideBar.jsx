import { SidebarLinks } from "./SidebarLinks";

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, dark , colors}) => {
  return (
    <div
      className={!open ? "sidebar" : "hide-sidebar"}
      style={{ backgroundColor: dark, }}
    >
      <SidebarLinks open={open} colors={colors} />
    </div>
  );
};

export default SideBar;
