import "./navbar.css";
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
            <a className="navbar-link" href="/">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="/about">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="/tools">
              Tools
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="/case">
              Senarious
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
