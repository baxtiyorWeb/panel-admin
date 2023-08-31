import { useState } from "react";
import { Link } from "react-router-dom";
import { uid } from "uid";
import Container from "../shared/Container";
import { ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";

export const AddStudents = ({ open, setOpen }) => {
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
        <form className="chart-progress" onSubmit={(e) => sendForm(e)}>
          <div className="add-link">
            <h1>Enquiry Form</h1>
            <Link to="enquiries">Enquiries list</Link>
          </div>
          <div className="input-box">
            <div className="name">
              <span>Name</span>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Father Name</span>
              <input
                type="text"
                placeholder="Father Name"
                onChange={(e) => setfatherName(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Date of Birth</span>
              <input
                type="date"
                placeholder="name"
                onChange={(e) => setdays(e.target.value)}
              />
            </div>
            <div className="name">
              <span>CNIC</span>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Mobile</span>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setpreffered(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Gender</span>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setsemester(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Preferred Time</span>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Department</span>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setCNIC(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Semester</span>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Course</span>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setDepartment(e.target.value)}
              />
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