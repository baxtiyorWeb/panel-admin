/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleBtn from "./ToggleBtn";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import ModalEdited from "../modal/ModalEdited";
const Tables = ({ search }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(false);

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
  }, [deleteId]);

  const handleDeletingTicket = async (id) => {
    await deleteDoc(doc(db, "users", id));
    setDeleteId(id);
  };
  return (
    <>
      <>
        {loading ? (
          <div className="flex justify-center items-center">
            {" "}
            <ClipLoader
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#fff"
            />
          </div>
        ) : (
          <div>
            {open && <ModalEdited />}
            <table id="table" className="table table-hover ">
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
                          <td>{item.Email}</td>
                          <td>{item.Mobile}</td>
                          <td>{item.cninc}</td>
                          <td>{item.Course}</td>
                          <td>{item.PreferredTime}</td>
                          <td>
                            <ToggleBtn />
                          </td>
                          <td className={"td_flex"}>
                            <span className="icons">
                              {
                                <LiaEdit
                                  onClick={() => setOpen(!open ? true : false)}
                                />
                              }
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
    </>
  );
};

export default Tables;
