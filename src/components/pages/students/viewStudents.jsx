import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../setup/firebase/firebase";
import { useParams } from "react-router-dom";

const ViewStudents = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "Courses", params.id);
      const targetDoc = await getDoc(docRef);
      return { user: setUser(targetDoc.data()) };
    };
    setLoading(false);

    getAllData();
  }, [params]);
  return (
    <div>
      <h1 className="text-center text-[30px] mb-10">{params.id}</h1>
      <h1 className="text-[20px] mt-3 mb-5">
        {params.id} kursiga qabul qilingan o{"'"}quvhchilar{" "}
      </h1>
      <div className="flex flex-col justify-center align-center">
        {user.Students.map((item) => console.log(item.Students))}
      </div>
    </div>
  );
};

export default ViewStudents;
