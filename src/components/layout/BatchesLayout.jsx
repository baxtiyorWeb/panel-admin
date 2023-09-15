/* eslint-disable no-undef */
import { Link, Outlet } from "react-router-dom";
import Container from "../shared/Container";

// eslint-disable-next-line react/prop-types
export const BatchesLayout = ({ open, setOpen }) => {
  return (
    <Container open={open} setOpen={setOpen}>
      <div className="around_one ">
        <div className="around_user dark:text-[#96a2b4] text-[25px]">
          <h2>Batches</h2>
        </div>
        <div className="box_2 dark:bg-[#353C48]  dark:text-[#EEE8CC] font-normal">
          <Link>Dashboard</Link>/<Link>Batches</Link>/<Link>Temp</Link>
        </div>
      </div>
      <div className="chart-progress dark:bg-[#353C48]">
        <Outlet />
      </div>
    </Container>
  );
};
