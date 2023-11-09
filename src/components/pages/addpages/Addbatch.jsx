import "../Enquiries.css";
import {Link} from "react-router-dom";
import {DatePicker, TimePicker} from "antd";
import {useBatchHook} from "../../../hooks/useBatchHook";
import dayjs from "dayjs";
import {ClipLoader} from "react-spinners";

const {RangePicker} = DatePicker;
const AddBatch = () => {
    const batches = useBatchHook();

    // console.log(date)
    return (
        <div className="chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal relative">
            <div className="add-link mb-10 ">
                <h1>batch Form</h1>
                <Link to="/batches/batch">Students list</Link>
            </div>
            <div className="text-[#000] text-[18px] dark:text-[#fef3b0] mt-5 mb-5 ">
                Batch title
            </div>

            <div className="input-box">
                <div className="name">
                    <span>batch title</span>
                    <input
                        type="text"
                        placeholder="name"
                        className="dark:bg-[#353C48] dark:border uppercase"
                        maxLength={10}
                        minLength={3}
                        onChange={(e) => batches.setBatch_title(e.target.value)}
                    />
                </div>
                <div className="name flex items-center  pt-9">
                    <RangePicker
                        size="large"
                        onChange={(values) => {
                            batches.setDates(
                                values.map((item) => {
                                    return dayjs(item).format("DD-MM-YYYY");
                                })
                            );
                        }}
                    />
                </div>
                <div className="name flex items-center  pt-9">
                    <TimePicker
                        nextIcon
                        onChange={(values) => {
                            batches.setBatch_time(dayjs(values).format("h:mm:ss A"));
                        }}
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
                        onChange={(e) => batches.setCourse(e.target.value)}
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
                    <span>Faculty</span>
                    <input
                        type="text"
                        className="dark:bg-[#353C48] dark:border"
                        onChange={(e) => batches.setFaculty(e.target.value)}
                    />
                </div>
                <div className="name">
                    <span>Faculty Agreed Fee (%)</span>
                    <input
                        type="number"
                        className="dark:bg-[#353C48] dark:border"
                        onChange={(e) => batches.setFaculty_agreed_fee(e.target.value)}
                    />
                </div>
            </div>
            <div className="mt-5">description</div>
            <textarea
                cols="30"
                rows="5"
                className="w-full mt-5 mb-5 dark:bg-transparent border rounded p-5"
                placeholder="description"
                onChange={(e) => batches.setDescription(e.target.value)}
            ></textarea>
            <button
                type="submit"
                onClick={batches.sendBatches}
                className={'-g-button'}

            >
                {batches.loading ? (
                    <ClipLoader
                        loading={batches.loading}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        color="#fff"
                    />
                ) : (
                    "send"
                )}
            </button>
        </div>
    );
};
export default AddBatch;
