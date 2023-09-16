import {Link, Outlet} from "react-router-dom";
import Container from "../shared/Container";

// eslint-disable-next-line react/prop-types
const EventsLayout = () => {
	return (
		<Container>
			<div className="around_one ">
				<div className="around_user dark:text-[#96a2b2] text-[25px]">
					<h2>Courses</h2>
				</div>
				<div className="around_of dark:bg-[#353C48]">
					<Link to={'#'}>Dashboard</Link>/<Link to={'#'}>Course</Link>/<Link to={'#'}>Temp</Link>
				</div>
			</div>
			<div className="chart-progress dark:bg-[#353C48]  dark:text-[#EEE8CC] font-normal">
				<Outlet/>
			</div>
		</Container>
	);
};
export default EventsLayout;
