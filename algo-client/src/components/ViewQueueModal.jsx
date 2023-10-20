import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../App.css"

export default function ViewQueueModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4 style={{fontSize:32}}>Your Place in the Queue</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{fontSize:22}}>
        <p>Place in Queue: 16</p>
        <p>Time Remaining: 4 Minutes</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
