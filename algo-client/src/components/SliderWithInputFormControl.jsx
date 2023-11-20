import React, { useState, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { Form } from "react-bootstrap";

function getMaxValue(algoName) {
  let max = 0;
  switch (algoName) {
    case "bubble":
      max = 1000;
      break;
    case "insertion":
      max = 12500;
      break;
    case "quick":
      max = 402950;
      break;
    case "merge":
      max = 2400;
      break;
    case "heap":
      max = 4830;
      break;
    case "selection":
      max = 50300;
      break;
    default:
      max = 0;
      break;
  }
  return max;
}

export default function SliderWithInputFormControl(props) {
  let min = 0;
  let maxTextBox = 4294967294;
  const [value, setValue] = useState(min);
  const [max, setMax] = useState(0);
  const [step, setStep] = useState(0);

  const onChange = (amount) => {
    setValue(amount.target.value);
    props.setDataAmount(amount.target.value);
  };

  const onNumChange = (amount) => {
    let valToSet =
      amount.target.value > maxTextBox ? 4294967294 : amount.target.value;
    setValue(valToSet);
    props.setDataAmount(amount.target.value);
  };

  useEffect(() => {
    setMax(getMaxValue(props.algoName));
    setValue(0);
    setStep(max / 10);
  }, [props.algoName, max]);

  return (
    <>
      <div className="form-group align-items-center">
        <div className="row ms-2 justify-content-center"></div>
        <div className="row ms-2">
          <div className="col-md-7">
            <RangeSlider
              value={value}
              onChange={onChange}
              readOnly
              max={max}
              min={min}
              step={step}
              variant="primary"
              size="lg"
            />
          </div>
          <div className="col-md-4 ms-2 my-auto text-center">
            <Form.Control value={value} onChange={onNumChange} />
          </div>
        </div>
      </div>
    </>
  );
}
