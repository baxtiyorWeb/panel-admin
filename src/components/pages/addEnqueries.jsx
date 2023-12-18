/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Enquiries.css";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";
import ClipLoader from "react-spinners/ClipLoader";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import useRealTimeDatabase from "../../hooks/useRealTimeDatabase";
// eslint-disable-next-line react/prop-types
const AddForm = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [cninc, setCninc] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [dateBirth, setDateBirth] = useState("");
  const navigate = useNavigate();
  const userCollectionRef = collection(db, "users");
  const [time, setTime] = useState("");
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const user_about = useRealTimeDatabase();
  async function sendForm(e) {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, {
      name: name,
      Email: Email,
      cninc: cninc,
      Mobile: Mobile,
      Course: Course,
      edit: "LiaEdit",
      delete: "MdDelete",
      dateBirth: dateBirth,
      PrefferedTime: time,
    });
    setLoading(false);
    navigate("/enquiries");

    await user_about.writeUserData(name);
  }

  const format = "HH:mm";

  return (
    <div>
      <div className="chart-progress relative font-normal text-[#34395e] dark:bg-[#353C48] dark:text-[#EEE8CC]">
        <form onSubmit={sendForm}>
          <div className="add-link">
            <h1 className="font-normal">Enquiry Form</h1>
            <Link to="/enquiries">Enquiries list</Link>
          </div>
          <div className="input-box">
            <div className="name">
              <span>Name</span>
              <input
                type="text"
                placeholder="name"
                className="dark:border dark:bg-[#353C48]"
                id="newNotes"
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Father Name</span>
              <input
                type="text"
                placeholder="Father Name"
                className="dark:border dark:bg-[#353C48]"
              />
            </div>
            <div className="name">
              <span>Date of Birth</span>
              <DatePicker
                onChange={(e) => setDateBirth(e.format("DD/MM/YYYY"))}
              />
            </div>
            <div className="name">
              <span>Email</span>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="dark:border dark:bg-[#353C48]"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>CNIC</span>
              <input
                type="text"
                placeholder="33100-0000000-0"
                className="dark:border dark:bg-[#353C48]"
                onChange={(e) => setCninc(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Mobile</span>
              <input
                type="text"
                placeholder="+998 xx xxx xx xx"
                className="dark:border dark:bg-[#353C48]"
                onChange={(e) => setMobile(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Gender</span>
              <div>
                <input
                  type="radio"
                  id="Male"
                  className="!not-sr-only h-1 w-1"
                  name="gender"
                />
                <label htmlFor="Male" className="ml-1 mr-5">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Female"
                  className="!not-sr-only h-1 w-1"
                  name="gender"
                />
                <label htmlFor="Female" className="ml-1 mr-5">
                  Female
                </label>
              </div>
            </div>
            <div className="name">
              <span>Preferred Time</span>
              <TimePicker
                defaultValue={dayjs(`${hours}: ${minutes}`, format)}
                format={format}
                onChange={(e) => setTime(e.format("HH:mm A"))}
                required={true}
              />
            </div>
            <div className="name">
              <span>Department</span>
              <select
                name=""
                id="selection"
                className="cursor-pointer p-3 text-[16px] dark:border dark:border-[1px_solid_green] dark:bg-[#353C48] dark:text-[#fff] "
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
                className="cursor-pointer p-3 text-[16px] dark:border dark:border-[1px_solid_green] dark:bg-[#353C48] dark:text-[#fff] "
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
                className="p-3 text-[16px] dark:border  dark:border-[1px_solid_green] dark:bg-[#353C48] dark:text-[#fff] "
                onChange={(e) => setCourse(e.target.value)}
                value={Course}
              >
                <option></option>
                <option>Modern Web App Development</option>
                <option>Android Application Development</option>
                <option>Advanced Graphics Designing</option>
                <option>Microsoft Office Professional</option>
                <option>Adobe Illustrator</option>
                <option>Testing MT 2</option>
                <option>Bootcamp</option>
                <option>Android Test</option>
                <option>digital marketing</option>
                <option>Front end</option>
                <option>Back end</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
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
        </form>
      </div>
    </div>
  );
};
export default AddForm;
