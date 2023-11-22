
const winnerStyle = 
{
    color: 'green'
};

const loserStyle =
{
    color: 'yellow'
};
export default function ResultContainer(props){

//  <ResultContainer id={2} algoName="Insertion" amount={13500} mod="Reverse Sort" runTime={2.02}/>



    return(
        <div className="col-lg-5 rounded-4 bg-dark m-3 p-3" style={props.winner ? winnerStyle : loserStyle}>
            <p>{props.id}</p>
            <p>Algorithm:  {props.algoName}</p>
            <p>Amount: {props.amount}</p>
            <p>Option: {props.mod}</p>
            <p>Run Time: {props.runTime} ms</p>
            
        </div>
    )
}