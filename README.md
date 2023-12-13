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
* Merge

The user can then choose data ordering based on:

* Random Ordering
* Reverse Ordering
* Completely Ordered
* Repeated Values
* and Chunks

Once the user selects these options, they have the ability to select the number of items using either the slider or the text box. The text box has a limit of unsigned int as a max, while the slider has different maxes based on the algorithm.

The user is then redirected to a results page that contains the information passed from the two tests as well as a winner based on the Wall Time.

There is also a history page that shows all the tests that have been run with the ability to click on any given test and see a results page with that specific test.

## What It does not do/Todos

There are many features that still need to be added to the program, including:

* A queueing system that shows the user where they are in a queue, for now, we just display a modal simulating a queue
* The ability to compare and contrast more than 2 tests
* The ability to compare and contrast hashing algorithms
* Displaying perf date from the tests (it is returned to the DataBase, we just currently are not doing anything with it on the results screen)
* An about me page describing the purpose of the program and other relevant data.
* The ability to select additional options, is yet to be outlined by the professor when choosing algorithms from the dropdown.

## Running the project as it stands

As it stands the project should run locally without many hiccups. Upon cloning the repository to your local machine you should:

* Make sure you have Node installed on your local machine
* Run npm install on the algo-client and algo-server folders (this will install all the packages needed to run the program)
* Create a .env file in both the algo-client and algo-server folders containing the following variables

For the algo-client .env:
* REACT_APP_BACKEND_PORT=5000 (The Port can be anything, 5000 is just used as an example here)

For the algo-server .env:
* ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.9ktfzny.mongodb.net/?retryWrites=true&w=majority (This is the string we used, but it could change in the future, look at MongoDB documentation to be sure)
* PORT=4000 (Again the port can be anything, 4000 is the example)

To note that currently, the backend is using a MongoDB Atlas data store, you will have to configure your own Atlas data store with a collection named 'records' to begin.

After following these steps you should be able to run the command 'npm start' on both the frontend(Algo-Client) and backend(Algo-Server) to see the project in your browser.

## Deploying the project

Deploying is something that is still a todo, and maybe something that you'll have to figure out on your own. Sorry about that

## Final Thoughts

We enjoyed working on this project, and hope you do too, good luck!
