import AlgorithmDropdown from "./AlgorithmDropdown";
import SliderWithInputFormControl from "./SliderWithInputFormControl";
import { useState } from "react";
import ViewCodeModal from "./ViewCodeModal";
import "../App.css";

export default function OptionContainer(props) {
  const [algoName, setAlgoName] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const handleNameChange = (newAlgorithmName) => {
    setAlgoName(newAlgorithmName.value);
  };

  return (
    <>
      <div className="col-md-5 border-orange rounded-4 bg-dark m-3 p-3">
        <AlgorithmDropdown onChange={handleNameChange} number={props.number} />
        <div className="mb-5">
          <label htmlFor="customRange2" className="form-label mt-3">
            # of Items:
          </label>
          <SliderWithInputFormControl algoName={algoName} />
        </div>
        <button className="btn btn-link" onClick={() => setModalShow(true)}>
          Show Code
        </button>
        <ViewCodeModal
          className="App-Header"
          name={algoName}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
