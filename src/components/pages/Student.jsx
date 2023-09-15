import { useState } from "react";
import { Link } from "react-router-dom";
import "./Students.css";
import { studentss } from "../progress/data";

// eslint-disable-next-line react/prop-types
const Student = () => {
  const [search, setSearch] = useState("");
  return (
    <div className={"dark:bg-[#353C48]"}>
      <div className="chart-progress dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
        <div className="add-link">
          <h1>Enquiries</h1>
          <Link to="/students/addStudent">add student</Link>
        </div>
        <div className="user_blew">
          <div className="user_blow">
            <h4>Show</h4>
            <select name="name" id="select" className={"dark:bg-transparent"}>
              <option className="one_more" value="name">
                10
              </option>
            </select>
            <h4>entries</h4>
          </div>
          <div className="user_input">
            <h4>Search:</h4>
            <input
              type="text"
              className={"dark:bg-[#353C48]"}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div id="demo">
          <div>
            <div className="table-responsive-vertical shadow-z-1">
              <table
                id="table"
                className="table table-hover table-mc-light-blue"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Reg.No</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>CNIC</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studentss
                    .filter((users) =>
                      users.names.toLowerCase().includes(search)
                    )
                    .map((item) => {
                      return (
                        <tr key={item.id} className={"even:dark:bg-[#313843]"}>
                          <td>{item.id}</td>
                          <td>
                            <Link>{item.names}</Link>
                          </td>
                          <td>{item.RedNo}</td>
                          <td>{item.Email}</td>
                          <td>{item.Mobile}</td>
                          <td>{item.CNIC}</td>
                          <td>{item.Batch}</td>
                          <td></td>
                          <td className={"td_flex"}>
                            <span className="icons">{<item.Action />}</span>
                            <span className="icons">{<item.Like />}</span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
