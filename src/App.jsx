import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import Enqueries from "./components/pages/Enqueries";
import Students from "./components/pages/Student";
import EnqueiriesLayout from "./components/layout/enqueiriesLayout";
import AddForm from "./components/pages/addEnqueries";
import { useState } from "react";
import { AddStudents } from "./components/pages/addStudents";
import { StudentsLayout } from "./components/layout/StudentsLayout";
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout open={open} setOpen={setOpen} />}>
          <Route path="/" element={<Main open={open} setOpen={setOpen} />} />
          <Route
            path="/home"
            element={<Main />}
            open={open}
            setOpen={setOpen}
          />
          <Route
            path="/enquiries"
            element={<Enqueries open={open} setOpen={setOpen} />}
          />
          <Route path="/students" element={<Students open={open} />} />
          <Route path="/layout" element={<EnqueiriesLayout />}>
            <Route path="/layout/addform" element={<AddForm />} />
          </Route>
          <Route
            path="/students/addStudent"
            element={<StudentsLayout open={open} setOpen={setOpen} />}
          >
            <Route
              path="/students/addStudent"
              element={<AddStudents open={open} setOpen={setOpen} />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
