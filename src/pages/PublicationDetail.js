import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";

const PublicationDetail = () => {
  const location = useLocation();
  const { publication } = location.state || {};

  if (!publication) {
    return <div>Publication not found.</div>;
  }

  const { Title, Description } = publication.attributes;

  return (
    <div>
      <div className="container-fluid pt-5 hero-header" style={{ background: "rgb(59,32,59)" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">{Title}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Publications / {Title}</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
   
    <div className="container my-5">
      <div className="mb-4 p-4" style={{ backgroundColor: '#ffeaff', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#9a3b9a', fontWeight: 'bold', textAlign: 'left' }}>{Title}</h1>
        <p style={{ color: '#333', lineHeight: '1.6', textAlign: 'left' }}>{Description}</p>
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
         
        </div>
      </div>
      <Link
        to="/publications"
        style={{
          color: '#9a3b9a',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'inline-block',
          marginTop: '20px'
        }}
      >
        Back to Publications
      </Link>
    </div>
    </div>
  );
};

export default PublicationDetail;
