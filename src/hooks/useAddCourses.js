import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../setup/firebase/firebase.jsx";

export const useAddCourses = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [fee, setFee] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Course, setCourse] = useState("");
  const [Category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const userCollectionRef = collection(db, "Courses");
  const [time, setTime] = useState("");

  async function sendForm(e) {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, {
      Mobile: Mobile,
      Course: Course,
      duration: duration,
      Category: Category,
    });
    setLoading(false);
    navigate("/courses/courses");
  }

  return {
    sendForm,
    setCourse,
    setDuration,
    duration,
    setCategory,
    Category,
    setFee,
    fee,
    setMobile,
    setTime,
    setEmail,
    setLoading,
    loading,
    Course,
    setName,
  };
};
