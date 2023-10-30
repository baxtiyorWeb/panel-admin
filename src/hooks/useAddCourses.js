import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../setup/firebase/firebase.jsx";

export const useAddCourses = () => {


    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [cninc, setCninc] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Course, setCourse] = useState("");
    const [loading, setLoading] = useState(false);
    const [dateBirth, setDateBirth] = useState('')
    const navigate = useNavigate();
    const userCollectionRef = collection(db, "users");
    const [time, setTime] = useState("")
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    async function sendForm(e) {
        e.preventDefault();
        setLoading(true);
        await addDoc(userCollectionRef, {
            name: name,
            Email: Email,
            cninc: cninc,
            Mobile: Mobile,
            Course: Course,
            edit: "LiaEdit",
            delete: "MdDelete",
            dateBirth: dateBirth,
            PrefferedTime: time
        });
        setLoading(false);
        navigate("/enquiries");
    }

    const format = 'HH:mm';
    return {
        sendForm, setCourse, setCninc, setMobile, setTime, setEmail, setLoading, loading, Course, setName,
    }
}
