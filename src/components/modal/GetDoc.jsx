/* eslint-disable no-unused-vars */
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../setup/firebase/firebase";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import ToggleBtn from "../tables/ToggleBtn";
import { ClipLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const GetDoc = ({ EditTypes, userId, deleteId, setDeleteId }) => {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
    // const [fatherName, setFatherName] = useState("");
    // const [DateBirth, setDateBirth] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [Email, setEmail] = useState("");
    const [cninc, setCninc] = useState("");
    const [Mobile, setMobile] = useState("");
    // const [PreferredTime, setPrefferedTime] = useState("");
    // const [Department, setDepartment] = useState("");
    // const [Semester, setSemester] = useState("");
    const [Course, setCourse] = useState("");
    // const [Mail, setMail] = useState("");
    // const [feMail, setFeMale] = useState("");
  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, `users`, userId);
      const targetDoc = await getDoc(docRef);
      console.log("targetDoc.data() : ", targetDoc.data());
      console.log(userId);
      return { user: setUser(targetDoc.data()) };
    };
    setLoading(false);
    getAllData();
  }, [deleteId]);

  const handleDeletingTicket = async (id) => {
    const setId = await deleteDoc(doc(db, "users", userId));
    setDeleteId(id);
    
    
  };
  return (
    <div>
      <h1 className="text text-center p-5 ">{user.name}</h1>
      <>
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#7e7f81"
            />
          </div>
        ) : (
          <div>
            <div>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="text-[18px] dark:bg-transparent border border-[#767676]"
                placeholder="edit name"
              />
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="text-[18px] dark:bg-transparent border border-[#767676]"
                placeholder="edit email"
              />
              <input
                type="text"
                onChange={(e) => setMobile(e.target.value)}
                className="text-[18px] dark:bg-transparent border border-[#767676]"
                placeholder="edit mobile number"
              />
              <input
                type="text"
                onChange={(e) => setCninc(e.target.value)}
                className="text-[18px] dark:bg-transparent border border-[#767676]"
                placeholder="edit cnic"
              />
              <input
                type="text"
                onChange={(e) => setCourse(e.target.value)}
                className="text-[18px] dark:bg-transparent border border-[#767676]"
                placeholder="edit for course"
              />
            </div>
            <table id="table" className="table table-hover w-full">
              <thead>
                <tr>
                  <th>name</th>
                  <th>email</th>
                  <th>mobile</th>
                  <th>CNIC</th>
                  <th>For Course</th>
                  <th>Pref Time</th>
                  <th>Email status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={
                    "even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                  }
                >
                  <>
                    <td>{user.name}</td>
                    <td>{user.Email}</td>
                    <td>{user.cninc}</td>
                    <td>{user.Course}</td>
                    <td>{user.PrefferedTime}</td>

                    <td>
                      <ToggleBtn />
                    </td>
                    <td className={"td_flex"}>
                      <span className="icons">
                        {<LiaEdit onClick={() => EditTypes(userId)} />}
                      </span>
                      <span className="icons">
                        {
                          <MdDelete
                            onClick={() => handleDeletingTicket(user.userId)}
                          />
                        }
                      </span>
                    </td>
                  </>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </>
      ;
    </div>
  );
};

export default GetDoc;
