import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
import menu from "../Img/square.png";
import logo from '../Img/logo-3.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 990);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid sticky-top" style={{ backgroundColor: "white", height: isMobile ? '120px' : 'auto' ,paddingLeft:"0px"}}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{ width: '199px', height: '120px' }} />
          </Link>
          {isMobile && (
            <img
              src={menu}
              type="button"
              onClick={toggleNavbar}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              style={{ width: "40px", height: "40px", color: "black" }}
            />
          )}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/"  onClick={() => setIsOpen(!isOpen)} className="nav-item nav-link active" style={{ fontWeight: "bold", color: isMobile ? 'white' : 'black' }}>Home</Link>
              <Link to="/team"  onClick={() => setIsOpen(!isOpen)} className="nav-item nav-link" style={{ fontWeight: "bold", color: isMobile ? 'white' : 'black' }}>Team</Link>
              <Link to="/news" onClick={() => setIsOpen(!isOpen)} className="nav-item nav-link" style={{ fontWeight: "bold", color: isMobile ? 'white' : 'black' }}>News</Link>
              <Link to="/research" onClick={() => setIsOpen(!isOpen)} className="nav-item nav-link" style={{ fontWeight: "bold", color: isMobile ? 'white' : 'black' }}>Research</Link>
              <Link to="/publications" onClick={() => setIsOpen(!isOpen)}  className="nav-item nav-link" style={{ fontWeight: "bold", color: isMobile ? 'white' : 'black' }}>Publications</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
