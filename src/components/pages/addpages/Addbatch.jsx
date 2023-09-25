import "../Enquiries.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddBatch = () => {
  const notify = () => toast("send your form");
  function sendForm(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form
        className="chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal"
        onSubmit={(e) => sendForm(e)}
      >
        <div className="add-link mb-10 ">
          <h1>batch Form</h1>
          <Link to="/batches/batch">Students list</Link>
        </div>
        <div className="text-[#000] text-[18px] dark:text-[#fef3b0] mt-5 mb-5">
          Batch title
        </div>

        <div className="input-box">
          <div className="name">
            <span>batch title</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Expexted and time</span>
            <input
              type="time"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              value={"07:45"}
            />
          </div>
          <div className="name">
            <span>Expexted and Date</span>
            <input
              type="date"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              value={"2023-09-15"}
            />
          </div>

          <div className="name">
            <span>select Faculty</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green] cursor-pointer dark:text-[#fff] text-[16px] p-3 "
            >
              <option value="Other" disabled>
                select Faculty
              </option>
              <option value="Other" id="options">
                Other1
              </option>
              <option value="Other" id="options">
                Other2
              </option>
              <option value="Other" id="options">
                Other3
              </option>
              <option value="Other" id="options">
                Other4
              </option>
            </select>
          </div>

          <div className="name">
            <span>Course</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
            >
              <option value="Other" disabled>
                Select Course
              </option>
              <option value="Other" id="options">
                Other1
              </option>
              <option value="Other" id="options">
                Other2
              </option>
              <option value="Other" id="options">
                Other3
              </option>
              <option value="Other" id="options">
                Other4
              </option>
            </select>
          </div>
          <div className="name">
            <span>Course free</span>
            <input type="text" className="dark:bg-[#353C48] dark:border" />
          </div>
          <div className="name">
            <span>Facultet Agreed Fee (%)</span>
            <input type="text" className="dark:bg-[#353C48] dark:border" />
          </div>
        </div>
        <div className="mt-5">description</div>
        <textarea
          cols="30"
          rows="5"
          className="w-full mt-5 mb-5 dark:bg-transparent border rounded p-5"
          placeholder="description"
        ></textarea>
        <button type="submit" onClick={notify}>
          send
        </button>
        <ToastContainer autoClose={2000} />
      </form>
    </div>
  );
};
export default AddBatch;
