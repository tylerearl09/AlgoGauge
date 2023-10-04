import React from 'react'
import Select from 'react-select'



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




function AlgorithmTest (props) {

    return(
        <div>
            <p>Algorithm #{props.number}</p>            
            <Select options={sortOptions} placeholder='Choose your algorithm...'/>
         
            <Select options={modifiers} placeholder='Choose your modifier...'/>
        </div>
    );
}
export default AlgorithmTest;