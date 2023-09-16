import { useState } from "react";
import "../Enquiries.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uid } from "uid";
import { set } from "lodash";
import { db } from "../../../firebase/firebase";
import { ref } from "firebase/database";
import ComboBox from "../../combobox/ComboBox";
const AddCourse = () => {
  const [name, setname] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [days, setdays] = useState("");
  const [mobile, setMobile] = useState("");
  const [preffered, setpreffered] = useState("");
  const [semester, setsemester] = useState("");
  const [course, setCourse] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [Gender, setGender] = useState("");
  const [Department, setDepartment] = useState("");
  const notify = () => toast("send your form");
  function sendForm(e) {
    e.preventDefault();
    const uuid = uid();

    set(ref(db, "/form/" + uuid), {
      names: name,
      fatherName: fatherName,
      days: days,
      mobile: mobile,
      preffered: preffered,
      semester: semester,
      course: course,
      CNIC: CNIC,
      Gender: Gender,
      Department: Department,
    });
  }

  return (
    <div>
      <form
        className="chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal"
        onSubmit={(e) => sendForm(e)}
      >
        <div className="add-link mb-10 ">
          <h1>Add Course Form</h1>
          <Link to="/courses/courses">Students list</Link>
        </div>
        <div className="text-[#000] text-[18px] dark:text-[#fef3b0] mt-5 mb-5">
          Batch title
        </div>

        <div className="input-box">
          <div className="name">
            <span>course title</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="name">
            <span>course short code</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="name">
            <span>selectcourse category</span>
            {/* <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setname(e.target.value)}
            /> */}
            <ComboBox />
          </div>
          <div className="name">
            <span>course image</span>
            <input
              type="file"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Duration</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Duration type</span>
            <ComboBox />
          </div>
        </div>

        <button type="submit" onClick={notify}>
          send
        </button>
        <ToastContainer autoClose={2000} />
      </form>
    </div>
  );
};
export default AddCourse;
