import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const Team = () => {
  const [teamContent, setTeamContent] = useState({ description: '' });
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch team description
    axios.get(`${apiEndpoint}/api/team-description`)
      .then(response => {
        const { data } = response;
        if (data && data.data.attributes) {
          setTeamContent(data.data.attributes);
        } else {
          console.error('Team content is empty or does not have attributes.');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the team content!', error);
      });

    // Fetch team members
    axios.get(`${apiEndpoint}/api/team-members?populate=*`)
      .then(response => {
        const { data } = response;
        if (data && data.data) {
          setTeamMembers(data.data);
        } else {
          console.error('Team members data is empty.');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the team members!', error);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid " style={{ background: "#ffeaff" }}>
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill px-3 mb-3" style={{ color: "#9a3b9a" }}>Our Team</div>
              <h1 className="mb-4">Meet Our Team Members</h1>
              <p className="mb-4" style={{textAlign:"justify"}}>{teamContent.description}</p>
              <a className="btn rounded-pill px-4" href="" style={{ background: "#9a3b9a", color: "white" }}>Read More</a>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {teamMembers.map((member, index) => {
                  const { Name, Role, facebookurl, twitterurl, instagramurl, linkedinurl, Image } = member.attributes;
                  const imageUrl = Image?.data?.attributes?.url || '';

                  return (
                    <div key={index} className="col-md-6 pt-md-4">
                      <div className="row g-4">
                        <div className="col-12 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                          <div className="team-item bg-white text-center rounded p-4 pt-0">
                          {imageUrl && <img className="img-fluid rounded-circle p-4" src={imageUrl} alt={Name} style={{ height: '170px', objectFit: 'cover' }} />}
                            <h5 className="mb-0">{Name}</h5>
                            <small>{Role}</small>
                            <div className="d-flex justify-content-center mt-3">
                              {facebookurl && <a className="btn btn-square m-1" href={facebookurl} style={{ background: "#9a3b9a", color: "white" }}><FontAwesomeIcon icon={faFacebookF} /></a>}
                              {twitterurl && <a className="btn btn-square m-1" href={twitterurl} style={{ background: "#9a3b9a", color: "white" }}><FontAwesomeIcon icon={faTwitter} /></a>}
                              {instagramurl && <a className="btn btn-square m-1" href={instagramurl} style={{ background: "#9a3b9a", color: "white" }}><FontAwesomeIcon icon={faInstagram} /></a>}
                              {linkedinurl && <a className="btn btn-square m-1" href={linkedinurl} style={{ background: "#9a3b9a", color: "white" }}><FontAwesomeIcon icon={faLinkedinIn} /></a>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
