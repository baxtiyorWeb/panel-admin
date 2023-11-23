import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getLength } from "../progress/data";
import Pagination from "../pagination/Pagination";
import { useGetUser } from "../../hooks/useGetUser.js";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase.jsx";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");
  const [deleteId, setDeleteId] = useState();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(5);
  let totalPage = Math.ceil(getLength() / limit);

  function handlePageChange(value) {
    if (value === "&laquo;" || value === "... ") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  let emptyPage;
  if (page <= totalPage || page >= totalPage) {
    emptyPage = page;
  } else {
    setPage(emptyPage);
    emptyPage = page;
  }
  const userss = useGetUser();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const colRef = collection(db, "Courses");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setData(docs);
      setLoading(false);
    })();
  }, [loading, data]);

  const courseDelete = async (id) => {
    setLoading(true);
    await deleteDoc(doc(db, "Courses", id));
    setDeleteId(id);
    setLoading(false);
  };

  return (
    <>
      <div className="around_one "></div>
      <div className="chart-progress dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
        <div className="add-link">
          <h1>Course List</h1>
          <Link to="/courses/add-course">add Course</Link>
        </div>
        <div className="user_blew">
          <div className="user_blow">
            <h4>Show</h4>
            <select name="name" id="select" className={"dark:bg-[#353C48]"}>
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
                    <th>Course Title</th>
                    <th>Category</th>
                    <th>Duration</th>
                    <th>Students</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length ? (
                    userss.user ? (
                      data
                        .filter((users) =>
                          users.Course.toLowerCase().includes(search)
                        )
                        .map((item, index) => {
                          return (
                            <tr
                              key={index}
                              className={
                                "even:dark:bg-[#313843] even-class dark:hover:bg-[#353C48]"
                              }
                            >
                              <td>{index}</td>
                              <td>{item.Course}</td>
                              <td>{item.Category}</td>
                              <td>{item.Duration} days</td>
                              <td>{item.Students.length}</td>
                              <td className={"td_flex"}>
                                <span className="icons">
                                  <Link to={`/courses/edit/${item.id}`}>
                                    {<LiaEdit />}
                                  </Link>
                                </span>
                                <span
                                  className="icons"
                                  onClick={() => courseDelete(item.id)}
                                >
                                  {<MdDelete />}
                                </span>
                              </td>
                            </tr>
                          );
                        })
                    ) : (
                      <div>
                        {userss.user ? (
                          ""
                        ) : (
                          <button onClick={() => userss.navigate("/login")}>
                            login
                          </button>
                        )}
                      </div>
                    )
                  ) : (
                    <div className={"mt-[0] mb-[15px] "}>
                      <div className={"absolute left-[55%] text-[20px]"}>
                        Empty Data
                      </div>
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
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

export default Courses;
