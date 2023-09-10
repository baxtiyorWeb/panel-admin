// import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../shared/Container";

// eslint-disable-next-line react/prop-types
const SettingsLayout = ({ open, setOpen }) => {
  return (
    <Container open={open} setOpen={setOpen}>
      <div className="chart-progress dark:bg-[#353c48]">
        <Outlet />
      </div>
    </Container>
  );
};
export default SettingsLayout;
