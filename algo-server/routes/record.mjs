import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
//const { exec } = require('child_process');
import { exec } from 'child_process'

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("testResults");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
//router.get("/:id", async (req, res) => {
//  let collection = await db.collection("records");
//  let query = {_id: new ObjectId(req.params.id)};
//  let result = await collection.findOne(query);

//  if (!result) res.send("Not found").status(404);
//  else res.send(result).status(200);
//});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  console.log("/ Post")
  let newDocument = {
    name: req.body.name,
    algoOne: req.body.algoOne,
    algoTwo: req.body.algoTwo,
    modOne: req.body.modOne,
    modTwo: req.body.modTwo,
    amountOne: req.body.amountOne,
    amountTwo: req.body.amountTwo
  };
  let collection = await db.collection("records");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
//router.patch("/:id", async (req, res) => {
//  const query = { _id: new ObjectId(req.params.id) };
//  const updates =  {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level
//    }
//  };
//
//  let collection = await db.collection("records");
//  let result = await collection.updateOne(query, updates);
//
//  res.send(result).status(200);
//});

// This section will help you delete a record
//router.delete("/:id", async (req, res) => {
//  const query = { _id: new ObjectId(req.params.id) };
//
//  const collection = db.collection("records");
//  let result = await collection.deleteOne(query);
//
//  res.send(result).status(200);
//});



router.post("/test", async (req, resp) => {
  try {
    console.log("Running Algo Test") 

    //exec("powershell cat helloWorld.cpp", (error, stdout, stderr) => {
    exec("wsl ./AlgoGauge -j " + parseToCMDArgument(req.body), {timeout:300}, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        resp.send("Time Out: Please enter a smaller value").status(416);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      // console.log(`stdout: ${stdout}`);
      let output = `${stdout}`
      //resp.send( JSON.stringify(`${stdout}`) );
      const sendData = async (data) => {
        //console.log("Inside Async");
        let collection = await db.collection("testResults");     
        data.name = req.body.name
        let result = await collection.insertOne(data);
      } 

      let filtered = JSON.parse(output);

      sendData(filtered)


      resp.send(output).status(204);
    });
  } catch (e) {
    console.log(e);
    resp.send(e);
  }
});

function parseToCMDArgument(body) {
    let algoOne = body.algoOne
    let algoTwo = body.algoTwo
    let modOne = body.modOne
    let modTwo = body.modTwo
    let amountOne = body.amountOne
    let amountTwo = body.amountTwo

    // Still need to convert modOne and ModTwo to arguments

    let output = `--algo ${algoOne} --length ${amountOne} ${convertModParams(modOne)} --algo ${algoTwo} --length ${amountTwo} ${convertModParams(modTwo)}`

    console.log(output);

    return output;
}

function convertModParams(mod) {

  switch (mod.toLowerCase()) {
    case 'full random':
      return '-r' 
    case 'repeats':
      return '-e'
    case 'partial sort':
      return '-e'
    case 'full sort':
      return '-o'
    case 'reverse sort':
      return '-s'
    case 'groups sorted':
      return '-c'
    default:
      return '-r' 
  }
}

export default router;
