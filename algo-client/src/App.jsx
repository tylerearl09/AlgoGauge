import HelloWorld from "./pages/HelloWorld";
import Selection from "./pages/Selection";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div data-bs-theme="dark">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Selection />} />
        <Route exact path="/hello" element={<HelloWorld />} />
      </Routes>
    </div>
  );
}

export default App;
