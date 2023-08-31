import { useState } from "react";
import { Link } from "react-router-dom";
import { active } from "../progress/data";
import Container from "../shared/Container";
const Active = ({ open, setOpen }) => {
  const [search, setSearch] = useState("");
  // const [pagination, setPagination] = useState("");
  return (
    <>
      <div className="dashboard-user">
        <div className="fruit">
          <h2>Students</h2>
        </div>
        <div className="fruit-user">
          <Link>Dashboard</Link>/<Link>Dashboard</Link>/<Link>Home</Link>
        </div>
      </div>
      <div className="chart-progress">
        <div className="add-link">
          <h1>Student List</h1>
          <Link to="/layout/addform">add enquirie</Link>
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
                    <th>Reg.No.</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>CNIC</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {active
                  .filter((users) => users.title.toLowerCase().includes(search))
                  .map((item) => {
                    return (
                      <tbody key={item.id}>
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            <Link>{item.freeCollected}</Link>
                          </td>
                          <td>{item.freeDue}</td>
                          <td>{item.link}</td>
                          <td></td>
                          <td>{item.start_Date}</td>
                          <td>{item.students_progress}</td>
                          <td>{item.title}</td>
                          <td className="td_flex">
                            <span className="icons">{<item.edit />}</span>
                            <span className="icons">{<item.delete />}</span>
                            <span className="icons">{<item.dislike />}</span>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
          <div>
            <ul>
              <li
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid blue",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                0
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Active;
