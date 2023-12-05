import "../App.css";
import ResultContainer from "../components/ResultContainer"

export default function Results(){    
    let results = localStorage.getItem("results")
    if(!results)
    {
        return(
            <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center border-bottom display-5 mt-3">
            NO TESTS RUN YET...
          </h2>
        </div>
      </div>
        )
    }

    let jsonObj = JSON.parse(results)

    const checkWinnerFunc = (num) => {
        if(num === 0) return jsonObj[num].algorithmRunTime_ms < jsonObj[num + 1].algorithmRunTime_ms
        else return jsonObj[num].algorithmRunTime_ms < jsonObj[num - 1].algorithmRunTime_ms
    }
    // console.log("Local: " + results)
    // console.log("Props: " + props.results.algorithms[0].algorithmName)
    console.log(jsonObj[0].algorithmName)
    return(
        <>
        <div className="row m-auto justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center border-bottom display-5 mt-3">
            RESULTS
          </h2>
        </div>
      </div>
        <div className="row pb-5 pt-2 mx-auto justify-content-center align-items-center">
          <div className="d-flex justify-content-center border-orange rounded shadow-lg w-75 mx-auto mt-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>Sorting Algorithm</th>
                  <th>Number of Items</th>
                  <th>Data Distribution</th>
                  <th>Wall Time</th>
                  <th>Perf Data 1</th>
                  <th>Perf Data 2</th>
                </tr>
              </thead>
              <tbody>
                {
                  jsonObj.map((obj, index) => 
                      <tr>
                        <th>Algorithm # {index + 1 }</th>
                        <td>{obj.algorithmName}</td>
                        <td>{obj.algorithmLength}</td>
                        <td>{obj.algorithmOption}</td>
                        <td className={(checkWinnerFunc(index) ? "text-warning" : "")}>{obj.algorithmRunTime_ms}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    )
                }
              </tbody>
            </table>
          </div>
            {/* <div className="col-lg-5 border-orange rounded-4 bg-dark m-3 p-3">
                <ResultContainer 
                    id={1} 
                    algoName={jsonObj[0].algorithmName} 
                    amount={jsonObj[0].algorithmLength} 
                    mod={jsonObj[0].algorithmOption} 
                    runTime={jsonObj[0].algorithmRunTime_ms} 
                    winner={checkWinnerFunc(0)}
                />
            </div>
            <div className="col-lg-5 border-orange rounded-4 bg-dark m-3 p-3">
                <ResultContainer 
                    id={2} 
                    algoName={jsonObj[1].algorithmName} 
                    amount={jsonObj[1].algorithmLength} 
                    mod={jsonObj[1].algorithmOption} 
                    runTime={jsonObj[1].algorithmRunTime_ms} 
                    winner={checkWinnerFunc(1)}
                />
            </div> */}
        </div>        
        </>
    )

}