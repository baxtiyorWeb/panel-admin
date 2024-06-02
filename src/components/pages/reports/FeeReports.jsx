import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../setup/firebase/firebase";

export const FeeReports = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const colRef = collection(db, "fee-reports");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data;
        data.id = doc.id;
        return data;
      });
      setUser(docs);
      setLoading(false);
    })();
  }, []);
  //   [deleteId, toggle, activeId]);
  return (
    <>
      <div className="chart-progress dark:bg-[#353c48]">
        <div className="add-link">
          <h1>Fee reports List</h1>
          <Link to="/reports/addReports-form">add Expenses</Link>
        </div>
        <div className="user_blew">
          <div className="user_blow">
            <h4>Show</h4>
            <select name="name" id="select" className={"dark:bg-[#353c48]"}>
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
              className={"border border-cyan-600 dark:bg-[#3B4452]"}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div id="demo">
          <div>
            <div className="table-responsive-vertical shadow-z-1">
              {loading ? (
                "loading"
              ) : (
                <table
                  id="table"
                  className="table-hover table-mc-light-blue table"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Course</th>
                      <th>Batch</th>
                      <th>CourseFee</th>
                      <th>Student Agreed Fee</th>
                      <th>Paid Fee</th>
                      <th>Due Fee</th>
                    </tr>
                  </thead>

                  <tbody>
                    {user
                      .filter((users) =>
                        users.name.toLowerCase().includes(search),
                      )
                      .map((item, index) => {
                        return (
                          <tr
                            key={item.id}
                            className={
                              "font-normal  text-[#398dc9] even:hover:bg-[#E7E9EB] dark:bg-[#353C48] dark:text-[#EEE8CC] even:dark:bg-[#313843]"
                            }
                          >
                            <td>{index}</td>
                            <td>
                              <Link to={"#"}>{item.name}</Link>
                            </td>
                            <td>{item.Mobile}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td>{item.CourseFee}</td>
                            <td>{item.CourseAgreedFee}</td>
                            <td>{item.PaidFee}</td>
                            <td>{item.DueFee}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
