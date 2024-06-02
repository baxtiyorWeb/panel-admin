/* eslint-disable react/prop-types */
import { onValue, ref } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useComment } from "../../hooks/useComment";
import { db, realTimeDatabase } from "../../setup/firebase/firebase";
import Comment from "../Comment/Comment";

const UserModal = ({ open, setOpen, userId }) => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([]);
  const comment = useComment();
  const [user, setUser] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      const docRef = doc(db, "users", userId);
      const targetDoc = await getDoc(docRef);
      return { user: setUser(targetDoc.data()) };
    };
    getAllData();
    setLoading(false);
  }, [params, userId, comment.isLoading]);

  // get data

  useEffect(() => {
    onValue(ref(realTimeDatabase), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((message) => {
          setMessage((prev) => [...prev, message]);
        });
      }
    });
    message;
  }, [message]);

  return (
    <>
      <div className="fixed left-[30%] top-[23%] z-10 h-[50vh] w-[50%] rounded-md bg-[#fff] text-[#fff] shadow-2xl dark:bg-[#3B4452]">
        {loading ? (
          `Loading`
        ) : (
          <>
            <button onClick={() => setOpen(!open)}>
              <MdOutlineClose className="absolute right-1 top-1 text-[25px] text-white" />
            </button>
            <div className="flex flex-col items-center  justify-center  text-[20px] text-[#fff]">
              <h1>{user.name} ga xabar yozing </h1>
            </div>
            <div>
              <Comment name={user.name} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserModal;
