import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Students.css";
import {getLength,} from "../progress/data";
import Pagination from "../pagination/Pagination";
import {collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../setup/firebase/firebase";
import {BiLike} from "react-icons/bi";
import {MdDelete} from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader"
import {LiaSpinnerSolid} from "react-icons/lia";
import {useGetUser} from "../../hooks/useGetUser.js";
import {Button} from "antd";
import {toast} from "react-toastify";

// eslint-disable-next-line react/prop-types
export const Student = () => {
    const [search, setSearch] = useState("");
    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(5);
    const [students, setStudents] = useState([])
    const [deleteId, setDeleteId] = useState();
    const [likeId, setlikeId] = useState();
    const [like, setLike] = useState(true)
    const [loading, setloading] = useState(false);
    let totalPage = Math.ceil(getLength() / limit);
    const notify = () => toast.success("delete form!", {position: "top-right",});

    function handlePageChange(value) {
        if (value === "&laquo;" || value === "... ") {
            setpage(1);
        } else if (value === "&lsaquo;") {
            if (page !== 1) {
                setpage(page - 1);
            }
        } else if (value === "&rsaquo;") {
            if (page !== totalPage) {
                setpage(page + 1);
            }
        } else if (value === "&raquo;" || value === " ...") {
            setpage(totalPage);
        } else {
            setpage(value);
        }
    }

    let emptyPage;
    if (page <= totalPage || page >= totalPage) {
        emptyPage = page;
    } else {
        setpage(emptyPage);
        emptyPage = page;
    }

    useEffect(() => {
        setloading(true);
        (async () => {
            const colRef = collection(db, "students");
            const snapshots = await getDocs(colRef);
            const docs = snapshots.docs.map((doc) => {
                const data = doc.data();
                data.id = doc.id;
                return data;
            });
            setStudents(docs)
            setloading(false)
        })();
    }, [deleteId, like, likeId]);


    const handleDeletingTicket = async (id) => {
        await deleteDoc(doc(db, "students", id));
        setDeleteId(id);
        notify()
    };


    const likeHandleTicket = async (id) => {

        setTimeout(() => {
            setLike(like ? false : true)
        }, 100);

        await updateDoc(doc(db, "students", id), {

            like: like

        });

        setlikeId(id)

    }

    // if(students.length === 0){
    //   return <>epmty data</>
    // }
    const userss = useGetUser()
    console.log(students.length === 0)
    return (<div className={"dark:bg-[#353C48]"}>
        <div className="chart-progress dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal">
            <div className="add-link">
                <h1>Enquiries</h1>
                <Link to="/students/addStudent">add students</Link>
            </div>
            <div className="user_blew">
                <div className="user_blow">
                    <h4>Show</h4>
                    <select name="name" id="select" className={"dark:bg-transparent"}>
                        <option className="one_more" value="name">
                            10
                        </option>
                    </select>
                    <h4>entries</h4>
                </div>
                <div className="user_input">
                    <h4>Search:</h4>
                    <input
                        type="text"
                        className={"dark:bg-[#3B4452] border border-cyan-600"}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div id="demo">
                <div>

                    <div className="table-responsive-vertical shadow-z-1">
                        {userss.user ? students.length === 0 ? <h2 style={{
                                textAlign: "center", color: "#ccc", fontSize: "20px"
                            }}>empty data</h2> : loading ? <div className="flex justify-center items-center">
                                <ClipLoader
                                    loading={loading}
                                    size={20}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                    color="#7e7f81"
                                />
                            </div> : <table
                                id="table"
                                className="table table-hover table-mc-light-blue"
                            >
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Reg.No</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>CNIC</th>
                                    <th>Course</th>
                                    <th>Batch</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {students
                                    .filter((users) => users.name.toLowerCase().includes(search))
                                    .map((item, index) => {
                                        return (<tr key={item.id} className={"even:dark:bg-[#313843]"}>
                                            <td>{index}</td>
                                            <td>
                                                <Link to={`/profile/${item.id}`}>{item.name}</Link>
                                            </td>
                                            <td>{item.RegNo}</td>
                                            <td>{item.Email}</td>
                                            <td>{item.Mobile}</td>
                                            <td>{item.cninc}</td>
                                            <td>{item.Course}</td>
                                            <td>{item.Batch}</td>
                                            <td className={"td_flex"}>
                            <span className="icons" onClick={() => likeHandleTicket(item.id)}>
                              {loading && item.id ? <LiaSpinnerSolid/> : <BiLike style={{

                                  color: !item.like ? "white" : "green"
                              }}/>}
                            </span>
                                                <span className="icons"
                                                      onClick={() => handleDeletingTicket(item.id)}><MdDelete/></span>
                                            </td>
                                        </tr>);
                                    })}
                                </tbody>
                            </table> :
                            <div className={'flex justify-center'}>
                                <Button className={'dark:text-[#fff]'}
                                        onClick={() => userss.navigate('/login')}>login</Button>
                            </div>
                        }

                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <Pagination
                    totalPage={totalPage}
                    page={page}
                    limit={limit}
                    sibling={1}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    </div>);
};

export default Student;
