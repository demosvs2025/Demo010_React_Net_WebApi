import { Link } from 'react-router-dom'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item pe-3">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item pe-3">
                            <Link to="/products">Products</Link>
                        </li>
                        <li className="nav-item pe-3">
                            <Link to="/employees">Employees</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export { Navbar } 
