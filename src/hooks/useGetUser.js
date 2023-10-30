import {useNavigate} from "react-router-dom";
import {auth} from "../setup/firebase/firebase.jsx";
import {useEffect} from "react";

export const useGetUser = () => {
    const navigate = useNavigate()

    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // ...

        } else {
            // No user is signed in.

        }
    }, [navigate, user]);
    return {navigate, user}
}
