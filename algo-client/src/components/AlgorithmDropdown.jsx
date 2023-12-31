import React from "react";
import Select from "react-select";
import "../App.css";

const sortOptions = [
  { value: "bubble", label: "Bubble Sort" },
  { value: "insertion", label: "Insertion Sort" },
  { value: "quick", label: "Quick Sort" },
  { value: "merge", label: "Merge Sort" },
  { value: "heap", label: "Heap Sort" },
  { value: "selection", label: "Selection Sort" },
];

const selectStyles = {
  control: (base, state) => ({
    ...base,
    background: "#212529",
    borderRadius: "0.375rem",
    borderColor: "#495057",
    color: "#fff",
  }),
  option: (base, state) => ({
    ...base,
    background: state.isFocused
      ? "#0d6efd"
      : state.isSelected
      ? "#0d6efd"
      : "#101113",
    color: "#fff",
    borderRadius: "0.375rem",
    marginTop: 1,
  }),
  menuList: (base) => ({
    ...base,
    background: "#101113",
    borderRadius: "0.375rem",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.375rem",
    marginTop: 0,
  }),
  placeholder: (base) => ({
    ...base,
    color: "#fff",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
};

export default function AlgorithmDropdown(props) {
  return (
    <div className="input-group">
      <label className="font-monospace input-group-text">Algorithm:</label>
      <div className="form-control react-select p-0">
        <Select
          options={sortOptions}
          placeholder="Select..."
          onChange={props.onAlgoChange}
          styles={selectStyles}
        />
      </div>
    </div>
  );
}
