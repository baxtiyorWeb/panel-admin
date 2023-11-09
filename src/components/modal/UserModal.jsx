/* eslint-disable react/prop-types */
import {doc, getDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {MdOutlineClose} from "react-icons/md";
import {useParams} from "react-router-dom";
import {db} from "../../setup/firebase/firebase";

const UserModal = ({open, setOpen, userId, children}) => {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    useEffect(() => {
        setLoading(true);
        const getAllData = async () => {
            const docRef = doc(db, "users", userId);
            const targetDoc = await getDoc(docRef);
            console.log("targetDoc.data() : ", targetDoc.data());
            return {user: setUser(targetDoc.data())};
        };
        getAllData();
        setLoading(false);
    }, [params, userId]);
    return (
        <>
            <div
                className="fixed w-[50%] h-[50vh] top-[23%] left-[30%] z-10 bg-[#3B4452] rounded-md shadow-2xl text-[#fff]">
                {loading ? (
                    `Loading`
                ) : (
                    <>
                        <button onClick={() => setOpen(!open)}>
                            <MdOutlineClose className="text-[25px] text-white absolute right-1 top-1"/>
                        </button>
                        <div>
                            <h1>{user.name}</h1>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default UserModal;
