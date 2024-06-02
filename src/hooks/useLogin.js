import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useHref, useNavigate } from "react-router-dom";
import { auth } from "../setup/firebase/firebase.jsx";

export const useLogin = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin123./");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const href = useHref();
  href;
  const signUp = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            navigate("/");
            setEmail("");
            setPassword("");

            // ...
          } else {
            // User is signed out
            // ...
          }
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage, " :", "bunday ");
        // ..
      });
  };
  return { error, setError, setEmail, setPassword, email, password, signUp };
};
