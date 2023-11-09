import { useEffect, useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase.jsx";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

const Expenses = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [deteteId, setDeleteId] = useState();
  const [loading, setLoading] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      const colRef = collection(db, "expenses-form");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setUsers(docs);
      setLoading(false);
    })();
  }, [deteteId, loading]);

  const handleDeletingTicket = async (id) => {
    await deleteDoc(doc(db, "expenses-form", id));
    setDeleteId(id);
  };
  return (
    <Container>
      <div className="around_one">
        <div className="around_user dark:text-[#96a2b4] text-[25px]">
          <h2>Expenses</h2>
        </div>
        <div className="around_of dark:bg-[#353C48] ">
          <Link to={"#"}>Dashboard</Link>/<Link to={"#"}>Course</Link>/
          <Link to={"#"}>Temp</Link>
        </div>
      </div>
      <div className="chart-progress dark:bg-[#353C48]">
        <div className="chart-progress dark:bg-[#353C48]">
          <div className="add-link">
            <h1>Course List</h1>
            <Link to="/expenses-form">add Expenses</Link>
          </div>
          <div className="user_blew">
            <div className="user_blow">
              <h4>Show</h4>
              <select name="name" id="select" className={"dark:bg-transparent"}>
                <option className="one_more" value="name">
                  10
                </option>
              </select>
              <h4>entries</h4>
            </div>
            <div className="user_input">
              <h4>Search:</h4>
              <input
                type="text"
                className={"dark:bg-[#3B4452] border border-cyan-600"}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div id="demo">
            <div>
              <div className="table-responsive-vertical shadow-z-1">
                <table
                  id="table"
                  className="table table-hover table-mc-light-blue"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Amount</th>
                      <th>Description</th>
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users
                      .filter((users) =>
                        users.Title.toLowerCase().includes(search)
                      )
                      .map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className={
                              "even:dark:bg-[#313843] even-class dark:hover:bg-[#353C48]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                            }
                          >
                            <td>{index}</td>
                            <td>{item.Dates}</td>
                            <td>{item.Title}</td>
                            <td>{item.Category}</td>
                            <td>{item.cninc}</td>
                            <td>{item.Description}</td>
                            <td>{item.CreatedAt}</td>
                            <td className={"td_flex"}>
                              <span className="icons">{<LiaEdit />}</span>
                              <span
                                className="icons"
                                onClick={() => handleDeletingTicket(item.id)}
                              >
                                {<MdDelete />}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Expenses;
