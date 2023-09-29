import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Enquiries.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";
import ClipLoader from "react-spinners/ClipLoader";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { uid } from "uid";
// eslint-disable-next-line react/prop-types

const AddForm = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [DateBirth, setDateBirth] = useState("");
  const [Email, setEmail] = useState("");
  const [cninc, setCninc] = useState("");
  const [Mobile, setMobile] = useState("");
  const [PreferredTime, setPrefferedTime] = useState("");
  const [Department, setDepartment] = useState("");
  const [Semester, setSemester] = useState("");
  const [Course, setCourse] = useState("");
  const [Mail, setMail] = useState("");
  const [feMail, setFeMale] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userCollectionRef = collection(db, "users");
  async function sendForm(e) {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, {
      name: name,
      Email: Email,
      cninc: cninc,
      Mobile: Mobile,
      PreferredTime: PreferredTime,
      Course: Course,
      edit: "LiaEdit",
      delete: "MdDelete",
    });
    setLoading(false);
    navigate("/enquiries");
  }
  return (
    <div>
      <div className="chart-progress dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal relative">
        <div className="add-link">
          <button>delete</button>
          <h1 className="font-normal">Enquiry Form</h1>
          <Link to="/enquiries">Enquiries list</Link>
        </div>
        <div className="input-box">
          <div className="name">
            <span>Name</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              id="newNotes"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Father Name</span>
            <input
              type="text"
              placeholder="Father Name"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Date of Birth</span>
            <input
              type="date"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setDateBirth(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Email</span>
            <input
              type="text"
              placeholder="abc@gmail.com"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="name">
            <span>CNIC</span>
            <input
              type="text"
              placeholder="33100-0000000-0"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setCninc(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Mobile</span>
            <input
              type="text"
              placeholder="+998 xx xxx xx xx"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setMobile(e.target.value)}
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
                onChange={(e) => setMail(e.target.value)}
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
                onChange={(e) => setFeMale(e.target.value)}
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
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setPrefferedTime(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Department</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green] cursor-pointer dark:text-[#fff] text-[16px] p-3 "
              onChange={(e) => setDepartment(e.target.value)}
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
              onChange={(e) => setSemester(e.target.value)}
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
              onChange={(e) => setCourse(e.target.value)}
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
        <button
          type="submit"
          onClick={sendForm}
          style={{
            width: "80px",
            height: "30px",
            backgroundColor: "#6777ef",
            borderColor: "transparent",
            color: "#fff",
            padding: "0.1rem 0.4rem",
            fontSize: "12px",
            cursor: "pointer",
            borderRadius: "3px",
            position: "absolute",
            right: "0px",
            bottom: "5px",
          }}
        >
          {loading ? (
            <ClipLoader
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#fff"
            />
          ) : (
            "send"
          )}
        </button>
      </div>
    </div>
  );
};
export default AddForm;
