import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../setup/firebase/firebase.jsx";
import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

export const useExpenseCategory = () => {


    const courseRef = collection(db, 'course_expense')
    const [addCourse, setAddCourse] = useState('')
    const [data, setData] = useState([])
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("");
    const [deleteId, setDeleteId] = useState()
    const [modal, setModal] = useState(false)
    const [editId, setEditId] = useState()
    const param = useParams()
    const [params, setParams] = useSearchParams()


    useEffect(() => {
        (async () => {
            setLoading(true);
            const colRef = collection(db, "course_expense");
            const snapshots = await getDocs(colRef);
            const docs = snapshots.docs.map((doc) => {
                const data = doc.data();
                data.id = doc.id;
                return data;
            });
            setData(docs);
            setLoading(false);
        })();

    }, [loading, deleteId,]);

    useEffect(() => {
        setLoading(true);
        const getAllData = async () => {
            const docRef = doc(db, "course_expense", editId);
            const targetDoc = await getDoc(docRef);
            console.log("targetDoc.data() : ", targetDoc.data());
            return {
                user: setCourses(targetDoc.data())
            };
        };
        getAllData();
        setLoading(false);

    }, [param, editId]);

    useEffect(() => {
        setAddCourse(courses.add_course)
    }, [courses]);

    const addCourseCategory = async () => {
        setLoading(true)
        await addDoc(courseRef, {
            add_course: addCourse
        })
        setLoading(false)
        setAddCourse('')

    }

    const courseDelete = async (id) => {
        setLoading(true)
        await deleteDoc(doc(db, "course_expense", id))
        setDeleteId(id)
        setLoading(false)
        setAddCourse('')
    }

    const courseEdit = async (id) => {
        const edit = params.get('edit')
        console.log(edit)
        setParams({
            edit: id
        })
        setEditId(id)
        setModal(!modal)

    }

    const courseUpdate = async () => {
        setLoading(true)
        await updateDoc(doc(db, 'course_expense', editId), {
            add_course: addCourse
        })
        setAddCourse('')
        setLoading(false)
        setModal(false)
    }


    return {
        courseUpdate,
        courseEdit,
        courseDelete,
        addCourse,
        setAddCourse,
        loading,
        modal,
        addCourseCategory,
        search,
        setSearch,
        data,
    }
}
