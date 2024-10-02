import React from 'react'
import { useState, useEffect } from 'react'
import About from "../components/About"
import { Link } from 'react-router-dom'
import svg from "../Img/ar-vr-mr-training.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const TeamPage = () => {
  const [currentTeam, setCurrentTeam] = useState([]);
  const [pastTeam, setPastTeam] = useState([]);

  useEffect(() => {
    // Fetch team members from API using fetch
    fetch(`${apiEndpoint}/api/team-members`)
      .then(response => response.json())
      .then(data => {
        // Filter members into current and past teams
        const currentMembers = data.data.filter(member => !member.attributes.is_past);
        const pastMembers = data.data.filter(member => member.attributes.is_past);

        setCurrentTeam(currentMembers);
        setPastTeam(pastMembers);
      })
      .catch(error => console.error('Error fetching team members:', error));
  }, []);

  // Render the team card component
  const renderTeamCard = (member) => (
    <div className="col-md-4 pt-md-4 mb-2" key={member.id}>
      <div className="row g-4">
        <div className="col-12 wow fadeIn">
          <div className="team-item bg-white text-center rounded" style={{ margin: '5px', padding: '1rem' }}>
            <h5 className="mb-0">{member.attributes.Name}</h5>
            <small>{member.attributes.Role}</small>
            <div className="d-flex justify-content-center">
              {/* Assuming LinkedIn icon should only show if linkedinurl is present */}
              {member.attributes.linkedinurl ? (
                <a className="btn btn-square m-1" style={{ background: '#9a3b9a', color: 'white' }}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              ) : (
                <a className="btn btn-square m-1" style={{ background: '#9a3b9a', color: 'white' }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container-fluid hero-header" style={{ background: 'rgb(59,32,59)' }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">About Us</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      <About />
      <div className="container-fluid" style={{ background: '#ffeaff' }}>
        <div className="container" style={{ paddingTop: '2rem' }}>
          <h3 style={{ color: '#9a3b9a', textAlign: 'center', color: 'black' }}>Our Team</h3>
          <div className="row g-12">
            {currentTeam.map(renderTeamCard)}
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ background: '#ffeaff' }}>
        <div className="container" style={{ paddingBottom: '2rem' }}>
          <h3 style={{ color: '#9a3b9a', textAlign: 'center', color: 'black' }}>Past Team</h3>
          <div className="row g-12">
            {pastTeam.map(renderTeamCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
