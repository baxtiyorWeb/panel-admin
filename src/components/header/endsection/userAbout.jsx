import { FaDesktop } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import UseTheme from "../../context/ThemeToggle.jsx";

export const UserAbout = () => {
  return (
    <div className="user-block">
      <div className="dark-light">
        <UseTheme />
      </div>
      <div className="desktop-icon">
        <FaDesktop />
      </div>
      <div className="envelope-icon">
        <BiEnvelope />
      </div>
      <div className="user-icon"></div>
    </div>
  );
};
