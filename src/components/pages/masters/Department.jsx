import React, { useState } from "react";
import { Email_function } from "./../../progress/data";
import { Link } from "react-router-dom";
import "./master.css";
const Department = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="div-block">
        <h2 className="title">Add Enquiry Status</h2>
        <input type="text" placeholder="title" />

        <button>submit</button>
      </div>
      <div
        className="around_one"
        style={{
          borderBottom: "1px solid #E1E1E1",
          paddingBottom: "23px",
        }}
      >
        <div className="around_user">
          <h2>Courses</h2>
        </div>
        <div className="around_of">
          <Link>Dashboard</Link>/<Link>Course</Link>/<Link>Temp</Link>
        </div>
      </div>
      <div className="chart-progress">
        <div className="add-link">
          <h1>Enquiry Status List</h1>
          <Link to="/students/addStudent">add Course</Link>
        </div>
        <div className="user_blew">
          <div className="user_blow">
            <h4>Show</h4>
            <select name="name" id="select">
              <option className="one_more" value="name">
                10
              </option>
            </select>
            <h4>entries</h4>
          </div>
          <div className="user_input">
            <h4>Search:</h4>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
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
                {Email_function.filter((users) =>
                  users.title.toLowerCase().includes(search)
                ).map((item) => {
                  return (
                    <tbody key={item.id}>
                      <tr>
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
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
