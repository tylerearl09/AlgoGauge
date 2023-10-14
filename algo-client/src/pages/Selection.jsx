import OptionContainer from "../components/OptionContainer";
import { useState } from "react";

export default function Selection() {

  const [algoName, setAlgoName] = useState([]);

  const [name, setName] = useState();

  const handleNameChange = (number, newAlgorithmName) => {
    
    let temp = algoName;
    temp[number] = newAlgorithmName;
    setAlgoName(temp);   
  };


  async function handleOnSubmit (e) {
    e.preventDefault();

    console.log("Submit");

    let algoOne = algoName[0];
    let algoTwo = algoName[1];

    const newTest = {name, algoOne, algoTwo}
    

    await fetch("http://localhost:5000/record", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newTest),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setName("");
    setAlgoName([]);
  }


  return (
    <div className="App-header">
      <div className="row mt-5 align-items-center">
        <div className="ms-5 ps-4 col-md-2">
          <label htmlFor="nameInput" className="form-label fw-bold display-6">
            Name
          </label>
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control border border-dark"
            name="nameInput"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="row m-5 align-items-center">
        <OptionContainer number={1} algoName={algoName[0]} onChange={handleNameChange}/>
        <div className="col-md-1 text-center">VS</div>
        <OptionContainer number={2} algoName={algoName[1]} onChange={handleNameChange}/>
      </div>
      <div className="row align-items-center justify-content-end">
        <div className="col-md-3 text-center">
          <button className="btn btn-success" onClick={handleOnSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
