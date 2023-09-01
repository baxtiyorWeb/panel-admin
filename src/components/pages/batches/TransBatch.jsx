import React, { useState } from "react";
import Select from "react-select";
import "./TransBatch.css";
import { Link } from "react-router-dom";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const ColorStyle = {
  control: (styles) => ({ ...styles, width: "482px" }),
};

const Transferbatch = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <div className="around_one">
        <div className="around_user">
          <h2>Transfer Batch</h2>
        </div>
        <div className="around_of">
          <Link>Dashboard</Link>/<Link>Transfer</Link>/<Link>Temp</Link>
        </div>
      </div>
      <br />
      <br />
      <h4>Transfer Batch Form</h4>
      <div className="select_op_">
        <div className="select_op">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={ColorStyle}
          />
        </div>
        <div className="select_op">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={ColorStyle}
          />
        </div>
        <div className="select_op">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={ColorStyle}
          />
        </div>
      </div>
    </>
  );
};

export default Transferbatch;
