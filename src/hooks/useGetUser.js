import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../setup/firebase/firebase.jsx";

export const useGetUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;

  useEffect(() => {
    setLoading(true);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // ...
      user.email;
    } else {
      // No user is signed in.
    }
    setLoading(false);
  }, [user, loading]);
  return { navigate, user, loading };
};
