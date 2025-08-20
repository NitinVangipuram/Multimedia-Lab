import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";

const PeoplePage = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    Papa.parse("/data/team.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setTeam(result.data);
      },
    });
  }, []);

  // ✅ Convert Google Drive link into direct image URL
const getDriveImageUrl = (url) => {
  if (!url) return null;
  let fileId = "";

  // Match different Google Drive URL patterns
  const openIdMatch = url.match(/open\?id=([^&]+)/);
  const fileDMatch = url.match(/\/file\/d\/([^/]+)/);

  if (openIdMatch) {
    fileId = openIdMatch[1];
  } else if (fileDMatch) {
    fileId = fileDMatch[1];
  }

  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : url;
};


  const renderTeamCard = (member, index) => (
    <div className="col-md-4 pt-md-4 mb-2" key={index}>
      <div className="row g-4">
        <div className="col-12 wow fadeIn">
          <div
            className="team-item bg-white text-center rounded"
            style={{ margin: "5px", padding: "1rem" }}
          >


            <h5 className="mb-0">{member["Full Name"]}</h5>
            <small>{member.Program}</small>

            <div className="d-flex justify-content-center">
              {member["Any Profile Link if you have"] ? (
                <a
                  href={member["Any Profile Link if you have"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-square m-1"
                  style={{ background: "#9a3b9a", color: "white" }}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              ) : (
                <a
                  href={`mailto:${member["What is your email? (Eg: abc@aaa.com )"]}`}
                  className="btn btn-square m-1"
                  style={{ background: "#9a3b9a", color: "white" }}
                >
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
    <div style={{ background: '#ffeaff',paddingTop:"1rem" }}>
      <div className="container-fluid  hero-header" style={{ background: "rgb(59,32,59)" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">People</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">People</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
    <div className="container" style={{padding:"2rem"}} >
    <h3 style={{ color: '#9a3b9a', textAlign: 'center', color: 'black' }}>Our Team</h3>
      <div className="row">
        {team.map((member, idx) => renderTeamCard(member, idx))}
      </div>
    </div>
    </div>
  );
};

export default PeoplePage;
