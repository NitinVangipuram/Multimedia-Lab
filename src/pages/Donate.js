import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";

const DonateUs = () => {
  // State for donation modal
  const [showModal, setShowModal] = useState(false);
  
  // Define the color scheme
  const colors = {
    primary: 'rgb(59, 32, 59)',     // Deep purple
    lightBg: 'rgb(255, 234, 255)',  // Light pink
    white: '#ffffff',
    accent: '#8b4a8b',              // Lighter purple for accents
  };
  
  // Styles object
  const styles = {
    container: {
      backgroundColor: colors.lightBg,
      minHeight: '100vh',
      padding: '0',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: colors.primary,
    },
    heroHeader: {
      background: colors.primary,
      padding: '4rem 0',
      textAlign: 'center',
      marginBottom: '3rem'
    },
    mainContent: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 2rem 5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      color: colors.white,
      marginBottom: '1rem',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      color: colors.lightBg,
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem',
    },
    card: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(59, 32, 59, 0.1)',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '800px',
      margin: '-3rem auto 0',
      position: 'relative',
      zIndex: '2',
      marginTop: '2rem',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      color: colors.primary,
      textAlign: 'center',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      color: colors.primary,
      textAlign: 'center',
    },
    impactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
      marginBottom: '2.5rem',
    },
    impactItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1.5rem',
      backgroundColor: colors.lightBg,
      borderRadius: '12px',
      transition: 'transform 0.3s ease',
    },
    impactIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      backgroundColor: 'rgba(59, 32, 59, 0.1)',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    impactTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: colors.primary,
    },
    donateButton: {
      backgroundColor: colors.primary,
      color: colors.white,
      padding: '1rem 3rem',
      borderRadius: '50px',
      fontSize: '1.2rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '1rem',
      display: 'block',
      margin: '2rem auto 0',
    },
    donateButtonHover: {
      backgroundColor: colors.accent,
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 25px rgba(59, 32, 59, 0.3)',
    },
    footer: {
      textAlign: 'center',
      marginTop: '3rem',
      fontSize: '0.9rem',
      color: 'rgba(59, 32, 59, 0.7)',
    },
    modal: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000',
    },
    modalContent: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      padding: '2rem',
      width: '90%',
      maxWidth: '500px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: colors.primary,
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      color: colors.primary,
      cursor: 'pointer',
    },
    modalText: {
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
    },
    highlight: {
      color: colors.primary,
      fontWeight: '700',
    },
    divider: {
      height: '4px',
      background: `linear-gradient(90deg, ${colors.primary}, ${colors.lightBg})`,
      width: '60px',
      margin: '0 auto 2.5rem',
      borderRadius: '2px',
    },
  };

  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      {/* <div style={styles.heroHeader}>
        <h1 style={styles.heroTitle}>Support Our Mission</h1>
        <p style={styles.heroSubtitle}>
          Your donation directly supports our mission to advance emerging technologies 
          and create innovative solutions that improve lives.
        </p>
      </div> */}
      <div className="container-fluid hero-header" style={{ background: "rgb(59,32,59)", marginBottom: "40px" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">Support Our Mission</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Donate Us</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Help Us Make a Difference</h2>
          <div style={styles.divider}></div>
          <p style={styles.paragraph}>
            Every contribution, no matter the size, helps us continue our important work.
            Join our community of supporters who believe in the power of technology to transform lives.
          </p>
          
          <div style={styles.impactGrid}>
            <div style={styles.impactItem}>
              <div style={styles.impactIcon}>🎓</div>
              <h3 style={styles.impactTitle}>Student Research</h3>
              <p>Support innovative student projects and educational initiatives</p>
            </div>
            
            <div style={styles.impactItem}>
              <div style={styles.impactIcon}>💡</div>
              <h3 style={styles.impactTitle}>Innovation</h3>
              <p>Fund development of breakthrough technologies</p>
            </div>
            
            <div style={styles.impactItem}>
              <div style={styles.impactIcon}>🌍</div>
              <h3 style={styles.impactTitle}>Global Impact</h3>
              <p>Create solutions for pressing worldwide challenges</p>
            </div>
          </div>
          
          <button
            style={{
              ...styles.donateButton,
              ...(hoverButton ? styles.donateButtonHover : {})
            }}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
            onClick={() => setShowModal(true)}
          >
            Donate Now
          </button>
          
          <p style={styles.footer}>
            <span>🔒</span> All transactions are secure and encrypted
          </p>
        </div>
      </main>
      
      {/* Modal */}
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Thank You!</h3>
              <button style={styles.closeButton} onClick={() => setShowModal(false)}>×</button>
            </div>
            <p style={styles.modalText}>
              Thank you for your interest in supporting our mission. 
              In a fully implemented version, this would connect to a payment processor.
            </p>
            <p style={styles.modalText}>
              For now, please contact us at <span style={styles.highlight}>donations@example.org</span> to 
              complete your contribution.
            </p>
            <button
              style={{
                ...styles.donateButton,
                ...(hoverButton ? styles.donateButtonHover : {})
              }}
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateUs;