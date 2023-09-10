// import React from "react";
import {Link, Outlet} from "react-router-dom";
import Container from "../shared/Container";
import React from "react";

// eslint-disable-next-line react/prop-types
const Reportslayout = () => {
  return (
    <Container>
        <div className="around_one ">
            <div className="around_user dark:dark:text-[#96a2b4] text-[25px]">
                <h2>Fee reports</h2>
            </div>
            <div className="around_of dark:bg-[#353c48]">
                <Link to={'#'}>Dashboard</Link>/<Link to={'#'}>Course</Link>/<Link to={'#'}>Temp</Link>
            </div>
        </div>
      <div className="chart-progress dark:bg-[#353c48]">
        <Outlet />
      </div>
    </Container>
  );
};
export default Reportslayout;
