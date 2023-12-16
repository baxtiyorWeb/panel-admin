import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../setup/firebase/firebase";
import { useNavigate, useParams } from "react-router-dom";

export const useBatchHook = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [batch_title, setBatch_title] = useState("");
  const [dates, setDates] = useState([]);
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [faculty_agreed_fee, setFaculty_agreed_fee] = useState("");
  const [batch_time, setBatch_time] = useState("");
  const [faculty, setFaculty] = useState("");
  const [editId, setEditId] = useState("");
  const [like, setLike] = useState("");
  const [likeId, setLikeId] = useState("");

  const params = useParams();

  // get user about
  useEffect(() => {
    (async () => {
      setLoading(true);
      const colRef = collection(db, "batches");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setUser(docs);
      setLoading(false);
    })();
  }, [toggle, like, likeId]);

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const userCollectionRef = collection(db, "batches");

  async function sendBatches() {
    setLoading(true);

    await addDoc(userCollectionRef, {
      batch_title: batch_title,
      description: description,
      date: dates,
      course: course,
      faculty_agreed_fee: faculty_agreed_fee,
      batch_time: batch_time,
      faculty: faculty,
      like: false,
    });
    setLoading(false);
    navigate("/batches/batch");
  }

  const likeHandleTicket = async (id) => {
    setTimeout(() => {
      setLike(like ? false : true);
    }, 100);

    await updateDoc(doc(db, "batches", id), {
      like: like,
    });

    setLikeId(id);
  };
  const editFunction = async (userId) => {
    setLoading(true);
    await updateDoc(doc(db, "batches", params.userId), {
      batch_title: batch_title,
      batch_time: batch_time,
      course: course,
      date: dates,
      description: description,
      faculty: faculty,
      faculty_agreed_fee: faculty_agreed_fee,
    });
    setEditId(userId);
    setLoading(false);
    navigate("/batches/batch");
  };

  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "batches", params.userId);
      const targetDoc = await getDoc(docRef);
      console.log("targetDoc.data() : ", targetDoc.data());
      return { users: setUsers(targetDoc.data()) };
    };
    setLoading(false);
    getAllData();
  }, [params]);

  useEffect(() => {
    setBatch_title(users.batch_title);
    setBatch_time(users.batch_time);
    setCourse(users.course);
    setDates(users.date);
    setDescription(users.description);
    setFaculty(users.faculty);
    setFaculty_agreed_fee(users.faculty_agreed_fee);
    setDates(users.date);
  }, [users]);
  //   one user getData function

  return {
    hours,
    minutes,
    loading,
    dates,
    user,
    editId,
    batch_title,
    batch_time,
    course,
    faculty,
    faculty_agreed_fee,
    description,
    setUser,
    sendBatches,
    setToggle,
    setBatch_time,
    setBatch_title,
    setDescription,
    setCourse,
    setFaculty_agreed_fee,
    setFaculty,
    setDates,
    editFunction,
    likeHandleTicket,
  };
};
