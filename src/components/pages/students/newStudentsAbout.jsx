import { useEffect, useState } from "react";
import { db } from "../../../setup/firebase/firebase";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const NewStudentsAbout = () => {
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState(false);
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "new-students", params.newId);
      const targetDoc = await getDoc(docRef);

      return { user: setUser(targetDoc.data()) };
    };
    getAllData();
    setLoading(false);
  }, [params]);
  const userCollectionRef = collection(db, "/students");
  const toStudentsSend = async () => {
    if (!user.created) {
      setLoading(true);
      await addDoc(userCollectionRef, {
        name: user.name,
        fatherName: user.fatherName,
        age: user.age,
        Email: user.Email,
        cninc: user.cninc,
        Mobile: user.Mobile,
        Course: user.Course,
        PrefferedTime: "6/23/23",
        date: "date",
      });

      setAdd(true);
      await updateDoc(doc(db, "new-students", params.newId), {
        created: true,
      });
      setLoading(false);
    } else {
      alert("bu o'quvchi kiritilgan");
    }
  };

  return (
    <div
      style={{
        width: "95.5%",
        transition: "0.3s ease",
        padding: "15px",
        margin: "0 auto",
      }}
    >
      {loading ? (
        "loading ..."
      ) : (
        <div className="w-full h-full border ">
          <div className="about grid grid-cols-3 justify-items-center">
            <div className="text-start border mb-5">
              <h1>Name: {user.name}</h1>
            </div>
            <div className="text-start border mb-5">
              <h1>tanglangan kurs: {user.Course}</h1>
            </div>
            <div className="text-start border mb-5">
              <h1>email: {user.Email}</h1>
            </div>
            <div className="text-start border mb-5">
              <h1>nomer: {user.Mobile}</h1>
            </div>
            <div className="text-start border mb-5">
              <h1>age: {user.age}</h1>
            </div>
            <div className="text-start border mb-5">
              <h1>time: {user.PrefferedTime}</h1>
            </div>
            <div className="text-start border mb-5">
              <h1>cninc: {user.cninc}</h1>
            </div>
            <div className="text-start border mb-5">
              <h1>otasining ismi: {user.fatherName}</h1>
            </div>
            <div className="text-start border mb-5">
              <h1>
                action:{" "}
                {user.created
                  ? "bu o'quchi kiritilgan"
                  : "bu o'quvchi kiritilmagan"}
              </h1>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end items-center">
        <button onClick={() => toStudentsSend()}>
          {loading ? "loading ..." : "qabul qilish"}
        </button>
        <h1>{add && ": siz bu o'quvchini qabul qildingiz"}</h1>
      </div>
    </div>
  );
};

export default NewStudentsAbout;
