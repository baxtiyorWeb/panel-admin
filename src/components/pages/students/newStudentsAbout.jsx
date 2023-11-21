import { useEffect, useState } from "react";
import { db } from "../../../setup/firebase/firebase";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const NewStudentsAbout = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const params = useParams();
  const created = user.created;

  useEffect(() => {
    const getAllData = async () => {
      const docRef = doc(db, "new-students", params.newId);
      const targetDoc = await getDoc(docRef);

      return { user: setUser(targetDoc.data()) };
    };
    getAllData();
  }, [params, created, loading]);

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
        <div className="w-full h-[100vh] border">
          <div className="about grid grid-cols-3 justify-items-center">
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>Ism Familiya: {user.name}</h1>
            </div>
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>tanglangan kurs: {user.Course}</h1>
            </div>
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>email: {user.Email}</h1>
            </div>
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>nomer: {user.Mobile}</h1>
            </div>
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>age: {user.age}</h1>
            </div>
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>time: {user.PrefferedTime}</h1>
            </div>
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>cninc: {user.cninc}</h1>
            </div>
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>otasining ismi: {user.fatherName}</h1>
            </div>
            <div className="text-start border  w-[400px] h-[80px] flex justify-center items-center pl-3 shadow-md m-5 text-[16px]">
              <h1>
                action:{" "}
                {user.created
                  ? "bu o'quchi kiritilgan"
                  : "bu o'quvchi kiritilmagan"}
              </h1>
            </div>
          </div>
          <div className="flex justify-end items-center m-14">
            <button
              onClick={() => toStudentsSend()}
              className="border p-3 w-[150px] rounded-md shadow-xl active:scale-[0.9]"
            >
              {loading ? "loading ..." : "kursga qabul qilish"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewStudentsAbout;
