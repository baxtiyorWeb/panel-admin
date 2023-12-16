import "./progress.css";
import { progress } from "../progress/data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";

export const Progress = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const colRef = collection(db, "courses");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setData(docs);
      setLoading(false);
    })();
  }, [data]);

  return (
    <div className="chart-progress dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
      <div id="demo">
        <div>
          <div className="chart-progress dark:bg-[#353C48]">
            <div id="demo">
              <div>
                <div className="table-responsive-vertical shadow-z-1 dark:bg-[#353C48]">
                  <table
                    id="table"
                    className="table table-hover table-mc-light-blue table-responsive-md"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Batch</th>
                        <th>Course</th>
                        <th>Students</th>
                        <th>Fee Progress</th>
                        <th>Start Date</th>
                        <th>Fee Collected</th>
                        <th>Fee Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => {
                        return (
                          <tr
                            key={item.id}
                            className={
                              "even:dark:bg-[#323844] even-class dark:hover:bg-[#353C48] response-table"
                            }
                          >
                            <td>{item.id}</td>
                            <td className="text-[#808EF1]">
                              <Link to="#">{item.students.length}</Link>
                            </td>
                            <td>{item.id}</td>
                            <td>{item.students.length}</td>
                            <td>
                              <div className="progress ">
                                <div className="min-progress">
                                  <div className="progress_length ">
                                    {item.students.length}
                                  </div>
                                  <div
                                    className="progress-min-length-item"
                                    style={{
                                      width: ` ${item.students.length}%`,
                                      backgroundColor: "green",
                                    }}
                                  ></div>
                                  <div className="min-progress-path"></div>
                                </div>
                              </div>
                            </td>
                            <td>{item.students.length}</td>
                            <td>{item.students.length}</td>
                            <td>{item.students.length}</td>
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
      </div>
    </div>
  );
};
