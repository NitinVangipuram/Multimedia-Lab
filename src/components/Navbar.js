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

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 990);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchRef]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchResults(null);
      setSearchQuery('');
      
      // Reset search results in parent component
      if (onSearchResults) {
        onSearchResults(null, false);
      }
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`${apiEndpoint}/api/fuzzy-search/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      console.log('Search results:', data);
      setSearchResults(data);
      
      // Pass the search results to the parent component if the callback exists
      if (onSearchResults) {
        onSearchResults(data, true);
      }
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResults({ error: 'Failed to fetch search results' });
      
      // Pass the error to the parent component
      if (onSearchResults) {
        onSearchResults({ error: 'Failed to fetch search results' }, true);
      }
    } finally {
      setIsLoading(false);
    }
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

  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Render search results based on type
  const renderSearchResults = () => {
    if (!searchResults) return null;
    
    return (
      <div className="search-results-container">
        {isLoading ? (
          <div className="p-3 text-center">Loading...</div>
        ) : (
          <>
            {/* Render events if they exist */}
            {searchResults.events && searchResults.events.length > 0 && (
              <div className="p-3">
                <h5 className="mb-3">Events</h5>
                <div className="row">
                  {searchResults.events.map((event) => (
                    <div key={event.id} className="col-md-12 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{event.Title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{formatDate(event.Date)}</h6>
                          <p className="card-text">{event.Description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* You can add more types here based on the API response */}
            {/* For example, if your API returns articles */}
            {searchResults.articles && searchResults.articles.length > 0 && (
              <div className="p-3">
                <h5 className="mb-3">Articles</h5>
                <div className="row">
                  {searchResults.articles.map((article) => (
                    <div key={article.id} className="col-md-12 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{article.Title}</h5>
                          <p className="card-text">{article.Content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* If no results found */}
            {(!searchResults.events || searchResults.events.length === 0) && 
             (!searchResults.articles || searchResults.articles.length === 0) && (
              <div className="p-3 text-center">No results found</div>
            )}
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
                <div className="nav-item">
                  <button 
                    onClick={toggleSearch}
                    className="nav-link btn"
                    style={{ fontWeight: "bold", color: 'black', background: 'none', border: 'none' }}
                  >
                    <i className="fas fa-search"></i> Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
        
        {/* Search bar */}
        {showSearch && (
          <div ref={searchRef} className="search-container py-2 position-relative">
            <form onSubmit={handleSearch} className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn btn-primary ms-2">
                <i className="fas fa-search"></i>
              </button>
            </form>
            
            {/* Search results dropdown */}
            {searchResults && (
              <div className="position-absolute w-100 shadow-lg bg-white border rounded mt-1 z-index-dropdown">
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