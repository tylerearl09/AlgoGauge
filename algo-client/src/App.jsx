import HelloWorld from "./pages/HelloWorld";
import Selection from "./pages/Selection";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import History from "./pages/History";

function App() {
  return (
    <div data-bs-theme="dark">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Selection />} />
        <Route exact path="/hello" element={<HelloWorld />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
