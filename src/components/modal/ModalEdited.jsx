import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";
import ToggleBtn from "../tables/ToggleBtn";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

const ModalEdited = ({
  // eslint-disable-next-line react/prop-types
  updateId,
  setUpdateId,
  handleDeletingTicket,
  search,
  open,
  setOpen,
}) => {
  const [name, setName] = useState("s");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
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
  const EditTypes = async (id) => {
    setLoading(true);

    await updateDoc(doc(db, "users", id), {
      name: name,
      Email: Email,
      cninc: cninc,
      Mobile: Mobile,
      PreferredTime: PreferredTime,
      Course: Course,
    });
    setUpdateId(id);
    setLoading(false);
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const colRef = collection(db, "users");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setUser(docs);
      setLoading(false);
    })();
  }, [updateId]);
  return (
    <div className="w-[1000px] h-[500px] bg-[#414854] fixed left-[28%] top-[20%] z-10 p-1 rounded-lg shadow-2xl">
      <>
        {loading ? (
          <div className="flex justify-center items-center">
            {" "}
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
            {user.map((item, index) => (
              <div key={item.id}>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="text-[18px] dark:bg-transparent border border-[#767676]"
                  placeholder="edit name"
                  value={item.name}
                />
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[18px] dark:bg-transparent border border-[#767676]"
                  placeholder="edit email"
                  value={item.Email}
                />
                <input
                  type="text"
                  onChange={(e) => setMobile(e.target.value)}
                  className="text-[18px] dark:bg-transparent border border-[#767676]"
                  placeholder="edit mobile number"
                  value={item.Number}
                />
                <input
                  type="text"
                  onChange={(e) => setCninc(e.target.value)}
                  className="text-[18px] dark:bg-transparent border border-[#767676]"
                  placeholder="edit cnic"
                  value={item.cninc}
                />
                <input
                  type="text"
                  onChange={(e) => setCourse(e.target.value)}
                  className="text-[18px] dark:bg-transparent border border-[#767676]"
                  placeholder="edit for course"
                  value={item.Course}
                />
              </div>
            ))}
            <table id="table" className="table table-hover w-full">
              <thead>
                <tr>
                  <th>id</th>
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
                {user
                  .filter((users) => users.name.toLowerCase().includes(search))
                  .map((item, index) => {
                    return (
                      <tr
                        key={item.id}
                        className={
                          "even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                        }
                      >
                        <>
                          <td>{index}</td>
                          <td>{item.name}</td>

                          <td>
                            <ToggleBtn />
                          </td>
                          <td className={"td_flex"}>
                            <span className="icons">
                              {<LiaEdit onClick={() => EditTypes(item.id)} />}
                            </span>
                            <span className="icons">
                              {
                                <MdDelete
                                  onClick={() => handleDeletingTicket(item.id)}
                                />
                              }
                            </span>
                          </td>
                        </>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </>
    </div>
  );
};

export default ModalEdited;
