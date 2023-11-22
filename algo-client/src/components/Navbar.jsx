import { Link } from "react-router-dom"
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5 navbar-text">
      <Link className="navbar-brand navbar-text fs-5 font-monospace" to="/">
        Algoguage
      </Link>
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
            <Link className="nav-link" to="/history">
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/results">
              Results
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/hello">
              Test
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="https://scholar.google.com/citations?user=E0VPUtgAAAAJ&hl=en"
            >
              About Brad
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
