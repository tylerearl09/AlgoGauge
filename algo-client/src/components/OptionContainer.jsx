import AlgorithmDropdown from "./AlgorithmDropdown";
import SliderWithInputFormControl from "./SliderWithInputFormControl";
import { useState } from "react";
export default function OptionContainer(props) {
  const [algoName, setAlgoName] = useState("");

  const handleNameChange = (newAlgorithmName) => {
    setAlgoName(newAlgorithmName.value);
  };

  return (
    <>
      <div className="col-md-5 border rounded border-primary m-3 p-3">
        <AlgorithmDropdown onChange={handleNameChange} number={props.number} />
        <div>
          <label htmlFor="customRange2" className="form-label mt-3">
            # of Items:
          </label>
          <SliderWithInputFormControl algoName={algoName} />
        </div>
      </div>
    </>
  );
}
