// eslint-disable-next-line react/prop-types
import {SideBarLinks} from "./SideBarLinks.jsx";

// eslint-disable-next-line react/prop-types
const Sidebarlinks = ({open, dark, colors}) => {
    return (
        <div className={"fixed h-[100vh] z-[9999999] w-[15%] border"}>
            <SideBarLinks open={open} colors={colors} dark={dark}/>
        </div>
    );
};

export default Sidebarlinks;
