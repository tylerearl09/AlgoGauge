
const winnerStyle = 
{
    color: 'yellow'
};

const loserStyle =
{
    color: 'white'
};
export default function ResultContainer(props){

    return(
        <div className={`col-lg rounded-4 bg-dark m-3 p-3 `+ (props.winner ? "text-warning-emphasis" : "text-white")}>
            <h3 className="font-monospace text-center">
                Algorithm # {props.id}
            </h3>
            <hr className="mb-4" />
            <div className="ms-3">
                <div className="row just">
                    <div className="col-md-8 d-flex justify-content-between fs-4 fw-bolder">
                        <p>Sorting Algorithm:</p>
                        <p>{props.algoName}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 d-flex justify-content-between fs-4 fw-bolder">
                        <p>Number of Items:</p>
                        <p>{props.amount}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 d-flex justify-content-between fs-4 fw-bolder">
                        <p>Data Distribution:</p>
                        <p>{props.mod}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 d-flex justify-content-between fs-4 fw-bolder">
                        <p>Wall Time:</p>
                        <p>{props.runTime} ms</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}