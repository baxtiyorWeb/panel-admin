import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./components/layout/Layout"
import Main from "./components/main/Main"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
        </Route>
      </Routes>
    </>
  )
}

export default App