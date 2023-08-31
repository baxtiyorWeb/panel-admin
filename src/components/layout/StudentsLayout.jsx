/* eslint-disable no-undef */
// import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Container from "../shared/Container";
// import { enqueryList } from "../progress/data";

// eslint-disable-next-line react/prop-types
export const StudentsLayout = ({ open, setOpen }) => {
  return (
    <Container open={open} setOpen={setOpen}>
      <div className="chart-progress">
        <Outlet />
      </div>
    </Container>
  );
};
