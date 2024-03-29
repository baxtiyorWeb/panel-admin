import { Link } from "react-router-dom";
import "./master.css";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { useCourseCategoryhook } from "../../../hooks/useCourseCategoryhook.js";

const CourseCategory = () => {
  const courses = useCourseCategoryhook();
  return (
    <div>
      <div
        className="around_one dark:border-b dark:border-b-[#3b4452] mb-5"
        style={{
          paddingBottom: "23px",
        }}
      >
        <div className="around_user dark:text-[#96a2b4] text-[25px]">
          <h2>Courses</h2>
        </div>
        <div className="around_of  dark:bg-[#3B4452]">
          <Link to={"#"}>Dashboard</Link>/<Link to={"#"}>Course</Link>/
          <Link to={"#"}>Temp</Link>
        </div>
      </div>
      <div className="div-block dark:bg-[#353C48] dark:border dark:border-[#3b4452]">
        <h2 className="title">Add Course categeory</h2>
        {/*<input type="text" placeholder="title" className={'dark:bg-transparent'}*/}
        {/*       onChange={(e) => setAddCourse(e.target.value)} value={addCourse}/>*/}
        <div>
          <div>
            {courses.modal ? (
              <input
                type="text"
                placeholder={"edit"}
                value={courses.addCourse || ""}
                className={"dark:bg-transparent"}
                onChange={(e) => courses.setAddCourse(e.target.value)}
              />
            ) : (
              <input
                type="text"
                placeholder="add course title"
                className={"dark:bg-transparent"}
                onChange={(e) => courses.setAddCourse(e.target.value)}
                value={courses.addCourse || ""}
              />
            )}
          </div>
          <div>
            {courses.modal ? (
              <button onClick={courses.courseUpdate}>edit</button>
            ) : (
              <button onClick={courses.addCourseCategory}>submit</button>
            )}
          </div>
        </div>
      </div>
      <div className="chart-progress dark:bg-[#353C48]">
        <div className="add-link">
          <h1>Course List</h1>
          <Link to="/students/addStudent">add Course</Link>
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
              onChange={(e) => courses.setSearch(e.target.value)}
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
                    <th> Title</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.data
                    .filter((users) =>
                      users.add_course.toLowerCase().includes(courses.search)
                    )
                    .map((item, index) => {
                      return (
                        <tr
                          key={item.id}
                          className={
                            "even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                          }
                        >
                          <td>{index}</td>
                          <td>{item.add_course}</td>

                          <td
                            style={{
                              display: "flex",
                            }}
                          >
                            <span
                              className="icons"
                              onClick={() => courses.courseEdit(item.id)}
                            >
                              {<LiaEdit />}
                            </span>
                            <span
                              className="icons"
                              onClick={() => courses.courseDelete(item.id)}
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
  );
};

export default CourseCategory;
