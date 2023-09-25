import { useState } from "react";
import "./Enquiries.css";
import { Link } from "react-router-dom";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import { db } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { Component } from "react";
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  API_URL = "http//localhost:3001/";
  async refreshNotes() {
    fetch(this.API_URL + "api/user").then((data) => {
      this.setState({ notes: data });
    });
  }
  async addClick() {
    let newNotes = document.getElementById("newNotes").value;
    const data = new FormData();
    data.append("newNotes", newNotes);

    fetch(this.API_URL + "api/user", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result);
        this.refreshNotes();
      });
  }

  render() {
    return (
      <div>
        <form
          className="chart-progress dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal"
          onSubmit={(e) => this.addClick(e.preventDefault())}
        >
          <div className="add-link">
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
              />
            </div>
            <div className="name">
              <span>Father Name</span>
              <input
                type="text"
                placeholder="Father Name"
                className="dark:bg-[#353C48] dark:border"
              />
            </div>
            <div className="name">
              <span>Date of Birth</span>
              <input
                type="date"
                placeholder="name"
                className="dark:bg-[#353C48] dark:border"
              />
            </div>
            <div className="name">
              <span>Email</span>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="dark:bg-[#353C48] dark:border"
              />
            </div>
            <div className="name">
              <span>CNIC</span>
              <input
                type="text"
                placeholder="33100-0000000-0"
                className="dark:bg-[#353C48] dark:border"
              />
            </div>
            <div className="name">
              <span>Mobile</span>
              <input
                type="text"
                placeholder="+998 xx xxx xx xx"
                className="dark:bg-[#353C48] dark:border"
              />
            </div>
            <div className="name">
              <span>Gender</span>
              <div>
                <input
                  type="radio"
                  id="Male"
                  className="w-1 h-1 !not-sr-only"
                  name="gender"
                />
                <label htmlFor="Male" className="mr-5 ml-1">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Female"
                  className="w-1 h-1 !not-sr-only"
                  name="gender"
                />
                <label htmlFor="Female" className="mr-5 ml-1">
                  Female
                </label>
              </div>
            </div>
            <div className="name">
              <span>Preferred Time</span>
              <input
                type="text"
                placeholder="2:15"
                className="dark:bg-[#353C48] dark:border"
              />
            </div>
            <div className="name">
              <span>Department</span>
              <select
                name=""
                id="selection"
                className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green] cursor-pointer dark:text-[#fff] text-[16px] p-3 "
              >
                <option value="Other" disabled>
                  Select department
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
              <span>Semester</span>
              <select
                name=""
                id="selection"
                className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green] cursor-pointer dark:text-[#fff] text-[16px] p-3 "
              >
                <option value="Other" disabled>
                  select semester
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
          </div>
          <button type="submit">send</button>
          <ToastContainer autoClose={2000} />
        </form>
      </div>
    );
  }
}
export default AddForm;
