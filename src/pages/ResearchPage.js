import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const ResearchPage = () => {
  const [researchTopics, setResearchTopics] = useState([]);

  useEffect(() => {
    fetch(`${apiEndpoint}/api/researches`)
      .then(response => response.json())
      .then(data => setResearchTopics(data.data))
      .catch(error => console.error('Error fetching research topics:', error));
  }, []);

  return (
    <div>
      <div className="container-fluid pt-5 hero-header" style={{ background: "rgb(59,32,59)" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">Research</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Research</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 style={{ color: '#9a3b9a', fontWeight: 'bold', marginBottom: '30px' }}>Our Latest Research</h2>
        {researchTopics.map((topic, index) => (
          <div key={index} className="mb-4 p-4" style={{ backgroundColor: '#ffeaff', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ color: '#9a3b9a', fontWeight: 'bold', textAlign: 'left' }}>{topic.attributes.Title}</h3>
            <p style={{ color: '#333', lineHeight: '1.6', textAlign: 'left' }}>{topic.attributes.Description}</p>
            <div style={{ textAlign: 'left' }}>
              <Link
                to={`/research/${topic.id}`}
                state={{ topic }}
                style={{
                  backgroundColor: '#9a3b9a',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  marginTop: '10px'
                }}
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchPage;
