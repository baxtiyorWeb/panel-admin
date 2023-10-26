import Container from "../../shared/Container.jsx";
import "./Profile.css";
import { Link } from "react-router-dom";
import { FaEye, FaTelegram, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import useProfile from "../../../hooks/useProfile.js";
import { MdDelete } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { LiaSpinnerSolid } from "react-icons/lia";
import useDeleteProfile from "../../../hooks/useDeleteProfile.js";
// eslint-disable-next-line react/prop-types
const Profile = () => {
  const [tabItem, setTabItem] = useState(1);
  const [showPassword, setShowPassword] = useState(null);
  const [icon, setIcon] = useState(FaEye);
  const profile = useProfile();
  const useEdit = useDeleteProfile();

  function showPass() {
    if (showPassword === "password") {
      setIcon(FaEye);
      setShowPassword("text");
    } else {
      setIcon(FaRegEye);
      setShowPassword("password");
    }
  }

  function toggleTab(index) {
    setTabItem(index);
    console.log(index);
  }

  return (
    <Container>
      <div className="title">
        <h1>Profile</h1>
      </div>
      <div className="profile-wrapper select-none dark:bg-[#353C48]">
        <div className="side-profile">
          <div className="profile head dark:bg-[#353C48]">
            <div className="user">
              <img
                src="http://education.almahirhub.com/assets/img/user.png"
                alt=""
              />
              <div className={"title_top"}>admin</div>
              <div>{profile.user.Course}</div>
              <h3>Follow {profile.user.name} On</h3>
              <div>
                <Link to={"https://t.me//Hasan"}>
                  <FaTelegram />
                </Link>
              </div>
            </div>
          </div>
          <div className="profile footer dark:bg-[#353C48]">
            <h3 className={"user_brain"}>Personal Details</h3>
            <div className={"user_brn"}>
              <h4>Birthday</h4>
              <h4>{profile.user.DateBirth}</h4>
            </div>
            <div className={"user_brn"}>
              <h4>Phone</h4>
              <h4>{profile.user.Mobile}</h4>
            </div>
            <div className={"user_brn"}>
              <h4>Mail</h4>
              <h4>{profile.user.Email}</h4>
            </div>
          </div>
        </div>
        <div className="user-settings shadow-lg">
          <div className="tab-item">
            <div onClick={() => toggleTab(1)} className={"tab"}>
              About
            </div>
            <div onClick={() => toggleTab(2)} className={"tab"}>
              Settings
            </div>
          </div>
          <div className={"tabs"}>
            <div
              className={
                tabItem === 1 ? "tab-item-block" : "tab-item-block-hide"
              }
            >
              <div className="chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal">
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
                      placeholder="name"
                      className="dark:bg-[#353C48] dark:border"
                    />
                  </div>
                  <div className="name">
                    <span>last name</span>
                    <input
                      type="text"
                      placeholder="last name"
                      className="dark:bg-[#353C48] dark:border"
                    />
                  </div>
                  <div className="name">
                    <span>email</span>
                    <input
                      type="text"
                      placeholder="admin@gmal.com"
                      className="dark:bg-[#353C48] dark:border"
                    />
                  </div>
                  <div className="name relative">
                    <span>password</span>
                    <input
                      type={showPassword}
                      placeholder="password"
                      className="dark:bg-[#353C48] dark:border"
                    />
                    <div
                      className="absolute right-4 top-[55px] cursor-pointer z-10"
                      onClick={showPass}
                    >
                      {icon}
                    </div>
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

                <ToastContainer autoClose={2000} />
              </div>
            </div>
            <div
              className={
                tabItem === 2
                  ? "tab-item-block "
                  : "tab-item-block-hide chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal"
              }
            >
              <div className="chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal">
                {profile.loading ? (
                  "loading ...."
                ) : (
                  <table
                    id="table"
                    className="table table-hover table-mc-light-blue"
                  >
                    <thead>
                      <tr>
                        <th>full name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        key={profile.id}
                        className={
                          "even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal"
                        }
                      >
                        <td>{profile.user.name}</td>
                        <td>{profile.user.Mobile}</td>
                        <td>{profile.user.Email}</td>
                        <td className={"td_flex"}>
                          <span
                            className="icons"
                            // onClick={() => likeHandleTicket(item.id)}
                          >
                            {profile.loading && profile.user.id ? (
                              <LiaSpinnerSolid />
                            ) : (
                              <BiLike
                                style={{
                                  color: !profile.user.like ? "white" : "green",
                                }}
                              />
                            )}
                          </span>
                          <span
                            className="icons"
                            onClick={() =>
                              useEdit.handleDeletingTicket(profile.id)
                            }
                          >
                            <MdDelete />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
