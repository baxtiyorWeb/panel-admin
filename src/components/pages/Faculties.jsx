import React, { useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { foculties } from "../progress/data";

const Faculties = ({open, setOpen}) => {
  const [search, setSearch] = useState("");
  return (
    <Container open={open} setOpen={setOpen}>
    <div className="around_one">
        <div className="around_user">
          <h2>Faculties</h2>
        </div>
        <div className="around_of">
          <Link>Dashboard</Link>/<Link>Faculties</Link>/<Link>Temp</Link>
        </div>
      </div>
      <div className="chart-progress">
        <div className="add-link">
          <h1>Faculties List</h1>
          <Link to="/students/addStudent">add Faculties</Link>
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
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {foculties
                  .filter((users) => users.title.toLowerCase().includes(search))
                  .map((item) => {
                    return (
                      <tbody key={item.id}>
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            <Link>{item.link}</Link>
                          </td>
                          <td>{item.title}</td>
                          <td>{item.students}</td>
                          <td>{item.students_progress}</td>
                          <td>
                            <span className="icons">{<item.star />}</span>
                            <span className="icons">{<item.star />}</span>
                            <span className="icons">{<item.star />}</span>
                            <span className="icons">{<item.star />}</span>
                            <span className="icons">{<item.star />}</span>
                          </td>
                          <td>{item.freeCollected}</td>
                          <td>
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
    </Container>
  );
};

export default Faculties;
