import "./App.css";
import HelloWorld from "./pages/HelloWorld";
import Selection from "./pages/Selection";
import NavBar from "./components/Navbar";
import History from "./pages/History";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Selection />} />
        <Route exact path="/hello" element={<HelloWorld />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
