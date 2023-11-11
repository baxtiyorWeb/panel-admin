import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import "./master.css";
import { db } from "../../../setup/firebase/firebase.jsx";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

const Guestst = () => {
  const [search, setSearch] = useState("");
  const courseRef = collection(db, "guests");
  const [addCourse, setAddCourse] = useState("");
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [editId, setEditId] = useState();
  const param = useParams();
  useEffect(() => {
    (async () => {
      setLoading(true);
      const colRef = collection(db, "guests");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setData(docs);
      setLoading(false);
    })();
  }, [loading, deleteId]);

  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "guests", editId);
      const targetDoc = await getDoc(docRef);
      console.log("targetDoc.data() : ", targetDoc.data());
      return {
        user: setCourses(targetDoc.data()),
      };
    };
    getAllData();
    setLoading(false);
  }, [param, editId]);

  useEffect(() => {
    setAddCourse(courses.add_course);
  }, [courses]);

  const addCourseCategory = async () => {
    setLoading(true);

    await addDoc(courseRef, {
      add_guests: addCourse,
    });
    setLoading(false);
  };

  const courseDelete = async (id) => {
    setLoading(true);
    await deleteDoc(doc(db, "guests", id));
    setDeleteId(id);
    setLoading(false);
    setAddCourse("");
  };

  // const courseEdit = async (id) => {
  //     const edit = params.get('edit')
  //     setParams({
  //         edit: id
  //     })
  //     setEditId(id)
  //     setModal(!modal)

  // }

  // const courseUpdate = async () => {
  //     setLoading(true)
  //     await updateDoc(doc(db, 'guests', editId), {
  //         add_course: addCourse
  //     })
  //     setAddCourse('')
  //     setLoading(false)
  //     setModal(false)
  // }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="div-block dark:bg-[#353C48] dark:border dark:border-[#3b4452]">
        <h2 className="title">Add Enquiry Status</h2>
        <input
          type="text"
          placeholder="title"
          className={"dark:bg-[#3b4452]"}
          onChange={(e) => setAddCourse(e.target.value)}
        />
        <div
          style={{
            width: "90%",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        ></div>

        <div>
          <h3>Detail</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={"dark:bg-[#3b4452]"}
          ></textarea>
        </div>
        <button onClick={addCourseCategory}>submit</button>
      </div>
      <div
        style={{
          width: "65%",
          boxShadow: " 0px 4px 8px 0px rgba(34, 60, 80, 0.2)",
        }}
      >
        <div
          className="around_one dark:border-b dark:border-b-[#3b4452] mb-5"
          style={{
            borderBottom: "1px solid #E1E1E1",
            paddingBottom: "23px",
          }}
        >
          <div className="around_user dark:text-[#96a2b4] text-[25px]">
            <h2>Courses</h2>
          </div>
          <div className="around_of dark:bg-[#3b4452]">
            <Link to={"#"}>Dashboard</Link>/<Link to={"#"}>Course</Link>/
            <Link to={"#"}>Temp</Link>
          </div>
        </div>
        <div className="chart-progress dark:bg-[#353c48]">
          <div className="add-link">
            <h1>Enquiry Status List</h1>
            <Link to="/students/addStudent">add Course</Link>
          </div>
          <div className="user_blew">
            <div className="user_blow">
              <h4>Show</h4>
              <select name="name" id="select" className={"dark:bg-[#3b4452]"}>
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
                      <th> name</th>
                      <th>Designation</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      .filter((users) =>
                        users.add_guests.toLowerCase().includes(search)
                      )
                      .map((item, index) => {
                        return (
                          <tr
                            key={item.id}
                            className={
                              "even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                            }
                          >
                            <td>{index}</td>
                            <td></td>
                            <td>{item.add_guests}</td>
                            <td
                              style={{
                                display: "flex",
                              }}
                            >
                              <span className="icons">{<LiaEdit />}</span>
                              <span
                                className="icons"
                                onClick={() => courseDelete(item.id)}
                              >
                                {<MdDelete />}
                              </span>
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
    </div>
  );
};

export default Guestst;
