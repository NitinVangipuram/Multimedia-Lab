import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
import menu from "../Img/square.png";
import logo from '../Img/logo-3.png';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);
  const [links, setLinks] = useState([]);
  const [dropdowns, setDropdowns] = useState([]);

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

useEffect(() => {
    // Fetch the navbar links from the API
    fetch(`${apiEndpoint}/api/navbars`)
      .then(response => response.json())
      .then(data => {
        setLinks(data.data); // Set the links from the fetched data
      })
      .catch(error => console.error('Error fetching navbar links:', error));

    // Fetch the dropdown links from the API
    fetch(`${apiEndpoint}/api/dropdowns?populate=*`)
      .then(response => response.json())
      .then(data => {
        setDropdowns(data.data);
      })
      .catch(error => console.error('Error fetching dropdowns:', error));
  }, []);
  return (
    <div className="container-fluid sticky-top" style={{ backgroundColor: "white", height: isMobile ? '120px' : 'auto', paddingLeft: "0px"}}>
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
            {links.map(link => (
              <a
                key={link.id}
                href={`/${link.attributes.Route || ''}`}
                onClick={() => setIsOpen(!isOpen)}
                className="nav-item nav-link"
                style={{ fontWeight: "bold", color: isMobile ? 'white' : 'black' }}
              >
                {link.attributes.Name}
              </a>
            ))}
            {dropdowns.map(dropdown => (
                <div key={dropdown.id} className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id={`dropdown-${dropdown.id}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontWeight: "bold", color: isMobile ? 'white' : 'black' }}
                  >
                    {dropdown.attributes.Name}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby={`dropdown-${dropdown.id}`}>
                    {dropdown.attributes.Dropdownitem.map(item => (
                      <li key={item.id}>
                        <Link className="dropdown-item" to={`/${item.Route}`}>
                          {item.Name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </nav>
    </div>
  </div>
  );
};

export default Navbar;
