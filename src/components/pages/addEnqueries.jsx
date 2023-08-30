import React from "react";
import Container from "../shared/Container";
import "./Enquiries.css";
import { Link } from "react-router-dom";
const AddForm = () => {
  return (
    <Container>
      <div>
      <form className="chart-progress">
      <div className="add-link">
      <h1>Enquiry Form</h1>
      <Link to="enquiries">Enquiries list</Link>
      </div>
        <div className="input-box">
          <div className="name">
            <span>Name</span>
            <input type="text" placeholder="name" />
          </div>
          <div className="name">
            <span>Father Name</span>
            <input type="text" placeholder="Father Name" />
          </div>
          <div className="name">
            <span>Date of Birth</span>
            <input type="date" placeholder="name" />
          </div>
          <div className="name">
            <span>CNIC</span>
            <input type="text" placeholder="name" />
          </div>
          <div className="name">
            <span>Mobile</span>
            <input type="text" placeholder="name" />
          </div>
          <div className="name">
            <span>Gender</span>
            <input type="text" placeholder="name" />
          </div>
          <div className="name">
            <span>Preferred Time</span>
            <input type="text" placeholder="name" />
          </div>
          <div className="name">
            <span>Department</span>
            <input type="text" placeholder="name" />
          </div>
          <div className="name">
            <span>Semester</span>
            <input type="text" placeholder="name" />
          </div>
          <div className="name">
            <span>Course</span>
            <input type="text" placeholder="name" />
          </div>
          <div className="name">
            <span>Course</span>
            <input type="text" placeholder="name" className="nth-1" />
          </div>
        </div>
      </form>
      </div>
    </Container>
  );
};
export default AddForm;
