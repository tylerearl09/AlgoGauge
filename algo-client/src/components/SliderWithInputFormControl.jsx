import React, { useState, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { Form } from "react-bootstrap";

let stepValues = [];

function getMaxValue(algoName) {
  let max = 0;
  switch (algoName) {
    case "bubble":
      max = 1000;
      stepValues = [0, 10, 150, 500, 625, 750, 880, 900, 925, 1000];
      break;
    case "insertion":
      max = 12500;
      stepValues = [
        0, 10, 325, 650, 1000, 1750, 2500, 3900, 5600, 7500, 10000, 12500,
      ];
      break;
    case "quick":
      max = 402945;
      stepValues = [
        0, 10, 950, 1500, 5000, 8950, 12500, 22500, 75000, 125000, 323000,
        402945,
      ];
      break;
    case "merge":
      max = 2355;
      stepValues = [0, 15, 25, 78, 125, 500, 829, 1000, 1250, 1750, 2000, 2355];
      break;
    case "heap":
      max = 4829;
      stepValues = [
        0, 25, 50, 75, 100, 200, 400, 800, 1200, 2000, 2800, 3500, 4000, 4829,
      ];
      break;
    case "selection":
      max = 50299;
      stepValues = [
        0, 25, 50, 75, 100, 200, 1000, 2500, 10000, 15000, 35000, 42500, 50299,
      ];
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
    setStep(max / 5);
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
              list="yo"
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
