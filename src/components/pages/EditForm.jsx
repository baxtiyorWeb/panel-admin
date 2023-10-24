/* eslint-disable react/prop-types */
import Container from "../shared/Container";
import { Link, useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../setup/firebase/firebase";
import { DatePicker, Select, Space, TimePicker } from 'antd';

const { Option } = Select;

const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

export const EditForm = () => {
  const params = useParams("userId");
  console.log(params);
  const navigate = useNavigate();
  function timeOut() {
    setTimeout(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      navigate("/enquiries");
    }, 500);
  }

  const [type, setType] = useState('time');
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [DateBirth, setDateBirth] = useState("");
  const [Email, setEmail] = useState("");
  const [cninc, setCninc] = useState("");
  const [Mobile, setMobile] = useState("");
  const [time, setTime] = useState("");
  const [Course, setCourse] = useState("");
  const [EditedId, setEditedId] = useState();
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "users", params.userId);
      const targetDoc = await getDoc(docRef);
      console.log("targetDoc.data() : ", targetDoc.data());
      return { user: setUser(targetDoc.data()) };
    };
    setLoading(false);
    getAllData();
  }, [params]);

  console.log(user)

  useEffect(() => {
    setName(user.name);
    setEmail(user.Email);
    setCninc(user.cninc);
    setMobile(user.Mobile);
    setTime(user.PrefferedTime);
    setCourse(user.Course);
    setCourse(user.Course);
  }, [user, EditedId]);

  const editFunction = async (userId) => {
    setLoading(true);
    await updateDoc(doc(db, "users", params.userId), {
      name: name,
      Email: Email,
      Mobile: Mobile,
      DateBirth: DateBirth,
      cninc: cninc,
      Course: Course,
      PrefferedTime: time
    });
    setEditedId(userId);
    setLoading(false);
  };


  return (
    <Container>
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
                value={name || ""}
              />
            </div>
            <div className="name">
              <span>Father Name</span>
              <input
                type="text"
                placeholder="Father Name"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setFatherName(e.target.value)}
                value={fatherName || ""}
              />
            </div>
            <div className="name">
              <span>Date of Birth</span>
              <input
                type="date"
                placeholder="name"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setDateBirth(e.target.value)}
                value={DateBirth || ""}
              />
            </div>
            <div className="name">
              <span>Email</span>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setEmail(e.target.value)}
                value={Email || ""}
              />
            </div>
            <div className="name">
              <span>CNIC</span>
              <input
                type="text"
                placeholder="33100-0000000-0"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setCninc(e.target.value)}
                value={cninc || ""}
              />
            </div>
            <div className="name">
              <span>Mobile</span>
              <input
                type="text"
                placeholder="+998 xx xxx xx xx"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setMobile(e.target.value)}
                value={Mobile || ""}
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
              <Space>
                <Select value={type} onChange={setType}>
                  <Option value="time">Time</Option>
                  <Option value="date">Date</Option>
                  <Option value="week">Week</Option>
                  <Option value="month">Month</Option>
                  <Option value="quarter">Quarter</Option>
                  <Option value="year">Year</Option>
                </Select>
                <PickerWithType type={type} onChange={(value) => setTime(value)} />
              </Space>
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
                onChange={(e) => setCourse(e.target.value)}
                value={Course}
              >
                <option> </option>
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
            onClick={() => editFunction(params.userId && timeOut())}
          >
            {loading ? "loading..." : "edited"}
          </button>
        </div>
      </div>
    </Container>
  );
};
