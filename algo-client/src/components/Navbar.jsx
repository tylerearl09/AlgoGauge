function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5 navbar-text">
      <a className="navbar-brand navbar-text" href="/">
        Algoguage
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/history">
              History
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/hello">
              Test
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://scholar.google.com/citations?user=E0VPUtgAAAAJ&hl=en"
            >
              About Brad
            </a>
          </li>
          {/* <li className="nav-item dropdown">
import "../App.css";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5 navbar-text">
      <a className="navbar-brand" href="/">
        <span className="display-6 heading-text">Algoguage</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="justify-content-end pe-5 collapse navbar-collapse"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav fs-5">
          <li className="nav-item">
            <a className="nav-link" href="/">
              History
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/hello">
              Test
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://scholar.google.com/citations?user=E0VPUtgAAAAJ&hl=en"
            >
              About Brad
            </a>
          </li>
          {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                </li> */}
        </ul>
      </div>
    </nav>
  );
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

