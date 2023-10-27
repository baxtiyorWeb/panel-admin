import { useState } from "react";
import "./TransBatch.css";
const Transferbatch = () => {
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  return (
    <>
      <div className="around_one">
        <div className="around_user">
          <h2 className=" dark:text-[#fff]">Transfer Batch</h2>
        </div>
      </div>
      <br />
      <br />
      <h4>Transfer Batch Form</h4>
      <div className="grid grid-cols-3 gap-10">
        <div className="name">
          <span>Select Course</span>
          <select
            name=""
            id="selection"
            className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
            onChange={(e) => setCourse(e.target.value)}
            value={course}
          >
            <option placeholder="Select course">Select Course</option>
            <option>Modern Web App Development</option>
            <option>Android Application Development</option>
            <option>Advanced Graphics Designing</option>
            <option>Microsoft Office Professional</option>
            <option>Adobe Illustrator</option>
            <option>Testing MT 2</option>
            <option>Bootcamp</option>
            <option>Android Test</option>
            <option>digital marketing</option>
            <option>Front end</option>
            <option>Back end</option>
          </select>
        </div>
        <div className="name">
          <span>Select batch</span>
          <select
            name=""
            id="selection"
            className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
            onChange={(e) => setBatch(e.target.value)}
            value={batch}
          >
            <option>Select Batch</option>
            <option>Modern Web App Development</option>
            <option>Android Application Development</option>
            <option>Advanced Graphics Designing</option>
            <option>Microsoft Office Professional</option>
            <option>Adobe Illustrator</option>
            <option>Testing MT 2</option>
            <option>Bootcamp</option>
            <option>Android Test</option>
            <option>digital marketing</option>
            <option>Front end</option>
            <option>Back end</option>
          </select>
        </div>
        <div className="name">
          <span>search Students</span>
          <input
            type="search"
            className="w-full h-[42px] rounded-[5px]  dark:bg-transparent border border-[#1A1EA4] p-[10px] text-[19px]  dark:text-[#fff]"
            placeholder="search students"
          />
        </div>
      </div>
    </>
  );
};

export default Transferbatch;
