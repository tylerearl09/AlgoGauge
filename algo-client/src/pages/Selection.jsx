import OptionContainer from "../components/OptionContainer";
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

  async function handleOnSubmit(e) {
    e.preventDefault();

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

    await fetch("http://localhost:5000/record", {
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
        <OptionContainer
          number={1}
          algoName={algoName[0]}
          onChange={handleNameChange}
          onModChange={handleModChange}
          handleDataAmountChange={handleDataAmountChange}
        />
        <div className="col-md-1 text-center">VS</div>
        <OptionContainer
          number={2}
          algoName={algoName[1]}
          onChange={handleNameChange}
          onModChange={handleModChange}
          handleDataAmountChange={handleDataAmountChange}
        />
      </div>
      <div className="row align-items-center justify-content-end">
        <div className="col-md-3 text-center">
          <Button
            className="btn btn-success"
            onClick={() => setModalShow(true)}
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </div>
        <ViewQueueModal
          className="App-Header"
          name="Test"
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
