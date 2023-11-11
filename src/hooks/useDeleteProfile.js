import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../setup/firebase/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { uid } from "uid";

const useDeleteProfile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editetId, setEditedId] = useState();
  const [imageUpload, setImageUpload] = useState();
  const [userImg, setUserImg] = useState();
  const [value, setValue] = useState("");
  const uiid = uid();

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
      return { user: setEdit(targetDoc.data()) };
    };
    setEdit(false);
    getAllData();
  }, [params, imageUpload, loading, userImg, editetId]);
  const names = async () => {
    if (value !== "") {
      if (value === edit.name) {
        await deleteDoc(doc(db, "students", params.id));
        setEdit(params.id);
        navigate("/students/students");
      } else if (value !== edit.name) {
      } else {
        console.log("");
        return false;
      }
    }
  };
  names();

  const handleDeletingTicket = async () => {
    await deleteDoc(doc(db, "students", params.id));
    setEdit(params.id);
    navigate("/students/students");
  };

  const userImgUpload = () => {
    if (!userImg) return;
    const imageRef = ref(storage, `user/${uiid}/${userImg.name}`);
    uploadBytes(imageRef, userImg).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUpload(url);
        setUserImg(false);
      });
    });
    editFunction();
  };

  const editFunction = async (userId) => {
    if (imageUpload !== undefined) {
      setLoading(true);
      await updateDoc(doc(db, "students", params.id), {
        image: imageUpload,
      });
      setEditedId(userId);
      setLoading(false);
    }
  };
  return {
    edit,
    handleDeletingTicket,
    userImgUpload,
    editFunction,
    userImg,
    setUserImg,
    loading,
    setValue,
  };
};

export default useDeleteProfile;
