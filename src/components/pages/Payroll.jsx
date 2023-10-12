import { useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./../progress/progress.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const ColorStyle = {
  control: (styles) => ({ ...styles, width: "482px", background: "transparent" }),
};
const Payroll = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Container >
      <div className="chart-progress dark:bg-[#353C48]">
        <div className="around_one">
          <div className="around_user">
            <h2 className="dark:text-[#96a2b4] text-[25px]">Pyroll</h2>
          </div>
          <div className="around_of dark:bg-[#3B4452]">
            <Link>Dashboard</Link>/<Link>Transfer</Link>/<Link>Temp</Link>
          </div>
        </div>
        <br />
        <br />
        <h4 className="add-link">Search cretiera</h4>
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
      </div>
    </Container>
  );
};

export default Payroll;
