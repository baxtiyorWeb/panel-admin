/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
const Tables = ({ search }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [toggle, setToggle] = useState();
  const [activeId, setActiveId] = useState()
  const param = useParams('userEditId')
  // get user about 

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
  }, [deleteId, activeId]);



  //  delete user
  const handleDeletingTicket = async (id) => {
    await deleteDoc(doc(db, "users", id));
    setDeleteId(id);
  };
  // delete user function success end


  const userId = searchParams.get("userId");
  const openFunction = (id) => {
    setSearchParams({ userId: id });
    setOpen(!open ? true : false);
  };
  useEffect(() => {
    console.log(userId + "null");
  }, [userId]);


  // active or no-active 
  const userIds = searchParams.get(`userEditId`);
  const emailStatus = async (id) => {
    const userCollectionRef = collection(db, "users", param.userEditId);
    toggle ? setToggle(false) : setToggle(true);
    setSearchParams({ userEditId: id })
    setActiveId(id)
    await setDoc((userCollectionRef), {
      active: toggle
    });



  };
  useEffect(() => {
    console.log(userIds, ": activedID")
  }, [userIds])
  return (
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
                          <span className="cursor-pointer " onClick={() => emailStatus(item.id)}>{item.active}active</span>
                        </td>
                        <td className={"td_flex"}>
                          <span className="icons">
                            <Link to={`/editform/${item.id}`}>
                              <LiaEdit onClick={() => openFunction(item.id)} />
                            </Link>
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
  );
};

export default Tables;
