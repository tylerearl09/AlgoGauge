function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5 navbar-text">
      <a className="navbar-brand navbar-text fs-5 font-monospace" href="/">
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
            <a className="nav-link" href="/results">
              Results
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
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
