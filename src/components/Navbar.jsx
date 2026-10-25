import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <h4 className="fw-bold"> ICE-CREAM PARLER </h4>
            <div className="ms-auto">
                <Link className="nav-link d-inline mx-2" to="/"> Home  </Link>
                <Link className="nav-link d-inline mx-2" to="/about"> About Us   </Link>
                <Link className="nav-link d-inline mx-2" to="/contact"> Contact  </Link>
            </div>
        </nav>
    )
}
export default Navbar