import { UserAbout } from "./endsection/userAbout"
import Navigation from "./navigation/Navigation"

const Header = () => {
    return (
        <div className="header">
            
            <div className="header-block">
                <Navigation />
                <UserAbout />
            </div>
        </div>
    )
}

export default Header