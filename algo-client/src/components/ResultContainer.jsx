
const winnerStyle = 
{
    color: 'green'
};

const loserStyle =
{
    color: 'yellow'
};
export default function ResultContainer(props){

    return(
        <div className="col-lg rounded-4 bg-dark m-3 p-3" style={props.winner ? winnerStyle : loserStyle}>
            <h3 className="font-monospace text-center">
                Algorithm # {props.id}
            </h3>
            <hr className="mb-4" />
            <p>Algorithm:  {props.algoName}</p>
            <p>Amount: {props.amount}</p>
            <p>Option: {props.mod}</p>
            <p>Run Time: {props.runTime} ms</p>
            
        </div>
    )
}