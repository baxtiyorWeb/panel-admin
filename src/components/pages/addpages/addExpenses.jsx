/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Enquiries.css";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../setup/firebase/firebase.jsx";
import Container from "../../shared/Container.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import { DatePicker } from "antd";

// eslint-disable-next-line react/prop-types
const AddExpenses = () => {
  const [Title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [cninc, setCninc] = useState("");
  const [Description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState("");
  const navigate = useNavigate();
  const userCollectionRef = collection(db, "expenses-form");

  async function sendForm(e) {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, {
      Title: Title,
      cninc: cninc,
      Category: category,
      Dates: dates,
      Description: Description,
      CreatedAt: "2020-09-05 11:39:39",
    });
    setLoading(false);
    navigate("/expenses");
  }

  const onChange = (date, dateString) => {
    setDates(dateString);
  };
  return (
    <Container>
      <div className="chart-progress dark:bg-[#353C48] text-[#34395e] dark:text-[#EEE8CC] font-normal relative">
        <form onSubmit={sendForm}>
          <div className="add-link">
            <h1 className="font-normal">Enquiry Form</h1>
            <Link to="/enquiries">Enquiries list</Link>
          </div>
          <div className="input-box">
            <div className="name">
              <span>Expenses Date</span>
              <DatePicker
                onChange={onChange}
                className={"bg-transparent dark:bg-transparent"}
              />
            </div>
            <div className="name">
              <span>Expense Title</span>
              <input
                type="text"
                placeholder="expense Title"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="name">
              <span>Expenses Category</span>
              <input
                type="text"
                placeholder="expenses Category"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setCategory(e.target.value)}
                required={true}
              />
            </div>
            <div className="name">
              <span>Amount</span>
              <input
                type="text"
                placeholder="add amount"
                className="dark:bg-[#353C48] dark:border"
                onChange={(e) => setCninc(e.target.value)}
                required={true}
              />
            </div>
          </div>
          <div className="name1">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className={"dark:bg-[#3b4452] textarea"}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: "80px",
              height: "30px",
              backgroundColor: "#6777ef",
              borderColor: "transparent",
              color: "#fff",
              padding: "0.1rem 0.4rem",
              fontSize: "12px",
              cursor: "pointer",
              borderRadius: "3px",
              position: "absolute",
              right: "10px",
              bottom: "5px",
            }}
          >
            {loading ? (
              <ClipLoader
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
                color="#fff"
              />
            ) : (
              "send"
            )}
          </button>
        </form>
      </div>
    </Container>
  );
};
export default AddExpenses;
