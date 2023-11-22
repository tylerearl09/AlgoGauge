import HelloWorld from "./pages/HelloWorld";
import Selection from "./pages/Selection";
import History from "./pages/History";
import Results from "./pages/Results"
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";



function App() {
  const [results, setResults] = useState();

  const setResultsFunc = (results)=>
  {
    localStorage.setItem("results", JSON.stringify(results.algorithms));
    setResults(results)
  }
  return (
    <div data-bs-theme="dark">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Selection onResultsChange={setResultsFunc} />} />
        <Route exact path="/hello" element={<HelloWorld />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/results" element={<Results results={results}/>} />
      </Routes>
    </div>
  );
}

export default App;
