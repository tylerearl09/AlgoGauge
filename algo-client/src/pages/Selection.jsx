import OptionContainer from "../components/OptionContainer";
import "../App.css";

import { useState } from "react";
import { useNavigate } from "react-router";

import Button from "react-bootstrap/Button";
import ViewQueueModal from "../components/ViewQueueModal";

export default function Selection() {
  const timeout_time = 30000;
  const navigate = useNavigate();

  const [algoName, setAlgoName] = useState([]);

  const [modName, setModName] = useState(["Full Random", "Full Random"]);

  const [dataAmount, setDataAmount] = useState([]);

  const [name, setName] = useState();

  const handleAlgoNameChange = (number, newAlgorithmName) => {
    let temp = algoName;
    temp[number] = newAlgorithmName;
    setAlgoName(temp);
  };

  const handleModChange = (number, newModName) => {
    let temp = modName;
    temp[number] = newModName;
    setModName(temp);
  };

  const handleDataAmountChange = (number, newDataAmount) => {
    let temp = dataAmount;
    temp[number] = newDataAmount;
    setDataAmount(temp);
  };

  async function handleOnSubmit() {
    let algoOne = algoName[0];
    let algoTwo = algoName[1];
    let amountOne = dataAmount[0];
    let amountTwo = dataAmount[1];
    let modOne = modName[0];
    let modTwo = modName[1];

    const newTest = {
      name,
      algoOne,
      algoTwo,
      modOne,
      modTwo,
      amountOne,
      amountTwo,
    };

    let errorCaught = false;

    const controller = new AbortController();

    const timeoutId = setTimeout(() => controller.abort(), timeout_time);
    let testResults = ""
    //await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/record/test`, {
    const response = await fetch(
      `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/record/test`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTest),
        signal: controller.signal,
      }
    )
      .catch((error) => {
        // Caught timeout error
        //console.log("Error Caught: " + error)
        errorCaught = true;
        //window.alert(error.message)
        console.log("Error Caught");
        //return;
      })
      .then((response) => {
        // Handle the internal timeout
        clearTimeout(timeoutId);
        testResults = response;     
      });
    console.log("Test Back");
    if (!errorCaught) {
      
      const results = await testResults.json();
      localStorage.setItem("results", JSON.stringify(results.algorithms))
      setName("");
      setAlgoName([]);
      setModName([]);
      navigate("/results");
    } else {
      // Hide the Queue
      setModalShow(false);
      // Show error about timeout
      // --- Convert to modal, or just clean up in general
      window.alert("Test timed out, please lower values");
    }
  }

  // Modal for the Queue
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center border-bottom display-5 mt-3">
            ALGORITHM COMPARISONS
          </h2>
        </div>
      </div>
      <div className="d-flex">
        <div className="container container-bg shadow-lg rounded-4 pb-5 pt-4">
          <div className="row justify-content-between">
            <div className="col-md-5">
              <div className="input-group">
                <label className="fw-bold input-group-text">Your name:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="input-group">
                <label className="fw-bold input-group-text">
                  Algorithm type:
                </label>
                <select className="form-select">
                  <option value="" disabled defaultValue={""}>
                    Select a Category....
                  </option>
                  <option value="sorting">Sorting Algorithms</option>
                  <option value="hashing">Hashing Algorithms</option>
                </select>
              </div>
            </div>
          </div>
          <hr className="mt-4 mb-2" />
          <div className="row pb-5 pt-2 mx-auto justify-content-center align-items-center">
            <OptionContainer
              number={1}
              algoName={algoName[0]}
              onChange={handleAlgoNameChange}
              onModChange={handleModChange}
              handleDataAmountChange={handleDataAmountChange}
            />
            <div className="col-md-1 text-center display-6  font-monospace">
              VS
            </div>
            <OptionContainer
              number={2}
              algoName={algoName[1]}
              onChange={handleAlgoNameChange}
              onModChange={handleModChange}
              handleDataAmountChange={handleDataAmountChange}
            />
          </div>
          <div className="row mx-auto justify-content-center">
            <div className="col-md-3 text-center">
              <Button
                className="btn btn-lg btn-success"
                onClick={() => {
                  handleOnSubmit();
                  setModalShow(true);
                }}
              >
                Run Tests!
              </Button>
            </div>
          </div>
        </div>
        <ViewQueueModal
          name="Test"
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
        />
      </div>
    </div>
  );
}
