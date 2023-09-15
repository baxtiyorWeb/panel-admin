import React, { useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { foculties } from "../progress/data";

const Faculties = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <div className="around_one ">
        <div className="around_user dark:text-[#96a2b2] text-[25px]">
          <h2>Faculties</h2>
        </div>
        <div className="around_of dark:bg-[#353C48]">
          <Link to={"#"}>Dashboard</Link>/<Link to={"#"}>Faculties</Link>/
          <Link to={"#"}>Temp</Link>
        </div>
      </div>
      <div className="chart-progress dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
        <div className="add-link">
          <h1>Faculties List</h1>
          <Link to="/students/addStudent">add Faculties</Link>
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
              className={"dark:bg-[#3B4452] dark:border border border-cyan-600"}
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
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {foculties
                    .filter((users) =>
                      users.title.toLowerCase().includes(search)
                    )
                    .map((item) => {
                      return (
                        <tr key={item.id} className={"even:dark:bg-[#313843]"}>
                          <td>{item.id}</td>
                          <td>
                            <Link to={"#"}>{item.link}</Link>
                          </td>
                          <td>{item.title}</td>
                          <td>{item.students}</td>
                          <td>{item.students_progress}</td>
                          <td className={"td_flex"}>
                            <span className="icons">{<item.star />}</span>
                            <span className="icons">{<item.star />}</span>
                            <span className="icons">{<item.star />}</span>
                            <span className="icons">{<item.star />}</span>
                            <span className="icons">{<item.star />}</span>
                          </td>
                          <td>
                            <div
                              className="w-[100px] h-[35px] border rounded-3xl cursor-pointer flex justify-center items-center bg-[#6777EF] text-[#fff]"
                            >
                              approved
                            </div>
                          </td>
                          <td className={"td_flex"}>
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
    </Container>
  );
};

export default Faculties;
