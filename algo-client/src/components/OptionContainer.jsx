import AlgorithmDropdown from "./AlgorithmDropdown";
import SliderWithInputFormControl from "./SliderWithInputFormControl";
import { useEffect, useState } from "react";
import ViewCodeModal from "./ViewCodeModal";
import Button from "react-bootstrap/Button";
import "../App.css";

export default function OptionContainer(props) {
  const [modalShow, setModalShow] = useState(false);

  const [algoName, setAlgoName] = useState();

  const handleChange = (number, algorithm) => {
    setAlgoName(algorithm);
    props.onChange(number, algorithm);
  };

  const handleAlgoChange = (algorithm) => {
    setAlgoName(algorithm.value);
    props.onChange(props.number - 1, algorithm.value);
  };

  const handleDataChange = (amount) => {
    props.handleDataAmountChange(props.number - 1, amount);
  };

  const handleModChange = (mod) => {
    props.onModChange(props.number - 1, mod.value);
  };

  return (
    <>
      <div className="col-md-5 border rounded border-primary m-3 p-3">
        <AlgorithmDropdown onChange={handleChange} number={props.number} />
        <div className="mb-5">
          <label htmlFor="customRange2" className="form-label mt-3">
            # of Items:
          </label>
          <SliderWithInputFormControl
            algoName={algoName}
            setDataAmount={handleDataChange}
          />
        </div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Show Code
        </Button>
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
