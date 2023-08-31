import { useState } from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import "./Enquiries.css";
import { enqueryList } from "../progress/data";
// import { onValue, ref } from "firebase/database";
// import { db } from "../../firebase/firebase";
// import { uid } from "uid";
// eslint-disable-next-line react/prop-types
const Enqueries = ({ open, setOpen }) => {
  // const [read, setRead] = useState([]);
  //   const [page, setPage] = useState(11);
  // const uuid = uid();
  // useEffect(() => {
  //   onValue(ref(db, `/form/`+uuid), (snapshot) => {
  //     const data = snapshot.val();
  //     if (snapshot.exists()) {
  //       Object.values(data).map((read) => {
  //         setRead((oldArray) => [...oldArray, read]);
  //         console.log(snapshot.val());
  //       });
  //     }
  //   });
  // }, []);
  function pagination() {}
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Container open={open} setOpen={setOpen}>
      <div className="dashboard-user">
        <div
          className="fruit"
          style={{
            marginTop: "10px",
          }}
        >
          <h2>Enquiries</h2>
        </div>
        <div className="fruit-user">
          <Link>Dashboard</Link>/<Link>Dashboard</Link>/<Link>Home</Link>
        </div>
      </div>
      <div className="chart-progress">
        <div className="add-link">
          <h1>Enquiries</h1>
          <Link to="/layout/addform">add enquirie</Link>
        </div>
        <div className="user_blew">
          <div className="user_blow">
            <h4>Show</h4>
            <select name="name" id="select">
              <option className="one_more" value="name">
                10
              </option>
            </select>
            <h4>entries</h4>
          </div>
          <div className="user_input">
            <h4>Search:</h4>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>mobile</th>
                    <th>CNIC</th>
                    <th>For Course</th>
                    <th>Pref Time</th>
                    <th>Email status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {enqueryList
                  .filter((users) => users.names.toLowerCase().includes(search))
                  .map((item) => {
                    return (
                      <tbody key={item.id}>
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            <Link>{item.names}</Link>
                          </td>
                          <td>{item.Email}</td>
                          <td>{item.Mobile}</td>
                          <td>{item.CNIC}</td>
                          <td>{item.FourCourse}</td>
                          <td>{item.PrefTime}</td>
                          <td>{item.EmailStatus}</td>
                          <td className="td_flex">
                            <span className="icons">{<item.Action />}</span>{" "}
                            <span className="icons">{<item.delete />}</span>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
          <div>
            <ul>
              <li
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid blue",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={pagination}
              >
                0
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Enqueries;
