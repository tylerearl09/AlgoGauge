import AlgorithmDropdown from "./AlgorithmDropdown";
import SliderWithInputFormControl from "./SliderWithInputFormControl";
import { useState } from "react";
import ViewCodeModal from "./ViewCodeModal";
import ModifierRadio from "./ModifierRadio";
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
        <h3 className="font-monospace text-center">
          Algorithm # {props.number}
        </h3>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-md-8">
            <AlgorithmDropdown onChange={handleNameChange} />
          </div>
          <div className="col-md-4 align-self-end pb-1">
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
            <label className="font-monospace fs-5 pb-3">Modifier:</label>
            <div className="row">
              <ModifierRadio
                number={props.number}
                className="col-md-4"
                labelName="Full Random"
              />
              <ModifierRadio
                number={props.number}
                className="col-md-3"
                labelName="Repeats"
              />
              <ModifierRadio
                number={props.number}
                className="col-md-4"
                labelName="Partial Sort"
              />
              <ModifierRadio
                number={props.number}
                className="col-md-3"
                labelName="Full Sort"
              />
              <ModifierRadio
                number={props.number}
                className="col-md-4"
                labelName="Groups Sorted"
              />
              <ModifierRadio
                number={props.number}
                className="col-md-4"
                labelName="Reverse Sort"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="customRange2"
            className="form-label font-monospace fs-5 mt-3"
          >
            # of Items:
          </label>
          <SliderWithInputFormControl algoName={algoName} />
        </div>
        <div className="mb-5">
          <label
            htmlFor="customRange2"
            className="form-label font-monospace fs-5 my-3"
          >
            Additional Options:
          </label>
          <div>
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                1
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                2
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                3
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                4
              </label>
            </div>
          </div>
        </div>

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
