// import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../shared/Container";

// eslint-disable-next-line react/prop-types
const SettingsLayout = () => {
  return (
    <Container>
      <div className="chart-progress dark:bg-[#353C48]  dark:text-[#EEE8CC] font-normal">
        <Outlet />
      </div>
    </Container>
  );
};
export default SettingsLayout;
