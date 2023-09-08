// import React from "react";
import {Outlet} from "react-router-dom";
import Container from "../shared/Container";

// eslint-disable-next-line react/prop-types
const EnqueiriesLayout = () => {
	return (
		<Container>
			<div className="chart-progress">
				<Outlet/>
			</div>
		</Container>
	);
};
export default EnqueiriesLayout;
