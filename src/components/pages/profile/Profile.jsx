import Container from "../../shared/Container.jsx";
import "./Profile.css";
import { Link } from "react-router-dom";
import { FaEye, FaTelegram, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import ComboBox from "../../combobox/ComboBox.jsx";
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line react/prop-types
const Profile = ({ open }) => {
  const [tabitem, settabItem] = useState(1);
  const [showPassword, setShowPassword] = useState(null);
  const [icon, setIcon] = useState(FaEye);

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
    settabItem(index);
    console.log(index);
  }

  return (
    <Container open={open}>
      <div className="title">
        <h1>Profile</h1>
      </div>
      <div className="profile-wrapper select-none dark:bg-[#353C48]">
        <div className="side-profile">
          <div className="profile head">
            <div className="user">
              <img
                src="http://education.almahirhub.com/assets/img/user.png"
                alt=""
              />
              <div className={"title_top"}>admin</div>
              <div>kjhgfdsa</div>
              <h3>Follow hasan On</h3>
              <div>
                <Link to={"https://t.me//Hasan"}>
                  <FaTelegram />
                </Link>
              </div>
            </div>
          </div>
          <div className="profile footer">
            <h3 className={"user_brain"}>Personal Details</h3>
            <div className={"user_brn"}>
              <h4>Birthday</h4>
              <h4>30-15-1998</h4>
            </div>
            <div className={"user_brn"}>
              <h4>Phone</h4>
              <h4>123456789</h4>
            </div>
            <div className={"user_brn"}>
              <h4>Mail</h4>
              <h4>admin@admin.com</h4>
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
                tabitem === 1 ? "tab-item-block" : "tab-item-block-hide"
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
                    <ComboBox />
                  </div>
                </div>

                <ToastContainer autoClose={2000} />
              </div>
            </div>
            <div
              className={
                tabitem === 2
                  ? "tab-item-block "
                  : "tab-item-block-hide chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal"
              }
            >
              <div className="chart-progress  dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal">


                <div className="education">
                  <h1 className="text-[18px] text-[#191D21] m-[30px_13px_25px] font-normal">
                    Education
                  </h1>
                  <em>
                    <strong className="text-[#6c757d] relative left-[30px] top-10">
                      d,vndnvkdbvj b
                    </strong>
                  </em>
                </div>

                <div className="expreience">
                  <h1 className="text-[18px] text-[#191D21] m-[60px_13px_25px] font-normal">
                    Expereince
                  </h1>
                  <p className="ml-5 font-medium">dvfdbfdbfdb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
