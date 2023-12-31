import HelloWorld from "./pages/HelloWorld";
import Selection from "./pages/Selection";
import History from "./pages/History";
import Results from "./pages/Results"
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";



function App() {
 
  return (
    <div data-bs-theme="dark">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Selection />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
