import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLength } from "../../progress/data";
import { LiaEdit } from "react-icons/lia";
import { BiLike } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Loading } from "../../Loading.jsx";
import Pagination from "../../pagination/Pagination.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../setup/firebase/firebase.jsx";

export const NewStudents = () => {
  const [search, setSearch] = useState("");

  const [page, setpage] = useState(1);

  const [limit, setlimit] = useState(5);

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(false);

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
  useEffect(() => {
    (async () => {
      setLoading(true);
      const colRef = collection(db, "new-students");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setStudents(docs);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="chart-progress  dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
        <div className="add-link">
          <h1>Student List</h1>
          <Link to="/students/add-new-student-form">add Student</Link>
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
            {loading ? (
              <Loading loading={loading} />
            ) : (
              <div className="table-responsive-vertical shadow-z-1 dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
                {students.length === 0 ? (
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#ccc",
                      fontSize: "20px",
                    }}
                  >
                    empty data
                  </h2>
                ) : loading ? (
                  <div className="flex justify-center items-center">
                    {" "}
                    <Loading loading={loading} />
                  </div>
                ) : (
                  <table
                    id="table"
                    className="table table-hover table-mc-light-blue "
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Reg.No</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>CNIC</th>
                        <th>Course</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students
                        .filter((users) =>
                          users.name.toLowerCase().includes(search)
                        )
                        .map((item, index) => {
                          return (
                            <tr
                              key={item.id}
                              className={
                                "even:dark:bg-[#313843] even-class dark:hover:bg-[#353C48]"
                              }
                            >
                              <td>{index}</td>
                              <td>
                                <Link>{item.name}</Link>
                              </td>
                              <td>{item.RegNo}</td>
                              <td>{item.Email}</td>
                              <td>{item.Mobile}</td>
                              <td>{item.cninc}</td>
                              <td>{item.Course}</td>
                              <td>{item.Batch}</td>
                              <td className={"td_flex"}>
                                <span className="icons">
                                  <Link
                                    to={`/students/students-form/${item.id}`}
                                  >
                                    <LiaEdit />
                                  </Link>
                                </span>

                                <span className="icons">
                                  <MdDelete />
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
          <div></div>
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
