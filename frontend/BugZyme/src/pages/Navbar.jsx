import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
        <span className="app-title">BugZyme</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/career">
              Career
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
