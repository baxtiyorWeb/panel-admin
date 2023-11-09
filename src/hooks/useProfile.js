import {doc, getDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {db} from "../setup/firebase/firebase";

const useProfile = () => {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    useEffect(() => {
        setLoading(true);
        const getAllData = async () => {
            const docRef = doc(db, "students", params.id);
            const targetDoc = await getDoc(docRef);
            return {user: setUser(targetDoc.data())};
        };
        getAllData();
        setLoading(false);
    }, [params]);


    return {params, user, loading,};
};

export default useProfile;
