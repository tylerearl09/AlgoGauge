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

export default function AlgorithmDropdown({ onChange }) {
const customStyles = {
  control: (base, state) => ({
    ...base,
    // Change Background Color
    background: "#023950",
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "yellow" : "green",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "red" : "blue",
    },
  }),
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    background: "#023950",
    // kill the white space on first and last option
    padding: 0,
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused ? "#000000" : isSelected ? "#028090" : undefined,
    // Text Color for the drop down options
    color: "#D4F4DD",
    zIndex: 1,
  }),
};

export default function AlgorithmDropdown(props) {
  return (
    <div>
      <label className="font-monospace fs-5 pb-3">Algorithm:</label>
    <div className="testing">
      <p>Algorithm #{props.number}</p>
      <Select
        className="mb-4"
        options={sortOptions}
        placeholder="Choose your algorithm..."
        onChange={props.onAlgoChange}
      />
      <p>Data Distribution:</p>
      <Select
        options={modifiers}
        placeholder="Choose your modifier..."
        onChange={props.onModChange}
        styles={selectStyles}
      />

      {/* <Select options={modifiers} placeholder="Choose your modifier..." /> */}
    </div>
  );
}
