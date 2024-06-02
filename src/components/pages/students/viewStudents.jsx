import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../setup/firebase/firebase";

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
      <h1 className="mb-10 text-center text-[30px]">{params.id}</h1>
      <h1 className="mb-5 mt-3 text-[20px]">
        {params.id} kursiga qabul qilingan o{"'"}quvhchilar{" "}
      </h1>
      <div className="align-center flex flex-col justify-center">
        {user.Students.map((item) => item.Students)}
      </div>
    </div>
  );
};

export default ViewStudents;
