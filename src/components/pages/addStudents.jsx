import { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";

export const AddStudents = () => {
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
  const docRef = collection(db, "students")
  const sendForm = async () => {

    await addDoc(docRef, {
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
    })
    console.log(docRef);


    return (
      <div className="chart-progress">
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
        <button type="submit" onClick={sendForm}>
          send
        </button>
      </div>
    );
  };
