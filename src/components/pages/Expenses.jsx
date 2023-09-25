import { useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { Courses_time } from "../progress/data";
import ToggleBtn from "../tables/ToggleBtn";

const Expenses = () => {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <div className="around_one">
        <div className="around_user dark:text-[#96a2b4] text-[25px]">
          <h2>Expenses</h2>
        </div>
        <div className="around_of dark:bg-[#353C48] ">
          <Link to={"#"}>Dashboard</Link>/<Link to={"#"}>Course</Link>/
          <Link to={"#"}>Temp</Link>
        </div>
      </div>
      <div className="chart-progress dark:bg-[#353C48]">
        <div className="chart-progress dark:bg-[#353C48]">
          <div className="add-link">
            <h1>Course List</h1>
            <Link to="/students/addStudent">add Expenses</Link>
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
                className={"dark:bg-[#3B4452] border border-cyan-600"}
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
                      <th>Course Title</th>
                      <th>Category</th>
                      <th>Duration</th>
                      <th>Fee</th>
                      <th>Students</th>
                      <th>Faculties</th>
                      <th>Batches</th>
                      <th>Email Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Courses_time.filter((users) =>
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
                          <td>
                            <Link to={"#"}>{item.link}</Link>
                          </td>
                          <td>{item.title}</td>
                          <td>{item.students}</td>
                          <td>{item.students_progress}</td>
                          <td>{item.star}</td>
                          <td>{item.freeCollected}</td>
                          <td>{item.number}</td>
                          <td>{<ToggleBtn />}</td>
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
      </div>
    </Container>
  );
};

export default Expenses;
