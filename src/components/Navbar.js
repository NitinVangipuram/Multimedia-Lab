import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for collapse functionality
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid sticky-top" style={{ backgroundColor: "#1363C6" }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link to="/" className="navbar-brand">
              <h1 className="text-white">Multimedia<span className="text-dark">.</span>Lab</h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link active">Home</Link>
<Link to="/team" className="nav-item nav-link">Team</Link>
<Link to="/news" className="nav-item nav-link">News</Link>
<Link to="/research" className="nav-item nav-link">Research</Link>
<Link to="/publications" className="nav-item nav-link">Publications</Link>
              </div>
              
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
