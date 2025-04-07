import { useState } from 'react';
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResearchThrustAreas() {
  const [expandedArea, setExpandedArea] = useState(null);
  
  const thrustAreas = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description: "Research focusing on machine learning algorithms, neural networks, natural language processing, and computer vision to develop intelligent systems that can perceive, learn, reason, and act autonomously.",
      projects: [
        "Deep Learning for Medical Imaging",
        "Reinforcement Learning in Robotics",
        "Ethical AI Development",
        "Explainable AI Systems"
      ]
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Exploring quantum mechanics principles to develop computational systems that can solve complex problems exponentially faster than classical computers.",
      projects: [
        "Quantum Algorithm Development",
        "Quantum Error Correction",
        "Quantum Materials Research",
        "Quantum Cryptography"
      ]
    },
    {
      id: 3,
      title: "Sustainable Energy",
      description: "Researching renewable energy sources, energy storage solutions, and efficient distribution systems to address climate change and promote environmental sustainability.",
      projects: [
        "Advanced Solar Cell Technology",
        "Grid-Scale Energy Storage",
        "Biofuel Development",
        "Smart Grid Integration"
      ]
    },
    {
      id: 4,
      title: "Biotechnology & Genomics",
      description: "Investigating cellular and molecular processes to develop new treatments, diagnostic tools, and preventative measures for various diseases and health conditions.",
      projects: [
        "CRISPR Gene Editing Applications",
        "Synthetic Biology",
        "Personalized Medicine",
        "Bioinformatics"
      ]
    },
    {
      id: 5,
      title: "Advanced Materials",
      description: "Designing and developing novel materials with specific properties for applications in electronics, medicine, construction, transportation, and energy sectors.",
      projects: [
        "Nanomaterials",
        "Metamaterials",
        "Biodegradable Polymers",
        "Smart Textiles"
      ]
    }
  ];

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

  const footerStyle = {
    backgroundColor: '#9a3b9a',
    padding: '16px',
    textAlign: 'center',
    color: '#ffffff'
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
          Our institution focuses on five key research areas that address critical challenges and opportunities in science and technology.
        </p>
        
        <div style={gridContainerStyle}>
          {thrustAreas.map(area => (
            <div 
              key={area.id} 
              style={{
                ...cardStyle,
                transform: expandedArea === area.id ? 'scale(1.05)' : 'scale(1)'
              }}
              onClick={() => toggleExpand(area.id)}
            >
              <div style={cardHeaderStyle}>
                <h2 style={cardTitleStyle}>{area.title}</h2>
              </div>
              
              <div style={cardBodyStyle}>
                <p style={descriptionStyle}>{area.description}</p>
                
                {expandedArea === area.id && (
                  <div style={{ marginTop: '16px' }}>
                    <h3 style={projectsHeaderStyle}>Key Projects:</h3>
                    <ul style={projectListStyle}>
                      {area.projects.map((project, index) => (
                        <li key={index} style={projectItemStyle}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button style={buttonStyle}>
                  {expandedArea === area.id ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
}