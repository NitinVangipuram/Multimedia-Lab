import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${apiEndpoint}/api/events`)
      .then(response => response.json())
      .then(data => setEvents(data.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid hero-header" style={{ background: "rgb(59,32,59)" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">Events</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Events</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Events Cards Section */}
      <div className="container py-5">
        <div className="row">
          {events.map((event, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.attributes.Title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{new Date(event.attributes.Date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</h6>
                  <p className="card-text">{event.attributes.Description}</p>
                  {event.attributes.link && (
                    <a href={event.attributes.link} className="card-link" target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card {
          border: 1px solid #9a3b9a;
          border-radius: 10px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card-title {
          color: #333;
        }

        .card-text {
          color: #666;
          line-height: 1.6;
        }

        .card-link {
          color: #9a3b9a;
          font-weight: bold;
        }

        .card-link:hover {
          color: #7a2d7a;
        }
      `}</style>
    </div>
  );
};

export default EventsPage; 