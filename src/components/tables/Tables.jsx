/* eslint-disable react/prop-types */

import { useEffect } from "react";
import ToggleBtn from "./ToggleBtn";
import axios from "axios";
import { useState } from "react";
import { Component } from "react";

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  API_URL = "http//localhost:3001/";

  componentDidMount() {
    this.refreshNotes();
  }

  async refreshNotes() {
    fetch(this.API_URL + "api/user/users").then((data) => {
      this.setState({ notes: data });
    });
  }

  setState = [
    {
      ID: "1",
      id: "#",
      name: "Name",
      email: "email",
      mobile: "mobile",
      cnic: "CNIC",
      forcourse: "For Course",
      pref_time: "Pref Time",
      email_status: "Email status",
      action: "Action",
    },
  ];
  render() {
    const {notes} = this.state;
    return (
      <>
        <table id="table" className="table table-hover ">
          <thead>
              <tr>
                <th>1</th>
                <th>email</th>
                <th>email</th>
                <th>mobile</th>
                <th>CNIC</th>
                <th>For Course</th>
                <th>Pref Time</th>
                <th>Email status</th>
                <th>Action</th>
              </tr>
          </thead>
          <tbody>
            {/* //   .filter((users) => users.names.toLowerCase().includes(props.search)) */}
            {notes
              .filter((users) => users.names.toLowerCase().includes(users.name))
              .map((item, index) => {
                return (
                  <tr
                    key={item.id}
                    className={
                      "even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                    }
                  >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>

                    <td>
                      <ToggleBtn />
                    </td>
                    <td className={"td_flex"}>
                      <span className="icons">{<item.Action />}</span>
                      <span className="icons">{<item.delete />}</span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Tables;
