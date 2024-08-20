import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
import menu from "../Img/square.png";
import logo from '../Img/logo-3.png';

const Navbar = () => {
  const [logoSize, setLogoSize] = useState({ height: '120px' });
  const [isOpen, setIsOpen] = useState(false); 
  const [showToggle, setShowToggle] = useState(false); // State to control visibility of the toggle button

  const updateLogoSize = () => {
    if (window.innerWidth <= 990) {
      setLogoSize({ width: '199px', height: '120px',color:"white" });
      setShowToggle(true); // Show toggle button for smaller screens
    } else {
      setLogoSize({ height: '120px', paddingRight: "0px" ,color:"black" });
      setShowToggle(false); // Hide toggle button for larger screens
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    updateLogoSize();
    window.addEventListener('resize', updateLogoSize);
    return () => window.removeEventListener('resize', updateLogoSize);
  }, []);

  return (
    <div>
      <div className="container-fluid sticky-top" style={{ backgroundColor: "white", paddingLeft: logoSize.paddingRight }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" style={{ width: logoSize.width, height: logoSize.height, marginTop: logoSize.marginTop }} />
            </Link>
            {showToggle && ( // Conditionally render the toggle button
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
                <Link to="/" className="nav-item nav-link active" style={{ fontWeight: "bold", color: logoSize.color }}>Home</Link>
                <Link to="/team" className="nav-item nav-link" style={{ fontWeight: "bold", color:logoSize.color  }}>Team</Link>
                <Link to="/news"  className="nav-item nav-link" style={{ fontWeight: "bold", color: logoSize.color }}>News</Link>
                <Link to="/research"  className="nav-item nav-link" style={{ fontWeight: "bold", color: logoSize.color }}>Research</Link>
                <Link to="/publications" className="nav-item nav-link" style={{ fontWeight: "bold", color: logoSize.color }}>Publications</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
