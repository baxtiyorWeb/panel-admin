/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../setup/firebase/firebase";
import ClipLoader from "react-spinners/ClipLoader";
// eslint-disable-next-line react/prop-types
const AddFeeReports = () => {
  const [name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Course, setCourse] = useState("");
  const [CourseFee, setCourseFee] = useState("");
  const [PaidFee, setPaidFee] = useState("");
  const [DueFee, setDueFee] = useState("");
  const [Batch, setBatch] = useState("");
  const [CourseAgreedFee, setCourseAgreedFee] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userCollectionRef = collection(db, "fee-reports");

  async function sendForm(e) {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, {
      name: name,
      Mobile: Mobile,
      CourseFee: CourseFee,
      PaidFee: PaidFee,
      Course: Course,
      DueFee: DueFee,
      CourseAgreedFee: CourseAgreedFee,
      Batch: Batch,
    });
    setLoading(false);
    navigate("/reports/fee-reports");
  }

  return (
    <div>
      <div className="chart-progress dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal relative">
        <form onSubmit={sendForm}>
          <div className="add-link">
            <h1 className="font-normal">Enquiry Form</h1>
            <Link to="/reports/fee-reports">Enquiries list</Link>
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
                required={true}
              />
            </div>
            <div className="name">
              <span>Mobile</span>
              <input
                type="text"
                placeholder="+998 xx xxx xx xx"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setMobile(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Course</span>
              <select
                name=""
                id="selection"
                className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
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
            <div className="name">
              <span>Batch</span>
              <input
                type="text"
                placeholder="batch"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setBatch(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Course fee</span>
              <input
                type="text"
                placeholder="33100-0000000-0"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setCourseFee(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Student Agreed Fee</span>
              <input
                type="text"
                placeholder="student agreed fee"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setCourseAgreedFee(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Paid Fee</span>
              <input
                type="Paid Fee"
                placeholder="student agreed fee"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setPaidFee(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Due Fee</span>
              <input
                type="Paid Fee"
                placeholder="student agreed fee"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setDueFee(e.target.value)}
                required={true}
              />
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
export default AddFeeReports;
