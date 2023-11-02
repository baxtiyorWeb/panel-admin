import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {useState} from "react";
import {auth} from "../setup/firebase/firebase.jsx";
import {useNavigate} from "react-router-dom";

export const useLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user)
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/auth.user
                        const uid = user.uid;
                        navigate(uid ? '/' : '/login')
                        setEmail('')
                        setPassword('')

                        // ...
                    } else {
                        // User is signed out
                        // ...
                    }
                });

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }
    return {error, setError, setEmail, setPassword, email, password, signUp}
}