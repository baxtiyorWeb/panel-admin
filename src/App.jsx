import { Route, Routes } from "react-router-dom";
import  "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import Enqueries from "./components/pages/Enqueries";
import Students from "./components/pages/Student";
import EnqueiriesLayout from "./components/layout/enqueiriesLayout";
import AddForm from "./components/pages/addEnqueries";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/enquiries" element={<Enqueries />} />
          <Route path="/students" element={<Students />} />
          <Route path="/layout" element={<EnqueiriesLayout />}>
            <Route path="/layout/addform" element={<AddForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
