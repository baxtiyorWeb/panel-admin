import { UserAbout } from "./endsection/userAbout";
import Navigation from "./navigation/Navigation";

// eslint-disable-next-line react/prop-types
const Header = ({ open, setOpen }) => {
  return (
    <div className="header">
      <div className={!open ? "header-block" : "header-hide-block"}>
        <Navigation open={open} setOpen={setOpen} />
        <UserAbout />
      </div>
    </div>
  );
};

export default Header;
