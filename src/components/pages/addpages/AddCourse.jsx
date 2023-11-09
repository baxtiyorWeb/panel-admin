import { Link } from "react-router-dom";

const AddCourse = () => {
  return (
    <div className={"relative"}>
      <form className="chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal relative">
        <div className="add-link mb-10 ">
          <h1>Add Course Form</h1>
          <Link to="/courses/courses">Students list</Link>
        </div>
        <div className="text-[#000] text-[18px] dark:text-[#fef3b0] mt-5 mb-5">
          Batch title
        </div>

        <div className="input-box">
          <div className="name">
            <span>course title</span>
            <input
              type="text"
              placeholder="course title type"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>course short code</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>select course category</span>
          </div>
          <div className="name">
            <span>course image</span>
            <input
              type="file"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Duration</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Duration type</span>
          </div>
        </div>

        <button type="submit" className={"-g-button"}>
          send
        </button>
      </form>
    </div>
  );
};
export default AddCourse;
