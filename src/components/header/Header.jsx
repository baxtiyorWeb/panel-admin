import { UserAbout } from "./endsection/userAbout"
import Navigation from "./navigation/Navigation"

const Header = ({open, setOpen}) => {
    return (
        <div className="header">
            
            <div className="header-block">
                <Navigation open={open} setOpen={setOpen} />
                <UserAbout />
            </div>
        </div>
    )
}

export default Header