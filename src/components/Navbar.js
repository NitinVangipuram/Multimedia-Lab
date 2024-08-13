import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for collapse functionality
import { Link } from 'react-router-dom';
import {useState , useEffect} from 'react';
import logo from '../Img/logo-3.png';

const Navbar = () => {
  const [logoSize, setLogoSize] = useState({  height: '140px' });

  const updateLogoSize = () => {
    if (window.innerWidth <= 990) {
      setLogoSize({ width: '199px', height: '120px' });
    } else {
      setLogoSize({ height: '140px',marginTop:"20px", });
    }
  };

  useEffect(() => {
    updateLogoSize();
    window.addEventListener('resize', updateLogoSize);
    return () => window.removeEventListener('resize', updateLogoSize);
  }, []);
  return (
    <div>
      <div className="container-fluid sticky-top" style={{ backgroundColor: "rgb(59,32,59)" }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link to="/" className="navbar-brand">
              {/* <h1 className="text-white"> EMA LAB 記<span className="text-dark">.</span> IITDH</h1> */}
              <img src={logo} alt="logo" style={{ width: logoSize.width, height: logoSize.height , marginTop:logoSize.marginTop }} />
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
