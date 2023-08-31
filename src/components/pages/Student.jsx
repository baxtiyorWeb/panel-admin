import { useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import "./Students.css";
import { studentss } from "../progress/data";

// eslint-disable-next-line react/prop-types
const Student = ({ open }) => {
  const [search, setSearch] = useState("");
  return (
    <Container open={open}>
      <div className="around_one">
        <div className="around_user">
          <h2>Students</h2>
        </div>
        <div className="around_of">
          <Link>Dashboard</Link>/<Link>Dashboard</Link>/<Link>Home</Link>
        </div>
      </div>

      <div className="chart-progress">
        <div className="add-link">
          <h1>Enquiries</h1>
          <Link to="/students/addStudent">add student</Link>
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
                    <th>Email</th>
                    <th>mobile</th>
                    <th>CNIC</th>
                    <th>For Course</th>
                    <th>Pref Time</th>
                    <th>Email status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {studentss
                  .filter((users) => users.names.toLowerCase().includes(search))
                  .map((item) => {
                    return (
                      <tbody key={item.id}>
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            <Link>{item.names}</Link>
                          </td>
                          <td>{item.RedNo}</td>
                          <td>{item.Email}</td>
                          <td>{item.Mobile}</td>
                          <td>{item.CNIC}</td>
                          <td>{item.Batch}</td>
                          <td>
                            <span className="icons">{<item.Action />}</span>
                            <span className="icons">{<item.Like />}</span>
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

export default Student;
