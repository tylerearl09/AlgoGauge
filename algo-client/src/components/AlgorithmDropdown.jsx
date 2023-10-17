import React from "react";
import Select from "react-select";

const sortOptions = [
  { value: "bubble", label: "Bubble Sort" },
  { value: "insertion", label: "Insertion Sort" },
  { value: "quick", label: "Quick Sort" },
  { value: "merge", label: "Merge Sort" },
  { value: "heap", label: "Heap Sort" },
  { value: "selection", label: "Selection Sort" },
];

const modifiers = [
  { value: "Full Random", label: "Full Random" },
  { value: "Partial Sort", label: "Partial Sort" },
  { value: "Groups Sorted", label: "Groups Sorted" },
  { value: "Reverse Sort", label: "Reverse Sort" },
  { value: "Full Sort", label: "Full Sort" },
  { value: "Repeats", label: "Repeat" },
];



export default function AlgorithmDropdown(props) {
  return (
    <div>
      <p>Algorithm #{props.number}</p>
      <Select
        className="mb-4"
        options={sortOptions}
        placeholder="Choose your algorithm..."
        onChange={props.onAlgoChange}
      />
      <p>Modifiers</p>
      <Select options={modifiers} 
      placeholder="Choose your modifier..."
      onChange={props.onModChange} />
    </div>
  );
}
