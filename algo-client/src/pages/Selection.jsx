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

    await fetch(
      `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/record`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTest),
      }
    ).catch((error) => {
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
      <div className="d-flex">
        <div className="container container-bg shadow-lg rounded-4 py-5">
          <div className="d-flex justify-content-between"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-md-4 text-end">
                  <label className="fw-bold h4 ">Your name:</label>
                </div>
                <div className="col-md-5">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-md-5 text-end">
                  <label className="fw-bold h4 ">Algorithm type:</label>
                </div>
                <div className="col-md-5">
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
          </div>
          <div className="row pb-5 pt-2 mx-auto justify-content-center align-items-center">
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
