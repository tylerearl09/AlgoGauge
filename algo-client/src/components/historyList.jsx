import React, { useEffect, useState } from "react";

const Record = (props) => (
    <>
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.algoOne}</td>        
        <td>{props.record.modOne}</td>
        <td>{props.record.amountOne}</td>
        <td>{props.record.algoTwo}</td>
        <td>{props.record.modTwo}</td>
        <td>{props.record.amountTwo}</td>
    </tr>
    {/* <tr>
        <td>{props.record.timeOne}</td>
        <td>{props.record.timeTwo}</td>
    </tr> */}
    </>
);

export default function HistoryList(){
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords(){
            const response = await fetch(`http://localhost:5000/record/`);

            if (!response.ok){
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

    function recordList(){
        return records.map((record)=> {
            return(
                <Record
                    record={record}
                    key={record._id}
                />
            );
        });
    }

    return(
        <div>
            <h3 style={{ color: "white"}}>Past Tests</h3>
            <table className="table table-striped" style={{ marginTop:20}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Algorithm 1</th>                        
                        <th>Modification 1</th>
                        <th>Amount 1</th>
                        <th>Algorithm 2</th>
                        <th>Modification 1</th>
                        <th>Amount 2</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    );
}