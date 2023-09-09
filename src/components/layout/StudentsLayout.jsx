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
            <div className="around_user  dark:bg-transparent dark:text-[#6c756c]">
                <h2>Students</h2>
            </div>
            <div className="around_of dark:bg-[#353C48]">
                <Link>Dashboard</Link>/<Link>Dashboard</Link>/<Link>Home</Link>
            </div>
        </div>
      <div className="chart-progress dark:bg-[#353C48]">
        <Outlet />
      </div>
    </Container>
  );
};
