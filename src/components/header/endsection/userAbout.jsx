import { FaDesktop } from "react-icons/fa"
import { BiEnvelope, BiUser } from "react-icons/bi"
export const UserAbout = () => {
    return (
        <div className=" flex items-center justify-evenly w-[200px] h-full">
            <div className="w-[40px] h-[40px]  flex justify-center items-center text-[20px] cursor-pointer">
                <FaDesktop />
            </div>
            <div className="w-[40px] h-[40px]  flex justify-center items-center text-[20px] cursor-pointer">
                <BiEnvelope />
            </div>
            <div className="w-[40px] h-[40px]  flex justify-center items-center text-[20px] cursor-pointer">
                <BiUser />
            </div>
        </div>
    )
}
