/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../setup/firebase/firebase";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";
import ToggleBtn from "../tables/ToggleBtn";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import GetDoc from "./GetDoc";
const ModalEdited = ({
  updateId,
  setUpdateId,
  handleDeletingTicket,
  search,
  open,
  setOpen,
  searchParams,
  setSearchParams,
  userId,
  setDeleteId,
  deleteId,
}) => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [DateBirth, setDateBirth] = useState("");
  const [Email, setEmail] = useState("");
  const [cninc, setCninc] = useState("");
  const [Mobile, setMobile] = useState("");
  const [PreferredTime, setPrefferedTime] = useState("");
  const [Department, setDepartment] = useState("");
  const [Semester, setSemester] = useState("");
  const [Course, setCourse] = useState("");
  const [Mail, setMail] = useState("");
  const [feMail, setFeMale] = useState("");

 

  return (
    <div className="w-[1300px] h-[500px] bg-[#414854] fixed left-[20%] top-[20%] z-10 p-1 rounded-lg shadow-2xl">
      <GetDoc
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        userId={userId}
        handleDeletingTicket={handleDeletingTicket}
        setDeleteId={setDeleteId}
        deleteId={deleteId}
      />
    </div>
  );
};

export default ModalEdited;
