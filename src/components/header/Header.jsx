import {UserAbout} from "./endsection/userAbout";
import Navigation from "./navigation/Navigation";
// eslint-disable-next-line react/prop-types
const Header = () => {
	return (
		<div
			className={"header dark:bg-[#353C48] bg-[#fff]"}
		>
			<div className={"header-block"}>
				<Navigation/>
				<UserAbout/>
			</div>
		</div>
	);
};

export default Header;
