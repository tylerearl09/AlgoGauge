import React, { useEffect, useState } from "react";

const Record = (props) => (
  <>
    <tr>
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
    {/* <tr>
        <td>{props.record.timeOne}</td>
        <td>{props.record.timeTwo}</td>
    </tr> */}
  </>
);

export default function HistoryList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/record/`);

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
      return <Record record={record} key={record._id} />;
    });
  }

  return (
    <div>
      <h3 style={{ color: "white" }}>Past Tests</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
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
  );
}
