/* eslint-disable no-undef */
// import { Link } from "react-router-dom";
import {Link, Outlet} from "react-router-dom";
import Container from "../shared/Container";
// import { enqueryList } from "../progress/data";

// eslint-disable-next-line react/prop-types
export const StudentsLayout = ({ open, setOpen }) => {
  return (
    <Container open={open} setOpen={setOpen}>
        <div className="around_one">
            <div className="around_user  dark:text-[#96a2b4] text-[25px]">
                <h2>Students</h2>
            </div>
            <div className="around_of dark:bg-[#353C48] ">
                <Link>Dashboard</Link>/<Link>Dashboard</Link>/<Link>Home</Link>
            </div>
        </div>
      <div className="chart-progress dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
        <Outlet />
      </div>
    </Container>
  );
};
