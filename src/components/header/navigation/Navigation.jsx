import { GiHamburgerMenu } from "react-icons/gi"
import { BiFullscreen } from "react-icons/bi"
import { Input } from "../search/Input"




const Navigation = () => {
    return (
        <div className="navigation">
            <div className="nav-block">
                <div className="burger-menu">
                    <GiHamburgerMenu />
                </div>

                <div className="full-screen">
                    <BiFullscreen />
                </div>
                <Input />
            </div>

        </div>
    )
}

export default Navigation