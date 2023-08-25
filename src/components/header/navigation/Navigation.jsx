import { GiHamburgerMenu } from "react-icons/gi"
import { BiFullscreen } from "react-icons/bi"
import { Input } from "../search/Input"




const Navigation = () => {
    return (
        <div className="flex items-center  pt-3 w-full h-full py-3 ">
            <div className="flex items-center justify-center h-full">
                <div className="w-[50px] h-[50px]  pt-2 pl-1      justify-center text-[20px] cursor-pointer">
                    <GiHamburgerMenu />
                </div>

                <div className="w-[50px] h-[50px]  pt-2  justify-center text-[23px] cursor-pointer">
                    <BiFullscreen />
                </div>
                <Input />
            </div>

        </div>
    )
}

export default Navigation