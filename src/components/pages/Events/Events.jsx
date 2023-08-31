import { Container } from "postcss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Event_book, Event_book_two } from "../../progress/data";

const Events = ({ open, setOpen }) => {
  const [search, setSearch] = useState("");

  
  return (
    <>
    <div className="around_one" style={{
        borderBottom: "1px solid #E1E1E1",
        paddingBottom: "23px"
    }}>
        <div className="around_user">
          <h2>Courses</h2>
        </div>
        <div className="around_of">
          <Link>Dashboard</Link>/<Link>Course</Link>/<Link>Temp</Link>
        </div>
      </div>
      <div className="chart-progress">
        <div className="add-link">
          <h1>Course List</h1>
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
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {Event_book_two.filter((users) =>
                  users.title.toLowerCase().includes(search)
                ).map((item) => {
                  return (
                    <tbody key={item.id}>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.students}</td>
                        <td style={{
                            display: "flex"
                        }}>
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
  </>
  );
};

export default Events;
