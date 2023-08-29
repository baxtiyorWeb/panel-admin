import { FaDesktop } from "react-icons/fa"
import { BiEnvelope, BiUser } from "react-icons/bi"
export const UserAbout = () => {
    return (
        <div className="user-block">
            <div className="desktop-icon">
                <FaDesktop />
            </div>
            <div className="envelope-icon">
                <BiEnvelope />
            </div>
            <div className="user-icon">
                <BiUser />
            </div>
        </div>
    )
}
