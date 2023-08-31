import React, { useState } from "react";
import { Email_function } from "../../../progress/data";
import Select from "react-select";
import { Link } from "react-router-dom";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const ColorStyle = {
  control: (styles) => ({ ...styles, width: "482px" }),
};
export const Users = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [search, setSearch] = useState("");
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="div-block">
        <h2 className="title">Add Enquiry Status</h2>
        <div>
          <span>name</span>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <span>Last name</span>
          <input type="text" placeholder="last name" />
        </div>
        <div
          style={{
            width: "90%",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        >
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={ColorStyle}
          />
        </div>
        <div>
          <span>Email</span>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <span>Password</span>
          <input type="text" placeholder="password" />
        </div>

        <div></div>

        <div>
          <h3>Detail</h3>
        </div>
        <button>submit</button>
      </div>
      <div
        style={{
          width: "65%",
          boxShadow: " 0px 4px 8px 0px rgba(34, 60, 80, 0.2)",
        }}
      >
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
                      <th> name</th>
                      <th>Designation</th>
                      <th>image</th>
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
    </div>
  );
};
