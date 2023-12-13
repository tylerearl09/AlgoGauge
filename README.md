# AlgoGauge
---
## About

AlgoGauge is a project created by Karl A, Caden S, and Tyler E for CS 4760. It's purpose is to allow the user compare and contrast different sorting and hashing algorithms using different parameters to see in real time the performance of each algorithm. The project is built using the MERN stack with a React Front End and a Node/Express backend that runs C++ code comparing and contrasting different algorithms. The C++ code then returns a JSON object that is passed along to the React Front end.

## What It currently does

The AlgoGauge project currently can compare and contrast based on sorting algorithms. For now the user can compare exactly 2 sorting algorithms of the categories:
* Bubble
* Quick
* Insertion
* Heap
* Selection
* and Merge

The user can then choose data ordering based on:

* Random Ordering
* Reverse Ordering
* Completely Ordered
* Repeated Values
* and Chunks

Once the user selects these options, they have the ability to select the number of items using either the slider or the text box. The text box has a limit of unsigned int as a max, while the slider has different maxes based on the algorithm.

The user is then redirected to a results page the contains the information passed from the two tests as well as a winner based on the Wall Time.

There is also a history page that shows all the tests that have been run with the ability to click on any given test and see a results page with that specific test.

## What It does not do/Todos

There are many features that still need to be added to the program, including:

* A queueing system that shows the user where they are at in a queue, for now we just display a modal simulating a queue
* The ability to compare and contrast more than 2 tests
* The ability to compare and contrast hashing algorithms
* Displaying perf date from the tests (it is returned from the JSON, we just currently are not doing anything with it)
* An about me page describing the purpose of the program and other relevent data.
* The ability to select additional options, yet to be outlined by the professor, when choosing algorithms from the dropdown.
