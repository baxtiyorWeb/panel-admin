// import React from "react";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EnqueiriesLayout = ({ open, setOpen }) => {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <Outlet open={open} setOpen={setOpen} />
    </div>
  );
};
export default EnqueiriesLayout;
