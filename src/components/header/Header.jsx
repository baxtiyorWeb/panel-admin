import { UserAbout } from "./endsection/userAbout"
import Navigation from "./navigation/navigation"

const Header = () => {
    return (
        <div className="w-full h-[70px]  border bg-[#FFFFFF] flex justify-end shadow-[0px_10px_15px_1px_#a0aec0] px-3">
            <div className="w-[86%] h-full flex items-center ">
                <Navigation />
                <UserAbout />
            </div>
        </div>
    )
}

export default Header