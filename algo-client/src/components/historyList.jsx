import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom"



export default function HistoryList() {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  const recordClicked = (props)=> {
    // localStorage.setItem("results", JSON.stringify(e.target.record));
    localStorage.setItem("results", JSON.stringify(props.record.algorithms))    
    navigate("/results")
  }
  
  const Record = (props) => (
    <>
      <tr onClick= {()=> recordClicked(props)}>
        <td>{props.record.name}</td>
        <td>{props.record.algorithms[0].algorithmName}</td>
        <td>{props.record.algorithms[0].algorithmOption}</td>
        <td>{props.record.algorithms[0].algorithmLength}</td>
        <td>{props.record.algorithms[0].algorithmRunTime_ms}</td>
        <td>{props.record.algorithms[1].algorithmName}</td>
        <td>{props.record.algorithms[1].algorithmOption}</td>
        <td>{props.record.algorithms[1].algorithmLength}</td>
        <td>{props.record.algorithms[1].algorithmRunTime_ms}</td>
      </tr>
    </>
  );

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/record/`
      );

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id}/>;
    });
  }

  

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center border-bottom display-5 mt-3">
            PAST TESTS
          </h2>
        </div>
      </div>
      <div className="d-flex justify-content-center border-orange rounded shadow-lg w-75 mx-auto mt-3">
        <table className="table table-striped px-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Algorithm 1</th>
              <th>Modification 1</th>
              <th>Amount 1</th>
              <th>Run Time (ms)</th>
              <th>Algorithm 2</th>
              <th>Modification 2</th>
              <th>Amount 2</th>
              <th>Run Time (ms)</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>
    </div>
  );
}
