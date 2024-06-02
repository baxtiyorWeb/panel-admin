import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { uid } from "uid";
import { db, storage } from "../setup/firebase/firebase";

const useDeleteProfile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editetId, setEditedId] = useState();
  // const [imageUpload, setImageUpload] = useState();
  const [userImg, setUserImg] = useState();
  const [value, setValue] = useState("");
  const [file, setFile] = useState("");
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
  }, [params, loading, editetId]);
  const names = async () => {
    if (value !== "") {
      if (value === edit.name) {
        await deleteDoc(doc(db, "students", params.id));
        setEdit(params.id);
        navigate("/students/students");
      } else if (value !== edit.name) {
        edit.name;
      } else {
        ("");
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
    // if (!userImg) return;
    // const imageRef = ref(storage, `user/${uiid}/${userImg.name}`);
    // uploadBytes(imageRef, userImg).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUpload(url);
    //     setUserImg(false);
    //   });
    // });
    // editFunction();
  };

  useEffect(() => {
    const upLoadFile = () => {
      const name = new Date().getTime() + file.name;
      name;
      const storageRef = ref(storage, `user-images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          "Upload is " + progress + "% done";
          switch (snapshot.state) {
            case "paused":
              "Upload is paused";
              break;
            case "running":
              "Upload is running";
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            "File available at", downloadURL;
            setUserImg(downloadURL);

            file && setImages();
          });
        },
      );
    };
    const setImages = async () => {
      if (file !== undefined) {
        setLoading(true);
        await updateDoc(doc(db, "students", params.id), {
          image: userImg,
        });
        setLoading(false);
      }
    };
    file && upLoadFile();
    file && setImages();
  }, [params.id, userImg]);

  // const editFunction = async (userId) => {
  //   if (imageUpload !== undefined) {
  //     setLoading(true);
  //     await updateDoc(doc(db, "students", params.id), {
  //       image: imageUpload,
  //     });
  //     setEditedId(userId);
  //     setLoading(false);
  //   }
  // };
  return {
    edit,
    handleDeletingTicket,
    userImgUpload,
    userImg,
    // setUserImg,
    file,
    setFile,
    loading,
    setValue,
  };
};

export default useDeleteProfile;
