import {FaDesktop} from "react-icons/fa";
import {BiEnvelope} from "react-icons/bi";
import UseTheme from "../../context/ThemeToggle.jsx";
import {useEffect, useState} from "react";
import {auth} from "../../../setup/firebase/firebase.jsx";
import {deleteUser, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const UserAbout = () => {
    // const user = useGetUser()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const user = auth.currentUser;
    const navigate = useNavigate()
    const deleteFunc = () => {
        setLoading(true)
        setTimeout(() => {
            deleteUser(user).then(() => {
                // User deleted.

                navigate('login')
                setOpen(false)
            }).catch((error) => {
                // An error ocurred
                // ...
            }).finally(() => {
            })
            setLoading(false)

        }, 1000)
    }
    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            if (user !== null) {
                // The user object has basic properties such as display name, email, etc.
                console.log(user.uid)

                setUsers(prev => [...prev, user])

            } else {
                // User is signed out
                // ...
            }
        });
        setLoading(false)
    }, [user, loading]);

    return (<div className="user-block">
        {users && <>
            <div className="dark-light">
                <UseTheme/>
            </div>
            <div className="desktop-icon">
                <FaDesktop/>
            </div>
            <div className="envelope-icon">
                <BiEnvelope/>
            </div>
            <div className="user-icon relative cursor-auto">
                <img
                    src={`${user}` && `${'https://www.shutterstock.com/image-illustration/user-sign-flat-style-icon-260nw-384122167.jpg'}`}
                    alt="" className={'w-[30px] h-[30px] rounded-[100%] cursor-pointer'}
                    onClick={() => setOpen(!open)}/>


                {open && <div
                    className={'w-[224px] h-[304px] absolute top-[55px] right-[5px] z-10 dark:bg-[#374151] rounded-5 shadow '}>
                    <p className={'text-[18px] w-full text-center mt-[5px] cursor-pointer border-b border-b-[gray]'}>{user.email}</p>
                    <button
                        className={'w-[110px] h-[40px] rounded-[5px] absolute bottom-3 bg-[rgb(230_118_110)] dark:text-[#fff] hover:dark:text-[gray]  text-[15px] left-5'}
                        onClick={deleteFunc}>{loading ? 'loading ...' : "logout"}
                    </button>
                </div>}
            </div>
        </>}
    </div>);
};
