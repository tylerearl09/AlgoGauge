import OptionContainer from "../components/OptionContainer";
export default function Selection() {
  return (
    <>
      <div className="row mt-4 align-items-center">
        <div className="ms-5 ps-4 col-md-2">
          <label htmlFor="nameInput" className="form-label fw-bold display-6">
            Name
          </label>
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control border border-dark"
            name="nameInput"
          />
        </div>
      </div>
      <div className="row m-5 align-items-center">
        <OptionContainer number={1} />
        <div className="col-md-1 text-center">VS</div>
        <OptionContainer number={2} />
      </div>
      <div className="row align-items-center justify-content-end">
        <div className="col-md-3 text-center">
          <button className="btn btn-success">Submit</button>
        </div>
      </div>
    </>
  );
}
