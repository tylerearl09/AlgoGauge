import Dropdown from 'react-bootstrap/Dropdown'

function AlgorithmTest () {

    return(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    );
}
export default AlgorithmTest;