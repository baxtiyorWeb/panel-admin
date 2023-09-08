import {UserAbout} from "./endsection/userAbout";
import Navigation from "./navigation/Navigation";

// eslint-disable-next-line react/prop-types
const Header = ({colors}) => {
    
    return (
        <div
            className="header"
            style={{backgroundColor: colors, color: "#353C48"}}
        >
            <div className={"header-block"}>
                <Navigation/>
                <UserAbout/>
            </div>
        </div>
    );
};

export default Header;
