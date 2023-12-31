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

  const [modifier, setModifier] = useState("Default");

  const handleAlgoChange = (algorithm) => {
    setAlgoName(algorithm.value);
    props.onChange(props.number - 1, algorithm.value);
  };

  const handleDataChange = (amount) => {
    props.handleDataAmountChange(props.number - 1, amount);
  };

  const handleModChange = (mod) => {
    props.onModChange(props.number - 1, mod);
  };

  // const onOptionChange = (e) => {
  //   setModifier(e.target.value);
  // };

  return (
    <>
      <div className="col-lg-5 border-orange rounded-4 bg-dark m-3 p-3">
        <h3 className="font-monospace text-center">
          Algorithm # {props.number}
        </h3>
        <hr className="mb-4" />
        <div className="row align-content-center justify-content-between mb-4">
          <div className="col-md-8">
            <AlgorithmDropdown onAlgoChange={handleAlgoChange} />
          </div>
          <button
            className="btn btn-link col-md-4 fs-5"
            onClick={() => setModalShow(true)}
          >
            More Info
          </button>
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
                className="col-md-4"
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
                className="col-md-4"
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
        <div className="mb-2">
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

        {/* <div className="mb-3">
          <label
            htmlFor="customRange2"
            className="form-label font-monospace fs-5 mb-3"
          >
            Additional Options:
          </label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={"addtlOpt" + props.number}
                id="inlineRadio0"
                value={[props.number, "option0"]}
                onChange={onOptionChange}
              />
              <label className="form-check-label">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={"addtlOpt" + props.number}
                id="inlineRadio1"
                value={[props.number, "option1"]}
                onChange={onOptionChange}
              />
              <label className="form-check-label">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={"addtlOpt" + props.number}
                id="inlineRadio2"
                value={[props.number, "option2"]}
                onChange={onOptionChange}
              />
              <label className="form-check-label">3</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={"addtlOpt" + props.number}
                id="inlineRadio3"
                value={[props.number, "option3"]}
                onChange={onOptionChange}
              />
              <label className="form-check-label">4</label>
            </div>
          </div>
        </div> */}

        <ViewCodeModal
          name={algoName}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
