import "./ToggleBtn.scss";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const ToggleBtn = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`${
          active
            ? "active-status before:block before:absolute before:bg-blue-50"
            : "actived-status"
        } active-email`}
        onClick={() => setActive(!active)}
        style={{
          width: "80px",
          height: "30px",
          cursor: "pointer",
        }}
      ></div>
    </>
  );
};

export default ToggleBtn;
