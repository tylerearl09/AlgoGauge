import React, { useState, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";

function getMaxValue(algoName) {
  let max = 0;
  switch (algoName) {
    case "bubble":
      max = 10;
      break;
    case "insertion":
      max = 100;
      break;
    case "quick":
      max = 1000;
      break;
    case "merge":
      max = 1010;
      break;
    case "heap":
      max = 10000;
      break;
    case "selection":
      max = 2500;
      break;
    default:
      max = 0;
      break;
  }
  return max;
}

export default function SliderWithInputFormControl(props) {
  // const [min, setMin] = useState(0); May use state later.
  let min = 0;
  const [value, setValue] = useState(min);
  const [max, setMax] = useState(0);
  const [step, setStep] = useState(1);

  const onChange = (amount) => {
    setValue(amount.target.value);
    props.setDataAmount(amount.target.value);
  }

  useEffect(() => {
    setMax(getMaxValue(props.algoName));
    setValue(0);
    setStep(max / 10);
  }, [props.algoName, max]);

  return (
    <>
      <div className="form-group align-items-center">
        <div className="row ms-2">
          <div className="col-md-9">
            <RangeSlider
              value={value}
              onChange={onChange}
              readOnly
              max={max}
              min={min}
              step={step}
            />
          </div>
          <div className="col-md-2 ms-2 mt-2">
            <label>{value}</label>
          </div>
        </div>
      </div>
    </>
  );
}
