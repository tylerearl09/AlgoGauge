import AlgorithmDropdown from "./AlgorithmDropdown";
import SliderWithInputFormControl from "./SliderWithInputFormControl";
import { useState } from "react";
import ViewCodeModal from "./ViewCodeModal";
import ModifierRadio from "./ModifierRadio";
import "../App.css";
import "../App.css";

export default function OptionContainer(props) {
  const [modalShow, setModalShow] = useState(false);

  const [algoName, setAlgoName] = useState();

  const handleAlgoChange = (algorithm) => {
    setAlgoName(algorithm.value);
    console.log(algoName);
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
      <div className="col-md-5 border-orange rounded-4 bg-dark m-3 p-3">
        <h3 className="font-monospace text-center">
          Algorithm # {props.number}
        </h3>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-md-8">
            <AlgorithmDropdown onAlgoChange={handleAlgoChange} />
          </div>
          <div className="col-md-4 align-self-center mt-4 pb-1">
            <button
              className="btn btn-link fs-5"
              onClick={() => setModalShow(true)}
            >
              More Info
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="font-monospace fs-5 pb-3">
              Data Distribution:
            </label>
            <div className="row">
              <ModifierRadio
                number={props.number}
                className="col-md-4"
                labelName="Full Random"
                onChange={handleModChange}
              />
              <ModifierRadio
                number={props.number}
                className="col-md-3"
                labelName="Repeats"
                onChange={handleModChange}
              />
              <ModifierRadio
                number={props.number}
                className="col-md-4"
                labelName="Partial Sort"
                onChange={handleModChange}
              />
              <ModifierRadio
                number={props.number}
                className="col-md-3"
                labelName="Full Sort"
                onChange={handleModChange}
              />
              <ModifierRadio
                number={props.number}
                className="col-md-4"
                labelName="Groups Sorted"
                onChange={handleModChange}
              />
              <ModifierRadio
                number={props.number}
                className="col-md-4"
                labelName="Reverse Sort"
                onChange={handleModChange}
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="customRange2"
            className="form-label mt-3 fs-5 font-monospace"
          >
            Number of Items:
          </label>
          <SliderWithInputFormControl
            algoName={algoName}
            setDataAmount={handleDataChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="customRange2"
            className="form-label font-monospace fs-5 my-3"
          >
            Additional Options:
          </label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label">3</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label">4</label>
            </div>
          </div>
        </div>

        <ViewCodeModal
          name={algoName}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
