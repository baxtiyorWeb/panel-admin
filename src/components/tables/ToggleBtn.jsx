import "./ToggleBtn.scss";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const ToggleBtn = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={
          active
            ? "w-[150px] h-[50px] border border-red-500"
            : "w-[150px] h-[50px] border border-green-500 after:contrast-less:container"
        }
        onClick={() => setActive(!active ? false : true)}
        style={{
          width: "120px",
          height: "30px",
          cursor: "pointer",
        }}
      ></div>
    </>
  );
};

export default ToggleBtn;
