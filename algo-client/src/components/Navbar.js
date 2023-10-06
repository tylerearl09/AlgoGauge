import '../App.css';

function NavBar () {

    return(
        <nav className="bg-header navbar navbar-custom navbar-expand-lg ps-5">
        <a className="navbar-brand" href="#">Aolguage</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">History</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://scholar.google.com/citations?user=E0VPUtgAAAAJ&hl=en">About Brad</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Wazzup</a>
                </div>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default NavBar;
