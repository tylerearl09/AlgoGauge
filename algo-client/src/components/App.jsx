import "../App.css";
import HelloWorld from "../pages/HelloWorld";
import Selection from "../pages/Selection";
import History from "../pages/History";
import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HelloWorld />} />
        <Route exact path="/selection" element={<Selection />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default App;
