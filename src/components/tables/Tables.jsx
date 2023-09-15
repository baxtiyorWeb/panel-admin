/* eslint-disable react/prop-types */

import ToggleBtn from "./ToggleBtn";

const Tables = (props) => {
  const headerNameArray = [
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
  return (
    <>
      <table id="table" className="table table-hover ">
        <thead>
          {headerNameArray.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>{item.mobile}</th>
              <th>{item.cnic}</th>
              <th>{item.forcourse}</th>
              <th>{item.pref_time}</th>
              <th>{item.email_status}</th>
              <th>{item.action}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {/* //   .filter((users) => users.names.toLowerCase().includes(props.search)) */}
          {props.users
            .filter((users) => users.names.toLowerCase().includes(props.search))
            .map((item) => {
              return (
                <tr
                  key={item.id}
                  className={
                    "even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                  }
                >
                  <td>{item.id}</td>
                  <td>{item.names}</td>
                  <td>{item.Email}</td>
                  <td>{item.Mobile}</td>
                  <td>{item.CNIC}</td>
                  <td>{item.FourCourse}</td>
                  <td>{item.PrefTime}</td>
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
};

export default Tables;
