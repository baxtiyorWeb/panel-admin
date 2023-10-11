import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Students.css";
import { getLength, } from "../progress/data";
import Pagination from "../pagination/Pagination";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";

// eslint-disable-next-line react/prop-types
const Student = () => {
  const [search, setSearch] = useState("");
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(5);
  const [students, setStudents] = useState([])
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

  let emptyPage;
  if (page <= totalPage || page >= totalPage) {
    emptyPage = page;
  } else {
    setpage(emptyPage);
    emptyPage = page;
  }

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "students");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setStudents(docs)
    })();
  }, []);
  return (
    <div className={"dark:bg-[#353C48]"}>
      <div className="chart-progress dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
        <div className="add-link">
          <h1>Enquiries</h1>
          <Link to="/students/addStudent">add student</Link>
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
                    <th>Name</th>
                    <th>Reg.No</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>CNIC</th>
                    <th>Course</th>
                    <th>Batch</th>
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
                        <tr key={item.id} className={"even:dark:bg-[#313843]"}>
                          <td>{index}</td>
                          <td>
                            <Link>{item.name}</Link>
                          </td>
                          {/* <td>{item.RedNo}</td> */}
                          <td>{item.Email}</td>
                          <td>{item.Mobile}</td>
                          <td>{item.cninc}</td>
                          <td>{item.Batch}</td>
                          <td></td>
                          {/* <td className={"td_flex"}>
                            <span className="icons">{<item.Action />}</span>
                            <span className="icons">{<item.Like />}</span>
                          </td> */}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
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
    </div>
  );
};

export default Student;
