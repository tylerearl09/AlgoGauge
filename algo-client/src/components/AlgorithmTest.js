import React from 'react'
import Select from 'react-select'
import '../App.css';

const sortOptions = [
    { value: 'Bubble Sort', label: 'Bubble Sort'},
    { value: 'Insertion Sort', label: 'Insertion Sort'},
    { value: 'Quick Sort', label: 'Quick Sort'},
    { value: 'Merge Sort', label: 'Merge Sort'},
    { value: 'Heap Sort', label: 'Heap Sort'},
    { value: 'Selection Sort', label: 'Selection Sort'}
]

const modifiers = [
    { value: 'Full Random', label: 'Full Random'},
    { value: 'Partial Sort', label: 'Partial Sort'},
    { value: 'Groups Sorted', label: 'Groups Sorted'},
    { value: 'Reverse Sort', label: 'Reverse Sort'},
    { value: 'Full Sort', label: 'Full Sort'},
    { value: 'Repeats', label: 'Repeat'}
]


const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "#023950",
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "yellow" : "green",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "red" : "blue"
        },
        // Text Color, {This does nothing at the moment}
        //color: "#FFFFFF",
    }),
    menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        background: "#023950",
        // kill the white space on first and last option
        padding: 0
    }),
    option: (styles, {isFocused, isSelected}) => ({
        ...styles,
        background: isFocused ? '#000000'
                  : isSelected ? '#FF0000'
                  : undefined,
        // Text Color for the drop down options
        color: "#FFFFFF",
        zIndex: 1
    }),
};


function AlgorithmTest (props) {

    return(
        <div className="testing">
            <p>Algorithm #{props.number}</p>            
            <Select styles={customStyles} options={sortOptions} placeholder='Choose your algorithm...'/>
         
            <Select styles={customStyles} options={modifiers} placeholder='Choose your modifier...'/>
        </div>
    );
}
export default AlgorithmTest;
