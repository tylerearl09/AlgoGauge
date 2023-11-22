import "../App.css";
import ResultContainer from "../components/ResultContainer"

export default function Results(props){    
    let results = localStorage.getItem("results")
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
        <div className="row pb-5 pt-2 mx-auto justify-content-center align-items-center">
            <ResultContainer id={1} algoName={jsonObj[0].algorithmName} amount={jsonObj[0].algorithmLength} mod={jsonObj[0].algorithmOption} runTime={jsonObj[0].algorithmRunTime_ms} winner={checkWinnerFunc(0)}/>
            <ResultContainer id={2} algoName={jsonObj[1].algorithmName} amount={jsonObj[1].algorithmLength} mod={jsonObj[1].algorithmOption} runTime={jsonObj[1].algorithmRunTime_ms} winner={checkWinnerFunc(1)}/>
        </div>
        
        </>
    )

}