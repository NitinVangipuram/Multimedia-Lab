import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import menu from "../Img/square.png";
import logo from '../Img/logo-3.png';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const Navbar = ({ onSearchResults }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);
  const [links, setLinks] = useState([]);
  const [dropdowns, setDropdowns] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);

  const updateScreenSize = () => setIsMobile(window.innerWidth <= 990);

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchResults(null);
    setSearchQuery('');
    if (onSearchResults) onSearchResults(null, false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${apiEndpoint}/api/fuzzy-search/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setSearchResults(data);
      if (onSearchResults) onSearchResults(data, true);
    } catch (error) {
      setSearchResults({ error: 'Failed to fetch search results' });
      if (onSearchResults) onSearchResults({ error: 'Failed to fetch search results' }, true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch(`${apiEndpoint}/api/navbars`)
      .then(res => res.json())
      .then(data => setLinks(data.data))
      .catch(err => console.error(err));

    fetch(`${apiEndpoint}/api/dropdowns?populate=*`)
      .then(res => res.json())
      .then(data => setDropdowns(data.data))
      .catch(err => console.error(err));
  }, []);

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  const renderSection = (title, items, pathBuilder) => (
    <div style={{ padding: '20px' }}>
      <h5 style={{ marginBottom: '15px' }}>{title}</h5>
      {items.map(item => (
        <div key={item.id} style={{ marginBottom: '15px' }}>
          <Link to={pathBuilder(item)} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              border: '1px solid #ccc',
              borderRadius: '6px',
              padding: '15px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h5>{item.Title}</h5>
              <p>{item.Description} {item.Content}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

  const renderSearchResults = () => {
    if (!searchResults) return null;

    return (
      <div style={{ backgroundColor: '#fff', maxHeight: '400px', overflowY: 'auto' }}>
        {isLoading ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>
        ) : (
          <>
            {searchResults.events?.length > 0 &&
              renderSection("Events", searchResults.events, () => "/events")}

            {searchResults.newss?.length > 0 &&
              renderSection("News", searchResults.newss, (item) => `/news/${item.id}`)}

            {searchResults.publications?.length > 0 &&
              renderSection("Publications", searchResults.publications, () => "#")}

            {searchResults.researches?.length > 0 &&
              renderSection("Researches", searchResults.researches, () => "#")}

            {searchResults.pages?.length > 0 &&
              renderSection("Pages", searchResults.pages, () => "#")}

            {searchResults.articles?.length > 0 &&
              renderSection("Articles", searchResults.articles, () => "#")}

            {!Object.values(searchResults).some(arr => Array.isArray(arr) && arr.length > 0) &&
              <div style={{ padding: '20px', textAlign: 'center' }}>No results found</div>}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container-fluid sticky-top" style={{ backgroundColor: "white", height: isMobile ? '120px' : 'auto', paddingLeft: "0px"}}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{ width: '199px', height: '120px' }} />
          </Link>
          
          {isMobile && (
            <div className="d-flex align-items-center">
              <button 
                onClick={toggleSearch}
                className="btn me-2"
                style={{ color: "black" }}
              >
                <i className="fas fa-search"></i>
              </button>
              <img
                src={menu}
                type="button"
                onClick={toggleNavbar}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                style={{ width: "40px", height: "40px", color: "black" }}
              />
            </div>
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
              
              {/* Search button for desktop */}
              {!isMobile && (
                <div className="nav-item position-relative">
                  <button 
                    onClick={toggleSearch}
                    className="nav-link btn"
                    style={{ 
                      fontWeight: "bold", 
                      color: 'black', 
                      background: 'none', 
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <i className="fas fa-search"></i> Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Improved Search Bar */}
        {showSearch && (
          <div 
            ref={searchRef} 
            className="search-container"
            style={{ 
              position: 'relative', 
              marginBottom: '15px',
              marginTop: '10px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              backgroundColor: '#f8f9fa',
              padding: '12px'
            }}
          >
            <form 
              onSubmit={handleSearch} 
              style={{ 
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div 
                style={{ 
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '15px',
                    color: '#6c757d',
                    zIndex: 1
                  }}
                >
                  <i className="fas fa-search"></i>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for content..."
                  autoFocus
                  style={{ 
                    width: '100%',
                    padding: '12px 20px 12px 40px',
                    borderRadius: '25px',
                    border: '1px solid #dee2e6',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    boxShadow: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 0 3px rgba(0,123,255,0.1)';
                    e.target.style.borderColor = '#80bdff';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = 'none';
                    e.target.style.borderColor = '#dee2e6';
                  }}
                />
              </div>
              <button 
                type="submit" 
                style={{ 
                  marginLeft: '10px',
                  padding: '10px 24px',
                  borderRadius: '25px',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#0069d9';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#007BFF';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Search
              </button>
              <button 
                type="button" 
                onClick={toggleSearch}
                style={{ 
                  marginLeft: '10px',
                  padding: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#f8f9fa',
                  color: '#6c757d',
                  border: '1px solid #dee2e6',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#e2e6ea';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
              >
                <i className="fas fa-times"></i>
              </button>
            </form>

            {/* Search Results */}
            {searchResults && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: '#fff',
                  border: '1px solid #eaeaea',
                  borderRadius: '8px',
                  marginTop: '8px',
                  zIndex: 9999,
                  boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}
              >
                {renderSearchResults()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;