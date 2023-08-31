import { Container } from "postcss";
import React from "react";
import { Outlet } from "react-router-dom";

export const EventsLyout = ({ open, setOpen }) => {
  return (
    <Container open={open} setOpen={setOpen}>
      <div className="chart-progress">
        <Outlet />
      </div>
    </Container>
  );
};
