import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { db } from "../../../setup/firebase/firebase";
import { SharedModal } from "../../modal/sharedModal";
import Overlay from "../../overlay/overlay";
import { DatePicker } from "antd";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;
const AddNewStudents = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [cninc, setCninc] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [semester, setSemester] = useState("");
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");
  const [groupValue, setGroupValue] = useState("inital data");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const letterCount = groupValue.length;

  const handleTextChange = (e) => {
    setGroupValue(e.target.value.replace(/\s/g, "-"));
  };

  const navigate = useNavigate();
  const userCollectionRef = collection(db, "new-students");

  function sendForm() {
    setOpen(!open);
    console.log(!open);
  }

  const groupAdded = async (e) => {
    e.preventDefault();
    const theRef = doc(db, "groups", `${groupValue}`);
    setLoading(true);
    await addDoc(userCollectionRef, {
      name: name,
      fatherName: fatherName,
      age: age,
      Email: Email,
      cninc: cninc,
      Mobile: Mobile,
      Course: Course,
      PrefferedTime: "",
      date: date,
      gender: gender,
      semester: semester,
      created: false,
    });
    // hayitmurod Qurbonnazarov
    await setDoc(
      theRef,
      {
        students: arrayUnion({
          name: name,
          fatherName: fatherName,
          age: age,
          Email: Email,
          cninc: cninc,
          Mobile: Mobile,
          Course: Course,
          PrefferedTime: "",
          date: date,
          gender: gender,
          semester: semester,
          created: false,
        }),
      },
      { merge: true }
    );

    const coursesRef = collection(db, "courses");

    await setDoc(
      doc(coursesRef, Course),
      {
        students: arrayUnion({
          name: name,
          fatherName: fatherName,
          age: age,
          Email: Email,
          cninc: cninc,
          Mobile: Mobile,
          Course: Course,
          PrefferedTime: "",
          date: date,
          gender: gender,
          semester: semester,
          created: false,
        }),
      },
      { merge: true }
    );

    sendForm();
    navigate("/students/new-students");

    setLoading(false);

    alert("sending groups ");
  };

  return (
    <>
      {open && <Overlay open={open} setOpen={setOpen} />}
      {open && (
        <SharedModal>
          <div className="flex justify-center items-center h-full flex-col">
            <span className="text-3xl mt-3 mb-5">yangi gurux kiriting</span>
            <form
              className="flex justify-center items-center h-full flex-col w-full relative"
              onSubmit={groupAdded}
            >
              <input
                type="text"
                className="p-4 w-[50%] border border-slate-500 bg-transparent text-2xl text-center leading-3 rounded-md focus:border focus:border-slate-400 uppercase"
                onChange={handleTextChange}
                value={groupValue}
                maxLength={15}
                rows={5}
                cols={50}
              />

              <button className="p-5 border border-slate-400 w-[130px] h-[50px] flex justify-center items-center mt-5 rounded-md absolute right-3 bottom-0">
                send
              </button>
            </form>
            {letterCount}
          </div>
        </SharedModal>
      )}
      <div className="chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal relative">
        <div className="add-link mb-10 ">
          <h1>Student Form</h1>
          <Link to="/students/students">Students list</Link>
        </div>
        <div className="text-[#000] text-[18px] dark:text-[#fef3b0] mt-5 mb-5">
          Rgistration Type
        </div>
        <div className="name flex items-start justify-center flex-col">
          <div className="inline items-center ">
            <input
              type="radio"
              id="Direct"
              className="w-1 h-1 !not-sr-only"
              name="gender"
            />
            <label
              htmlFor="Direct"
              className="mr-5 ml-1 opacity-90 text-[16px]"
            >
              Direct
            </label>
          </div>
          <div className="inline items-center ">
            <input
              type="radio"
              id="Enquery"
              className="w-1 h-1 !not-sr-only"
              name="gender"
            />
            <label
              htmlFor="Enquery"
              className="mr-5 ml-1 opacity-90 text-[16px]"
            >
              Enquery
            </label>
          </div>
        </div>
        <div className="input-box">
          <div className="name">
            <span>Name</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
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
            <span>your age</span>
            <input
              type="number"
              placeholder="enter your age"
              className="dark:bg-[#353C48] dark:border"
              onChange={(e) => setAge(e.target.value)}
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
                onChange={() => setGender("male")}
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
                onChange={() => setGender("female")}
              />
              <label htmlFor="Female" className="mr-5 ml-1">
                Female
              </label>
            </div>
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
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="Other" disabled>
                select semester
              </option>
              <option value="1st" id="options">
                1st
              </option>
              <option value="2nd" id="options">
                2nd
              </option>
              <option value="3rd" id="options">
                3rd
              </option>
              <option value="4th" id="options">
                4th
              </option>
              <option value="5th" id="options">
                5th
              </option>
              <option value="6th" id="options">
                6th
              </option>
              <option value="7th" id="options">
                7th
              </option>
              <option value="8th" id="options">
                8th
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
          <div className="name flex items-center  pt-9">
            <RangePicker
              size="large"
              onChange={(values) => {
                setDate(
                  values.map((item) => {
                    console.log(dayjs(item).format("DD-MM-YYYY"));
                    return dayjs(item).format("DD-MM-YYYY");
                  })
                );
              }}
            />
          </div>
          <button
            type="submit"
            onClick={() => setOpen(!open)}
            className={"-g-button"}
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
    </>
  );
};

export default AddNewStudents;
