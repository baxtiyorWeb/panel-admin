import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db, storage } from "../setup/firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
const useProfile = () => {
  const storageRef = ref(storage, "some-child");
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [imageLoad, setImageLoad] = useState(null);
  console.log(params.id);
  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "students", params.id);
      const targetDoc = await getDoc(docRef);
      console.log("targetDoc.data() : ", targetDoc.data());
      return { user: setUser(targetDoc.data()) };
    };
    getAllData();
    setLoading(false);
  }, [params]);

  const imageUploadFunc = (file) => {
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  return { params, user, loading, imageLoad, imageUploadFunc };
};

export default useProfile;
