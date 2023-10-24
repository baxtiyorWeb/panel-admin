import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../setup/firebase/firebase";
import { useNavigate, useParams } from "react-router-dom";

const useDeleteProfile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
    type: "time",
    user: [],
    name: "",
    fatherName: "",
    DateBirth: "",
    Email: "",
    cninc: "",
    Mobile: "",
    time: "",
    Course: "",
    EditedId: "",
    loading: false,
    deleteId: "",
  });

  useEffect(() => {
    setEdit(true);
    const getAllData = async () => {
      const docRef = doc(db, "students", params.id);
      const targetDoc = await getDoc(docRef);
      console.log("targetDoc.data() : ", targetDoc.data());
      return { user: setEdit(targetDoc.data()) };
    };
    setEdit(false);
    getAllData();
  }, [params]);

  const handleDeletingTicket = async () => {
    await deleteDoc(doc(db, "students", params.id));
    setEdit(params.id);
    navigate("/students/students");
  };

  return { edit, handleDeletingTicket };
};

export default useDeleteProfile;
