import React, { useState, useEffect } from 'react';
import aboutImg from '../Img/third.png';
import { Link } from 'react-router-dom';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const Team = () => {
  const [aboutContent, setAboutContent] = useState({ Description: '' });
  useEffect(() => {
    // Fetch about description
    fetch(`${apiEndpoint}/api/aboutus`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.data.attributes) {
          setAboutContent(data.data.attributes);
        } else {
          console.error('About content is empty or does not have attributes.');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the about content!', error);
      });
  }, []);
  

  return (
    <div>
      <div className="container-fluid" style={{ background: "#ffeaff" }}>
        <div className="container" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
          <div className='about-section'>
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div
                className="btn btn-sm border rounded-pill px-3 mb-3"
                style={{ color: "#9a3b9a" }}
              >
                About Us
              </div>
              <h1 className="mb-4">About Us</h1>
              <p className="mb-4" style={{ textAlign: "justify" }}>
             {aboutContent.Description}
              </p>
              <Link
                className="btn rounded-pill px-4"
                to="/aboutus"
                style={{ background: "#9a3b9a", color: "white" }}
              >
                Read More
              </Link>
            </div>
          
              <img
                src={aboutImg}
                alt="Team Image"
                className="img-fluid rounded about-img"
              />
           
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          display: flex;
          gap: 35px;
          align-items: center;
        }

        .about-img {
          width: 50%; /* Adjust the width for a better fit */
          max-width: 600px; /* Limit the max width */
          height: auto; /* Keep the image responsive */
          margin: 0 auto; /* Center the image */
        }

        @media (max-width: 992px) {
          .about-section {
            flex-direction: column;
            gap: 35px;
          }

          .about-img {
            width: 90%; /* Adjust the width for smaller screens */
            max-width: 500px;
          }
        }

        @media (max-width: 576px) {
          .about-img {
            width: 100%; /* Full width on very small screens */
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Team;
