import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import { useState } from "react";

export const AddFaculty = () => {
  const [dateBirth, setDateBirth] = useState();
  return (
    <>
      <div className="chart-progress dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal relative">
        <div className="add-link">
          <button>delete</button>
          <h1 className="font-normal">Enquiry Form</h1>
          <Link to="/enquiries">Enquiries list</Link>
        </div>
        <div className="input-box">
          <div className="name">
            <span>Name</span>
            <input
              type="text"
              placeholder="name"
              className="dark:bg-[#353C48] dark:border"
              id="newNotes"
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="name">
            <span>Father Name</span>
            <input
              type="text"
              placeholder="father Name"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Email</span>
            <input
              type="email"
              placeholder="email"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Password</span>
            <input
              type="password"
              placeholder="password"
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div className="name">
            <span>Mobile</span>
            <input
              type="number"
              placeholder="mobile "
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
          <div>
            <div className={"mb-1"}>gender</div>
            <br />
            <div>
              <div className={"flex items-center mb-[3px]"}>
                <label htmlFor="male" className={"mr-[5px] ml-[0px]"}>
                  male
                </label>
                <input
                  id={"male"}
                  name={"label"}
                  type="radio"
                  className="dark:bg-[#353C48] dark:border"
                />
              </div>
              <div className={"flex items-center"}>
                <label htmlFor="female" className={"mr-[5px] ml-[0px]"}>
                  female
                </label>
                <input
                  id={"female"}
                  name={"label"}
                  type="radio"
                  className="dark:bg-[#353C48] dark:border"
                />
              </div>
            </div>
          </div>

          <div className="name">
            <span>date of birth</span>
            <DatePicker
              onChange={(e) => setDateBirth(e.format("DD/MM/YYYY"))}
            />
          </div>
          <div className="name">
            <span>date of birth</span>
            <input type="file" />
          </div>
          <div className="name">
            <span>address</span>
            <textarea
              cols="30"
              rows="10"
              className={
                "w-full h-[64px] border border-blue-600 dark:bg-[transparent] rounded-[5px] p-[10px] fz-[18px] tracking-normal"
              }
            ></textarea>
          </div>
          <div className="name">
            <span>Course</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
              // onChange={(e) => setCourse(e.target.value)}
              // value={Course}
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
            <span>Designation</span>
            <select
              name=""
              id="selection"
              className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
              // onChange={(e) => setCourse(e.target.value)}
              // value={Course}
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
            <span>qualification</span>
            <input
              type="text"
              placeholder={"qualification"}
              className="dark:bg-[#353C48] dark:border"
            />
            <span className={"py-[10px]"}>date of join</span>
            <input
              type="text"
              placeholder={"qualification"}
              className="dark:bg-[#353C48] dark:border"
            />
          </div>
        </div>
      </div>
    </>
  );
};
