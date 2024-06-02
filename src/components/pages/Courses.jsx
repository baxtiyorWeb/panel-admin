import { useEffect, useState } from "react";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetUser } from "../../hooks/useGetUser.js";
import { db } from "../../setup/firebase/firebase.jsx";
import { Loading } from "../Loading.jsx";
import { SharedModal } from "../modal/sharedModal.jsx";
import Overlay from "../overlay/overlay.jsx";
import Pagination from "../pagination/Pagination";
import { getLength } from "../progress/data";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [/*deleteId*/ setDeleteId] = useState();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit /*setlimit*/] = useState(5);
  const [open, setOpen] = useState(false);
  const [courseId, setCourseid] = useState(0);
  const [userGetWithId, setUserGetWithId] = useState([]);
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
      const colRef = collection(db, "courses");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setData(docs);
      setLoading(false);
    })();
  }, []);

  const courseDelete = async (id) => {
    setLoading(true);
    await deleteDoc(doc(db, "courses", id));
    setDeleteId(id);
    setLoading(false);
  };

  const getCoursesInStudents = async (id) => {
    try {
      setOpen(true);
      setLoading(true);
      setCourseid(id);
      const data = await getDoc(doc(db, "courses", id));
      if (data.exists()) {
        setUserGetWithId(data?.data());
        userGetWithId?.students?.map((users) => users?.name);
      } else {
        "!data : ", data?.data();
      }
    } catch (error) {
      error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="around_one"></div>
      {open && <Overlay open={open} setOpen={setOpen} />}
      {open && (
        <SharedModal>
          <div className="m-5 flex h-[90%] flex-col items-center justify-center">
            <div className="container block h-[50%] w-[100%] bg-[#9989] text-[#223345] "></div>
            <ul className="flex h-full w-full  flex-col items-center overflow-y-scroll text-base">
              {loading ? (
                <Loading loading={loading} />
              ) : (
                userGetWithId?.students?.map((users) => {
                  return (
                    <li
                      className="mt-3 grid w-full cursor-pointer grid-cols-3 rounded-md p-3 hover:dark:bg-slate-800"
                      key={users.name}
                    >
                      {users.name}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </SharedModal>
      )}
      <div className="chart-progress font-normal text-[#398dc9] dark:bg-[#353C48] dark:text-[#EEE8CC]">
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
              className={
                "border border-cyan-600 dark:border  dark:bg-[#3B4452]"
              }
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div id="demo">
          <div>
            {loading ? (
              <Loading loading={loading} />
            ) : data.length === 0 ? (
              <h2
                style={{
                  textAlign: "center",
                  color: "#ccc",
                  fontSize: "20px",
                }}
              >
                empty data
              </h2>
            ) : (
              <div className="table-responsive-vertical shadow-z-1">
                <table
                  id="table"
                  className="table-hover table-mc-light-blue table"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Course Title</th>
                      <th>Category</th>
                      <th>Duration</th>
                      <th>Students</th>
                      <th>Pricing</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length ? (
                      userss.user ? (
                        data
                          .filter((users) =>
                            users.students[0].name
                              .toLowerCase()
                              .includes(search),
                          )
                          .map((item, index) => {
                            return (
                              <tr
                                key={index}
                                className={
                                  "even-class even:dark:bg-[#313843] dark:hover:bg-[#353C48]"
                                }
                              >
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.Category}</td>
                                <td>{item.Duration} days</td>
                                <td
                                  className="cursor-pointer hover:dark:bg-slate-600"
                                  onClick={() => getCoursesInStudents(item?.id)}
                                >
                                  {item.students.length}
                                </td>
                                <td>{item.price}</td>
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
                      <div className={"mb-[15px] mt-[0] "}>
                        <div className={"absolute left-[55%] text-[20px]"}>
                          Empty Data
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            )}
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
