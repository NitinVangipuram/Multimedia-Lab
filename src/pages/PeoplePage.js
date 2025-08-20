import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import svg from "../Img/ar-vr-mr-training.png";
import { Link } from "react-router-dom";
// Note: Link component removed for demo - replace with your routing solution

const PeoplePage = () => {
  const [team, setTeam] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    Papa.parse("/data/team.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        console.log("CSV data loaded:", result.data);
        setTeam(result.data);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
      }
    });
  }, []);

  // Convert name to filename format (same as your Python script)
  const getImagePath = (fullName) => {
    if (!fullName) return null;
    const filename = fullName.trim().replace(/\s+/g, "_") + ".jpg";
    return `/assets/${filename}`;
  };

  const handleImageError = (index) => {
    console.log(`Image failed to load for index: ${index}`);
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const getInitials = (name) => {
    if (!name) return "??";
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const renderTeamCard = (member, index) => {
    const imagePath = getImagePath(member["Full Name"]);
    const hasImageError = imageErrors[index];
    
    return (
      <div className="col-md-4 pt-md-4 mb-2" key={index}>
        <div className="row g-4">
          <div className="col-12 wow fadeIn">
            <div
              className="team-item bg-white text-center rounded shadow-sm"
              style={{ 
                margin: "5px", 
                padding: "1.5rem", 
                minHeight: "300px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(154, 59, 154, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
              }}
            >
              {/* Profile Image or Placeholder */}
              <div 
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  margin: "0 auto 15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: hasImageError || !imagePath ? "#9a3b9a" : "transparent",
                  color: "white",
                  fontSize: "28px",
                  fontWeight: "bold",
                  overflow: "hidden",
                  border: "3px solid #f0f0f0",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
              >
                {imagePath && !hasImageError ? (
                  <img
                    src={imagePath}
                    alt={member["Full Name"] || "Team Member"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                    onError={() => handleImageError(index)}
                    onLoad={() => console.log(`Image loaded: ${imagePath}`)}
                  />
                ) : (
                  <span>{getInitials(member["Full Name"])}</span>
                )}
              </div>

              <h5 className="mb-2" style={{ 
                color: "#333", 
                fontWeight: "600",
                fontSize: "1.1rem"
              }}>
                {member["Full Name"] || "Unknown"}
              </h5>
              
              <div
                className="badge mb-2"
                style={{
                  backgroundColor: "#9a3b9a",
                  color: "white",
                  fontSize: "0.75rem",
                  padding: "5px 10px"
                }}
              >
                {member.Program || "N/A"}
              </div>
              
              {/* {member["What is your reserach area/Title of Project? (Keywords or brief description)"] && (
                <p className="text-muted mb-3" style={{ 
                  fontSize: "0.85rem", 
                  lineHeight: "1.4",
                  minHeight: "40px"
                }}>
                  <strong>Research:</strong> {member["What is your reserach area/Title of Project? (Keywords or brief description)"]}
                </p>
              )} */}

              <div className="d-flex justify-content-center gap-2 mb-2">
                {member["Any Profile Link if you have"] && member["Any Profile Link if you have"].trim() ? (
                  <a
                    href={member["Any Profile Link if you have"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{ 
                      backgroundColor: "#0077b5", 
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease"
                    }}
                    title="LinkedIn Profile"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#005885";
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#0077b5";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                ) : null}
                
                {member["What is your email? (Eg: abc@aaa.com )"] && (
                  <a
                    href={`mailto:${member["What is your email? (Eg: abc@aaa.com )"]}`}
                    className="btn btn-sm"
                    style={{ 
                      backgroundColor: "#dc3545", 
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease"
                    }}
                    title="Send Email"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#b02a37";
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#dc3545";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                )}
              </div>
              
              {member["Which year are you planning to graduate? (Eg: 2022/2023/2024....)"] && (
                <small className="text-muted d-block">
                  <i className="fas fa-graduation-cap me-1"></i>
                  <strong>Graduating:</strong> {member["Which year are you planning to graduate? (Eg: 2022/2023/2024....)"]}
                </small>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div  style={{ background: 'linear-gradient(135deg, #ffeaff 0%, #f5e6ff 100%)', paddingTop: "1rem", minHeight: "100vh" }}>
      <div className="container-fluid  hero-header" style={{ background: "rgb(59,32,59)" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">News</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">News</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ padding: "4rem 2rem" }}>
        <div className="text-center mb-5">
          <h2 style={{ 
            color: '#9a3b9a', 
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Our  Team
          </h2>
        
          <div style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #9a3b9a, #b44bb4)",
            margin: "2rem auto",
            borderRadius: "2px"
          }}></div>
        </div>
        
        {team.length === 0 ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading team members...</p>
          </div>
        ) : (
          <div className="row justify-content-center">
            {team.map((member, idx) => renderTeamCard(member, idx))}
          </div>
        )}
        
        {team.length > 0 && (
          <div className="text-center mt-5">
            <p className="text-muted">
              <strong>{team.length}</strong> talented team members and growing!
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .team-item {
          transition: all 0.3s ease !important;
        }
        
        .team-item:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 15px 40px rgba(154, 59, 154, 0.2) !important;
        }
        
        .badge {
          border-radius: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default PeoplePage;