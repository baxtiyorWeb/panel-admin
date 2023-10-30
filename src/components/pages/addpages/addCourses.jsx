/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";
import "../Enquiries.css";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import {useAddCourses} from "../../../hooks/useAddCourses.js";
// eslint-disable-next-line react/prop-types
const AddCourses = () => {
    const addcourse = useAddCourses()
    return (<div>
        <div className="chart-progress dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal relative">
            <div className="add-link">
                <button>delete</button>
                <h1 className="font-normal">Enquiry Form</h1>
                <Link to="/enquiries">Enquiries list</Link>
            </div>
            <div className="input-box">
                <div className="name">
                    <span>Course Title</span>
                    <input
                        type="text"
                        placeholder="add course title"
                        className="dark:bg-[#353C48] dark:border"
                        id="newNotes"
                        onChange={(e) => addcourse.setName(e.target.value)}
                    />
                </div>
                <div className="name">
                    <span>Course</span>
                    <select
                        name=""
                        id="selection"
                        className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
                        onChange={(e) => addcourse.setCourse(e.target.value)}
                        value={addcourse.Course}
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
                <div className="name">
                    <span>Select Category</span>
                    <div className="name">
                        <select
                            name=""
                            id="selection"
                            className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
                            onChange={(e) => addcourse.setCourse(e.target.value)}
                            value={addcourse.Course}
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
                </div>
                <div className="name">
                    <span>Duration</span>
                    <input
                        type="number"
                        placeholder="duration"
                        className="dark:bg-[#353C48] dark:border"
                        onChange={(e) => addcourse.setEmail(e.target.value)}
                    />
                </div>
                <div className="name">
                    <span>Fee</span>
                    <input
                        type="text"
                        placeholder="add fee"
                        className="dark:bg-[#353C48] dark:border"
                        onChange={(e) => addcourse.setCninc(e.target.value)}
                    />
                </div>
                <div className="name">
                    <span>students</span>
                    <input
                        type="text"
                        placeholder="add students index"
                        className="dark:bg-[#353C48] dark:border"
                        onChange={(e) => addcourse.setMobile(e.target.value)}
                    />
                </div>
                <div className="name">
                    <span>batches</span>
                    <input type="text" className="dark:bg-[#353C48] dark:border" placeholder={'add batch index'}/>
                </div>


            </div>
            <button
                type="submit"
                onClick={addcourse.sendForm}
                style={{
                    width: "80px",
                    height: "30px",
                    backgroundColor: "#6777ef",
                    borderColor: "transparent",
                    color: "#fff",
                    padding: "0.1rem 0.4rem",
                    fontSize: "12px",
                    cursor: "pointer",
                    borderRadius: "3px",
                    position: "absolute",
                    right: "0px",
                    bottom: "5px",
                }}
            >
                {addcourse.loading ? (<ClipLoader
                    loading={addcourse.loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    color="#fff"
                />) : ("send")}
            </button>
        </div>
    </div>);
};
export default AddCourses;
