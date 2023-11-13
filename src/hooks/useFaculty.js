import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../setup/firebase/firebase.jsx";

export function useFaculty() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [cninc, setCninc] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [dateBirth, setDateBirth] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const userCollectionRef = collection(db, "users");

  async function sendForm(e) {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, {
      name: name,
      Email: Email,
      cninc: cninc,
      Mobile: Mobile,
      Course: Course,
      edit: "LiaEdit",
      delete: "MdDelete",
      dateBirth: dateBirth,
    });
    setLoading(false);
    navigate("/enquiries");
  }

  return {
    sendForm,
    setName,
    setEmail,
    setCninc,
    setMobile,
    setCourse,
    setDateBirth,
    setTime,
    time,
  };
}
