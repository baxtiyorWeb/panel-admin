// eslint-disable-next-line react/prop-types
import {SideBarLinks} from "./SideBarLinks.jsx";

// eslint-disable-next-line react/prop-types
const Sidebarlinks = ({open, dark, colors}) => {
    return (
            <SideBarLinks open={open} colors={colors} dark={dark}/>
    );
};

export default Sidebarlinks;
