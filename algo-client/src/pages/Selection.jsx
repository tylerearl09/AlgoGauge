import OptionContainer from "../components/OptionContainer";
import Button from "react-bootstrap/Button";
import ViewQueueModal from "../components/ViewQueueModal"
import { useState } from "react";


export default function Selection() {
  // Modal for the Queue
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App-header">
      <div className="row mt-5 align-items-center">
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
          <Button className="btn btn-success" onClick={() => 
            setModalShow(true)
          }>Submit</Button>
        </div>
       <ViewQueueModal
          className="App-Header"
          name="Test"
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
