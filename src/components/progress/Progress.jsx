import "./progress.css";
import { progress } from "../progress/data";
import { Link } from "react-router-dom";

export const Progress = () => {
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
                    className="table table-hover table-mc-light-blue"
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
                      {progress.map((item) => {
                        return (
                          <tr
                            key={item.id}
                            className={"even:dark:bg-[#323844]"}
                          >
                            <td>{item.id}</td>
                            <td className="text-[#808EF1]">
                              <Link to="#">{item.link}</Link>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.students}</td>
                            <td>
                              <div className="progress ">
                                <div className="min-progress">
                                  <div className="progress_length ">
                                    {item.students_progress}
                                  </div>
                                  <div
                                    className="progress-min-length-item"
                                    style={{
                                      width: ` ${item.students_progress}%`,
                                      backgroundColor: item.bgColor,
                                    }}
                                  ></div>
                                  <div className="min-progress-path"></div>
                                </div>
                              </div>
                            </td>
                            <td>{item.start_Date}</td>
                            <td>{item.freeCollected}</td>
                            <td>{item.freeDue}</td>
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
