import { GiHamburgerMenu } from "react-icons/gi";
import { BiFullscreen } from "react-icons/bi";
import { Input } from "../search/Input";
import { useState } from "react";
import React, { useCallback } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// eslint-disable-next-line react/prop-types
const Navigation = ({ open, setOpen }) => {
 


  return (
    <div className={!open ? "navigation" : "navigation-hide"}>
      <div className="nav-block">
        <div className="burger-menu">
          <GiHamburgerMenu onClick={() => setOpen(!open)} />
        </div>

        <div className="full-screen">
          <BiFullscreen onClick={handle.enter} />
        </div>
        <Input />
      </div>
    </div>
  );
};

export default Navigation;
