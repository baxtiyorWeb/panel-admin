import {BiFullscreen} from "react-icons/bi";
import {Input} from "../search/Input";
// eslint-disable-next-line react/prop-types
const Navigation = () => {
	return (
		<div className={"navigation"}>
			<div className="nav-block">
				<div className="full-screen">
					
					<BiFullscreen/>
				</div>
				<Input/>
				
			</div>
		</div>
	);
};

export default Navigation;
