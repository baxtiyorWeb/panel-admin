import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../setup/firebase/firebase";
import { ClipLoader } from "react-spinners";
// import { Loading } from "../../Loading";
const Groups = () => {
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "groups", param.id);
      const targetDoc = await getDoc(docRef);
      console.log(targetDoc.data().students);
      return { user: setUser(targetDoc.data()) };
    };
    getAllData();
    setLoading(false);
  }, [param.id]);

  return (
    <div>
      <h1>{param.id}</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          {" "}
          <ClipLoader
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#7e7f81"
          />
        </div>
      ) : (
        <div>
          {user === 0 ? (
            <h2
              style={{
                textAlign: "center",
                color: "#ccc",
                fontSize: "20px",
              }}
            >
              empty data
            </h2>
          ) : loading ? (
            "loading"
          ) : (
            JSON.stringify(user.students)
          )}
        </div>
      )}
    </div>
  );
};

export default Groups;
