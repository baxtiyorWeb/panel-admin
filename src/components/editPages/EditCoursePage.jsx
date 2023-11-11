/* eslint-disable react/prop-types */
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../setup/firebase/firebase";

// eslint-disable-next-line react/prop-types

const EditCoursePage = () => {
  const params = useParams("userId");
  const navigate = useNavigate();

  function timeOut() {
    setTimeout(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      navigate("/enquiries");
    }, 500);
  }

  const [user, setUser] = useState([]);
  const [Category, setCategory] = useState("");
  const [Fee, setFee] = useState("");
  const [Duration, setDuration] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Course, setCourse] = useState("");
  const [EditedId, setEditedId] = useState();
  const [loading, setLoading] = useState(false);

  // time picker format

  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "Courses", params.id);
      const targetDoc = await getDoc(docRef);
      return { user: setUser(targetDoc.data()) };
    };
    setLoading(false);
    getAllData();
  }, [params]);

  useEffect(() => {
    setFee(user.Mobile);
    setDuration(user.duration);
    setCourse(user.Course);
    setCategory(user.Category);
  }, [user, EditedId]);

  const editFunction = async (id) => {
    setLoading(true);
    await updateDoc(doc(db, "Courses", params.id), {
      Mobile: Mobile,
      Duration: Duration,
      Course: Course,
      Category: Category,
    });
    setEditedId(id);
    setLoading(false);
  };
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
            <span>Course</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
              onChange={(e) => setCourse(e.target.value)}
              value={Course || ""}
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
            <span>Select Category</span>
            <div className="name">
              <select
                name=""
                id="selection"
                className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
                onChange={(e) => setCategory(e.target.value)}
                value={Category || ""}
              >
                <option>Devvelopment</option>
                <option>Teacher</option>
                <option>student</option>
              </select>
            </div>
          </div>
          <div className="name">
            <span>Duration</span>
            <input
              type="number"
              placeholder="duration"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setDuration(e.target.value)}
              value={Duration || ""}
            />
          </div>
          <div className="name">
            <span>Fee</span>
            <input
              type="text"
              placeholder="add fee"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setMobile(e.target.value)}
              value={Mobile || ""}
            />
          </div>
          <div className="name">
            <span>students</span>
            <input
              type="text"
              placeholder="add students index"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>batches</span>
            <input
              type="text"
              className="dark:bg-[#353C48] dark:border"
              placeholder={"add batch index"}
            />
          </div>
        </div>
        <button type="submit" className={"-g-button"} onClick={editFunction}>
          {/* <ClipLoader
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#fff"
          /> */}
        </button>
      </div>
    </div>
  );
};
export default EditCoursePage;
