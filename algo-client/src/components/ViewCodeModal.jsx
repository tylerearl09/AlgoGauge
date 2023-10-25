import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ViewCodeModal(props) {
  function getAlgoDescription(algoName) {
    let description = "";
    switch (algoName) {
      case "bubble":
        description =
          "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high";
        break;
      case "insertion":
        description =
          "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.";
        break;
      case "quick":
        description =
          "QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.";
        break;
      case "merge":
        description =
          "Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.";
        break;
      case "heap":
        description =
          "Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.";
        break;
      case "selection":
        description =
          "Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. ";
        break;
      default:
        description = "Nunya Bidness";
        break;
    }
    return description;
  }

  function getAlgoDemo(algoName) {
    switch (algoName) {
      case "bubble":
        return (
          <a href="https://1533221.mediaspace.kaltura.com/playlist/dedicated/1_t46nn1ew/1_o6ljflmf">
            Bubble Sort Video Example
          </a>
        );
      case "selection":
        return (
          <a href="https://1533221.mediaspace.kaltura.com/playlist/dedicated/1_t46nn1ew/1_o6ljflmf">
            Selection Sort Video Example
          </a>
        );

      case "insertion":
        return (
          <a href="https://1533221.mediaspace.kaltura.com/playlist/dedicated/1_t46nn1ew/1_c05nym92">
            Insertion Sort Video Example
          </a>
        );

      case "quick":
        return (
          <a href="https://1533221.mediaspace.kaltura.com/playlist/dedicated/1_t46nn1ew/1_5gyy359h">
            Quick Sort Video Example
          </a>
        );

      case "merge":
        return (
          <a href="https://1533221.mediaspace.kaltura.com/playlist/dedicated/1_t46nn1ew/1_wc6fsyrc">
            Merge Sort Video Example
          </a>
        );

      case "heap":
        return (
          <a href="https://1533221.mediaspace.kaltura.com/playlist/dedicated/1_t46nn1ew/1_7grhcmq5">
            Heap Sort Video Example
          </a>
        );

      default:
        return (
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Video Example
        </a>
        )
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-bg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Algorithm: {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{getAlgoDemo(props.name)}</h4>
        <hr />
        <h4>What the code does</h4>
        <p>{getAlgoDescription(props.name)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
