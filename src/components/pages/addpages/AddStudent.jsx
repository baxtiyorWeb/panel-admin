import { useState } from "react";
import "../Enquiries.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uid } from "uid";
import { set } from "lodash";
import { db } from "../../../firebase/firebase";
import { ref } from "firebase/database";
const AddStudent = () => {
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
        className="chart-progress dark:bg-[#353C48]"
        onSubmit={(e) => sendForm(e)}
      >
        <div className="add-link">
          <h1>Enquiry Form</h1>
          <Link to="/enquiries">Students list</Link>
        </div>
        <div className="input-box">
          <div className="name">
            <span>Gender</span>
            <div className="flex items-center border w-full">
              <input
                type="radio"
                id="Male"
                className="w-1 h-1 !not-sr-only"
                name="gender"
              />
              <label htmlFor="Male" className="mr-5 ml-1">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="Female"
                className="w-1 h-1 !not-sr-only"
                name="gender"
              />
              <label htmlFor="Female" className="mr-5 ml-1">
                Female
              </label>
            </div>
          </div>
          <div className="name">
            <span>Name</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Father Name</span>
            <input
              type="text"
              placeholder="Father Name"
              onChange={(e) => setfatherName(e.target.value)}
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Date of Birth</span>
            <input
              type="date"
              placeholder="name"
              onChange={(e) => setdays(e.target.value)}
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Email</span>
            <input
              type="text"
              placeholder="abc@gmail.com"
              onChange={(e) => setMobile(e.target.value)}
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>CNIC</span>
            <input
              type="text"
              placeholder="33100-0000000-0"
              onChange={(e) => setpreffered(e.target.value)}
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Mobile</span>
            <input
              type="text"
              placeholder="+998 xx xxx xx xx"
              onChange={(e) => setpreffered(e.target.value)}
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Gender</span>
            <div>
              <input
                type="radio"
                id="Male"
                className="w-1 h-1 !not-sr-only"
                name="gender"
              />
              <label htmlFor="Male" className="mr-5 ml-1">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="Female"
                className="w-1 h-1 !not-sr-only"
                name="gender"
              />
              <label htmlFor="Female" className="mr-5 ml-1">
                Female
              </label>
            </div>
          </div>
          <div className="name">
            <span>Preferred Time</span>
            <input
              type="text"
              placeholder="2:15"
              onChange={(e) => setCourse(e.target.value)}
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Department</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green] cursor-pointer dark:text-[#fff] text-[16px] p-3 "
            >
              <option value="Other" disabled>
                Select department
              </option>
              <option value="Other" id="options">
                Other1
              </option>
              <option value="Other" id="options">
                Other2
              </option>
              <option value="Other" id="options">
                Other3
              </option>
              <option value="Other" id="options">
                Other4
              </option>
            </select>
          </div>
          <div className="name">
            <span>Semester</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green] cursor-pointer dark:text-[#fff] text-[16px] p-3 "
            >
              <option value="Other" disabled>
                select semester
              </option>
              <option value="Other" id="options">
                Other1
              </option>
              <option value="Other" id="options">
                Other2
              </option>
              <option value="Other" id="options">
                Other3
              </option>
              <option value="Other" id="options">
                Other4
              </option>
            </select>
          </div>

          <div className="name">
            <span>Course</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
            >
              <option value="Other" disabled>
                Select Course
              </option>
              <option value="Other" id="options">
                Other1
              </option>
              <option value="Other" id="options">
                Other2
              </option>
              <option value="Other" id="options">
                Other3
              </option>
              <option value="Other" id="options">
                Other4
              </option>
            </select>
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
export default AddStudent;
