import React, { useState, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { Form } from "react-bootstrap";

function LogSlider(options) {
  options = options || {};
  this.minpos = options.minpos || 0;
  this.maxpos = options.maxpos || 100;
  this.minlval = Math.log(options.minval || 1);
  this.maxlval = Math.log(options.maxval || 100000);

  this.scale = (this.maxlval - this.minlval) / (this.maxpos - this.minpos);
}

LogSlider.prototype = {
  // Calculate value from a slider position
  value: function (position) {
    return Math.exp((position - this.minpos) * this.scale + this.minlval);
  },
  // Calculate slider position from a value
  position: function (value) {
    return this.minpos + (Math.log(value) - this.minlval) / this.scale;
  },
};

function getMaxValue(algoName) {
  let max = 4294967295;
  switch (algoName) {
    case "bubble":
      max = 1000;
      break;
    case "insertion":
      max = 12500;
      break;
    case "quick":
      max = 42945;
      break;
    case "merge":
      max = 2355;
      break;
    case "heap":
      max = 4829;
      break;
    case "selection":
      max = 5029;
      break;
    default:
      max = 0;
      break;
  }
  return max;
}

export default function SliderWithInputFormControl(props) {
  let min = 0;
  let maxTextBox = 4294967295;
  const [value, setValue] = useState(min);
  const [max, setMax] = useState(0);
  const step = 1;

  const onChange = (amount) => {
    setValue(amount.target.value);
    props.setDataAmount(amount.target.value);
  };

  const onNumChange = (amount) => {
    let valToSet =
      amount.target.value > maxTextBox ? 4294967295 : amount.target.value;
    setValue(valToSet);
  };

  useEffect(() => {
    setMax(getMaxValue(props.algoName));
    setValue(0);
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
