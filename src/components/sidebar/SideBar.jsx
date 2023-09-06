import { SidebarLinks } from "./SidebarLinks";

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, dark, colors }) => {
  return (
    <div
      className={
        !open
          ? "w-[14%] h-[100vh] flex-shrink-0 fixed left-0 bottom-0 z-[10] bg-[#ffffff] flex items-end overflow-visible sidebar "
          : "w-[5%] h-[100vh] flex-shrink-0 fixed left-0 bottom-0 z-[10] bg-[#ffffff] flex items-end overflow-visible hide-sidebar"
      }
      style={{ backgroundColor: dark }}
    >
      <SidebarLinks open={open} colors={colors} />
    </div>
  );
};

export default SideBar;
