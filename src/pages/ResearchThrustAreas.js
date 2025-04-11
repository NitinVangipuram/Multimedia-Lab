import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResearchThrustAreas() {
  const [expandedArea, setExpandedArea] = useState(null);
  const [thrustAreas, setThrustAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  useEffect(() => {
    const fetchThrustAreas = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiEndpoint}/api/thrust-areas`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const responseData = await response.json();
        
        // Transform the API data to match our component's expected format
        const formattedData = responseData.data.map(item => ({
          id: item.id,
          title: item.attributes.Title,
          description: item.attributes.Description,
          // Since the API data doesn't have projects, we'll provide some default ones
          // In a real application, you would fetch these from another endpoint or include them in this one
         
        }));
        
        setThrustAreas(formattedData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching thrust areas:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchThrustAreas();
  }, []);

  const toggleExpand = (id) => {
    if (expandedArea === id) {
      setExpandedArea(null);
    } else {
      setExpandedArea(id);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    backgroundColor: '#9a3b9a',
    padding: '24px 16px',
    color: '#ffffff'
  };

  const headerTitleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0
  };

  const mainContentStyle = {
    flexGrow: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 16px'
  };

  const introTextStyle = {
    fontSize: '18px',
    marginBottom: '32px',
    textAlign: 'center',
    color: '#9a3b9a'
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px'
  };

  const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
    border: '2px solid #9a3b9a',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  const cardHeaderStyle = {
    backgroundColor: '#9a3b9a',
    padding: '16px'
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: 0
  };

  const cardBodyStyle = {
    padding: '16px'
  };

  const descriptionStyle = {
    color: '#9a3b9a',
    marginBottom: '16px'
  };

  const projectsHeaderStyle = {
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#9a3b9a'
  };

  const projectListStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#9a3b9a'
  };

  const projectItemStyle = {
    marginBottom: '4px'
  };

  const buttonStyle = {
    marginTop: '16px',
    padding: '8px 16px',
    borderRadius: '4px',
    fontWeight: '500',
    backgroundColor: '#9a3b9a',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer'
  };

  const loadingStyle = {
    textAlign: 'center',
    padding: '40px',
    fontSize: '20px',
    color: '#9a3b9a'
  };

  const errorStyle = {
    textAlign: 'center',
    padding: '40px',
    fontSize: '20px',
    color: 'red'
  };

  return (
    <div style={containerStyle}>
      <div className="container-fluid hero-header" style={{ background: "rgb(59,32,59)", marginBottom: "40px" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">Thrust Areas</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Thrust Areas</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      
      <main style={mainContentStyle}>
        <p style={introTextStyle}>
          Our institution focuses on key research areas that address critical challenges and opportunities in science and technology.
        </p>
        
        {loading ? (
          <div style={loadingStyle}>Loading thrust areas...</div>
        ) : error ? (
          <div style={errorStyle}>Error: {error}. Please try again later.</div>
        ) : (
          <div style={gridContainerStyle}>
            {thrustAreas.map(area => (
              <div 
                key={area.id} 
                style={{
                  ...cardStyle,
                
                }}
                onClick={() => toggleExpand(area.id)}
              >
                <div style={cardHeaderStyle}>
                  <h2 style={cardTitleStyle}>{area.title}</h2>
                </div>
                
                <div style={cardBodyStyle}>
                  <p style={descriptionStyle}>{area.description}</p>
                  
                
                  
              
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}