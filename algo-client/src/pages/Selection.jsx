import OptionContainer from "../components/OptionContainer";
import "../App.css";

export default function Selection() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center border-bottom display-5 mt-3">
            ALGORITHM COMPARISONS
          </h2>
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-md-12">
          <div className="container container-bg rounded-4 shadow-lg px-5">
            <div className="row py-5">
              <div className="col-md-4 fw-bold h4 text-end">Your name:</div>
              <div className="col-md-6">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-4 fw-bold h4 text-end">
                Algorithm type:
              </div>
              <div className="col-md-6">
                <select className="form-select">
                  <option value="" disabled selected>
                    Select a Category....
                  </option>
                  <option value="sorting">Sorting Algorithms</option>
                  <option value="hashing">Hashing Algorithms</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="container container-bg shadow-lg rounded-4 py-5 h-auto">
          <div className="row p-5 mx-auto justify-content-center align-items-center">
            <OptionContainer number={1} />
            <div className="col-md-1 text-center display-6  font-monospace">
              VS
            </div>
            <OptionContainer number={2} />
          </div>
          <div className="row mx-auto justify-content-center">
            <div className="col-md-3 text-center">
              <button className="btn btn-lg btn-success">Run Tests!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
