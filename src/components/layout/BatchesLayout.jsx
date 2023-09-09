/* eslint-disable no-undef */
// import { Link } from "react-router-dom";
import {Link, Outlet} from "react-router-dom";
import Container from "../shared/Container";
import React from "react";
// import { enqueryList } from "../progress/data";

// eslint-disable-next-line react/prop-types
export const BatchesLayout = ({ open, setOpen }) => {
  return (
    <Container open={open} setOpen={setOpen}>
        <div className="around_one ">
            <div className="around_user dark:text-[#96a2b2] text-[25px]">
                <h2>Batches</h2>
            </div>
            <div className="around_of dark:bg-[#353C48]">
                <Link>Dashboard</Link>/<Link>Batches</Link>/<Link>Temp</Link>
            </div>
        </div>
      <div className="chart-progress dark:bg-[#353C48]">
        <Outlet />
      </div>
    </Container>
  );
};
