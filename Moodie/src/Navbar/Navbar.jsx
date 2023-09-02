import "./navbar.css";
import { Link } from "react-router-dom";
import Logowhite from "../assets/logowhite.png";

const Navbar = () => {
  return (
    <nav className="navbar-container container">
      <img src={Logowhite} className="nav-logo"></img>
      <button
        type="button"
        id="navbar-toggle"
        aria-controls="navbar-menu"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div id="navbar-menu" aria-labelledby="navbar-toggle">
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/tools" className="navbar-link">
              Tools
            </Link>
          </li>
          <Link to="/senarious" className="navbar-link">
            Senarious
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
