import { useState } from "react";
import { Link } from "react-router-dom";
import { active, getLength } from "../progress/data";
import Pagination from "../pagination/Pagination";

const Active = () => {
  const [search, setSearch] = useState("");
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(5);
  let totalPage = Math.ceil(getLength() / limit);

  function handlePageChange(value) {
    if (value === "&laquo;" || value === "... ") {
      setpage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setpage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setpage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setpage(totalPage);
    } else {
      setpage(value);
    }
  }

  // const [pagination, setPagination] = useState("");
  return (
    <>
      <div className="chart-progress  dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
        <div className="add-link">
          <h1>Student List</h1>
          <Link to="/students/addStudent">add Student</Link>
        </div>
        <div className="user_blew">
          <div className="user_blow">
            <h4>Show</h4>
            <select name="name" id="select" className="dark:bg-[#3B4452]">
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
              className="dark:bg-[#3B4452] border border-cyan-600"
            />
          </div>
        </div>
        <div id="demo">
          <div>
            <div className="table-responsive-vertical shadow-z-1 dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
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
                <tbody>
                  {active
                    .filter((users) =>
                      users.title.toLowerCase().includes(search)
                    )
                    .map((item) => {
                      return (
                        <tr key={item.id} className={"even:dark:bg-[#313843]"}>
                          <td>{item.id}</td>
                          <td>
                            <Link to={"#"}>{item.freeCollected}</Link>
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
                      );
                    })}
                </tbody>
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
        <div className="flex justify-end">
          <Pagination
            totalPage={totalPage}
            page={page}
            limit={limit}
            sibling={1}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Active;
