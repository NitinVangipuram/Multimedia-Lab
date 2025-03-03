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

      {/* Events Timeline Section */}
      <div className="container py-5">
        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="date">{new Date(event.attributes.Date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}</div>
                <h3>{event.attributes.Title}</h3>
                <p>{event.attributes.Description}</p>
                {event.attributes.link && (
                  <a href={event.attributes.link} className="event-link" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: #9a3b9a;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
          border-radius: 3px;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          margin-bottom: 30px;
        }

        .timeline-item.left {
          left: 0;
        }

        .timeline-item.right {
          left: 50%;
        }

        .timeline-content {
          padding: 20px 30px;
          background-color: white;
          position: relative;
          border-radius: 10px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          width: 25px;
          height: 25px;
          background-color: white;
          border: 4px solid #9a3b9a;
          border-radius: 50%;
          top: 15px;
          z-index: 1;
        }

        .left::before {
          right: -12px;
        }

        .right::before {
          left: -13px;
        }

        .date {
          color: #9a3b9a;
          font-weight: bold;
          margin-bottom: 10px;
        }

        h3 {
          color: #333;
          margin-bottom: 15px;
        }

        p {
          color: #666;
          line-height: 1.6;
        }

        .event-link {
          display: inline-block;
          margin-top: 15px;
          color: #9a3b9a;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .event-link:hover {
          color: #7a2d7a;
        }

        @media screen and (max-width: 768px) {
          .timeline::after {
            left: 31px;
          }

          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }

          .timeline-item.right {
            left: 0;
          }

          .timeline-item::before {
            left: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default EventsPage; 