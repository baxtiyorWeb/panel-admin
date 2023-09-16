import React, { useState } from "react";
import { Email_function } from "./../../progress/data";
import { Link } from "react-router-dom";

const Designation = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div
        className="around_one border-b dark:border-b-[#3b4452] mb-5"
        style={{
          paddingBottom: "23px",
        }}
      >
        <div className="around_user dark:text-[#96a2b4] text-[25px]">
          <h2>Courses</h2>
        </div>
        <div className="around_of dark:bg-[#3B4452]">
          <Link to={"#"}>Dashboard</Link>/<Link to={"#"}>Course</Link>/
          <Link to={"#"}>Temp</Link>
        </div>
      </div>
      <div className="div-block dark:bg-[#353C48] dark:border dark:border-[#3b4452]">
        <h2 className="title">Add Enquiry Status</h2>
        <input
          type="text"
          placeholder="title"
          className={"dark:bg-transparent "}
        />
        <h2>add description</h2>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="description"
          className={"dark:bg-transparent"}
        ></textarea>
        <button>submit</button>
      </div>
      <div className="chart-progress dark:bg-[#353C48]">
        <div className="add-link">
          <h1>Enquiry Status List</h1>
          <Link to="/students/addStudent">add Course</Link>
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
              onChange={(e) => setSearch(e.target.value)}
              className={"dark:bg-[#3B4452] border border-cyan-600"}
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
                    <th> Title</th>
                    <th></th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Email_function.filter((users) =>
                    users.title.toLowerCase().includes(search)
                  ).map((item) => {
                    return (
                      <tr
                        key={item.id}
                        className={
                          "even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                        }
                      >
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.students}</td>
                        <td
                          style={{
                            display: "flex",
                          }}
                        >
                          <span className="icons">{<item.edit />}</span>
                          <span className="icons">{<item.delete />}</span>
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

export default Designation;
