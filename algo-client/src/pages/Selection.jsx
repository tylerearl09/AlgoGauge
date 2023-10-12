import OptionContainer from "../components/OptionContainer";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router";

import Button from "react-bootstrap/Button";
import ViewQueueModal from "../components/ViewQueueModal";

export default function Selection() {
  const navigate = useNavigate();

  const [algoName, setAlgoName] = useState([]);

  const [modName, setModName] = useState([]);

  const [dataAmount, setDataAmount] = useState([]);

  const [name, setName] = useState();

  const handleNameChange = (number, newAlgorithmName) => {
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

    console.log(newTest);

    await fetch("http://localhost:4000/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTest),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setName("");
    setAlgoName([]);
    setModName([]);
    navigate("/history");
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

      <div className="row justify-content-center my-3">
        <div className="col-md-8">
          <div className="container container-bg rounded-4 shadow-lg px-5">
            <div className="row py-5">
              <div className="col-md-5 fw-bold align-self-center h4 text-end">
                Please enter in a name:
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-5 fw-bold align-self-center h4 text-end">
                Please select algorithm type:
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option value="" disabled selected>
                    Select a Category....
                  </option>
                  <option value="sorting">Sorting Algorithms</option>
                  <option value="hashing">Hashing Algorithms</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="container container-bg shadow-lg rounded-4 py-5 h-auto">
          <div className="row p-5 mx-auto justify-content-center align-items-center">
            <OptionContainer
              number={1}
              algoName={algoName[0]}
              onChange={handleNameChange}
              onModChange={handleModChange}
              handleDataAmountChange={handleDataAmountChange}
            />
            <div className="col-md-1 text-center display-6  font-monospace">
              VS
            </div>
            <OptionContainer
              number={2}
              algoName={algoName[1]}
              onChange={handleNameChange}
              onModChange={handleModChange}
              handleDataAmountChange={handleDataAmountChange}
            />
          </div>
          <div className="row mx-auto justify-content-center">
            <div className="col-md-3 text-center">
              <Button
                className="btn btn-lg btn-success"
                onClick={() => setModalShow(true)}
              >
                Run Tests!
              </Button>
            </div>
          </div>
        </div>
        <ViewQueueModal
          className="App-Header"
          name="Test"
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            handleOnSubmit();
          }}
        />
      </div>
    </div>
  );
}
