import { useState } from "react";
import { uid } from "uid";
import { realTimeDatabase } from "../setup/firebase/firebase";
import { set, ref } from "firebase/database";

const useRealTimeDatabase = () => {
  //   const [saveUsers, setSaveUsers] = useState({
  //     user_name: "",
  //     user_email: "",
  //     user_phone: "",
  //     user_cnic: "",
  //     user_for_course: "",
  //     user_pref_time: "",
  //   });
  const [saveUsers, setSaveUsers] = useState([]);

  const userId = uid();
  //   const users = { ...saveUsers };
  //   const name = users.user_name;
  //   const email = users.user_email;
  //   const phone = users.user_phone;
  //   const cnic = users.user_cnic;
  //   const course = users.user_for_course;
  //   const prefferd_time = users.user_pref_time;
  function writeUserData(name) {
    const REF = "users_name_about/" + userId;
    set(ref(realTimeDatabase, REF), {
      //  user_name: name,
      //  email: email,
      //  phone: phone,
      //  cnic: cnic,
      //  course: course,
      //  prefferd_time: prefferd_time,
      name: name,
    });
  }
  return { saveUsers, setSaveUsers, writeUserData };
};

export default useRealTimeDatabase;
