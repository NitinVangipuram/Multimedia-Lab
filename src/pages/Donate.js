import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png"; // Reusing the same SVG from Gallery component

const DonateUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    donationType: 'one-time',
    paymentMethod: 'card',
    message: ''
  });
  
  // State for selected donation amount
  const [selectedAmount, setSelectedAmount] = useState(null);
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Reset selected amount pill if user types a custom amount
    if (name === 'amount') {
      setSelectedAmount(null);
    }
  };
  
  // Handle donation amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setFormData(prevState => ({
      ...prevState,
      amount: amount.toString()
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process donation (would connect to payment gateway in a real implementation)
    console.log('Donation submission:', formData);
    alert('Thank you for your generous donation!');
  };
  
  // Define the color scheme from the gallery component
  const colors = {
    primary: 'rgb(59, 32, 59)',     // Deep purple
    lightBg: 'rgb(255, 234, 255)',  // Light pink
    mediumBg: 'rgb(245, 224, 245)', // Medium pink
    white: '#ffffff',
    darkText: 'rgb(59, 32, 59)',
    lightText: 'rgb(255, 234, 255)',
    accent: '#8b4a8b',              // Lighter purple for accents
    success: '#4BB543',
    error: '#d32f2f'
  };
  
  // Styles object
  const styles = {
    container: {
      backgroundColor: colors.lightBg,
      minHeight: '100vh',
      padding: '0',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: colors.darkText,
    },
    heroHeader: {
      background: colors.primary,
      marginBottom: '40px',
      padding: '2rem 0'
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem 5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    twoColumn: {
      display: 'flex',
      width: '100%',
      gap: '2rem',
      flexWrap: 'wrap'
    },
    leftColumn: {
      flex: '1 1 400px',
      marginBottom: '2rem'
    },
    rightColumn: {
      flex: '1 1 500px',
      backgroundColor: colors.white,
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(59, 32, 59, 0.1)',
      padding: '2rem',
      marginBottom: '2rem'
    },
    donationHeader: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      color: colors.primary,
    },
    subheading: {
      fontSize: '1.2rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      color: colors.darkText,
    },
    impact: {
      backgroundColor: colors.primary,
      borderRadius: '12px',
      padding: '1.5rem',
      color: colors.white,
      marginBottom: '2rem',
    },
    impactHeader: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: colors.white,
    },
    impactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    impactIcon: {
      fontSize: '1.5rem',
      marginRight: '1rem',
      backgroundColor: 'rgba(255, 234, 255, 0.2)',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    testimonial: {
      backgroundColor: colors.white,
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 15px rgba(59, 32, 59, 0.08)',
      borderLeft: `4px solid ${colors.accent}`,
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      fontSize: '0.9rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: colors.darkText,
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '1rem',
      border: '1px solid rgba(59, 32, 59, 0.2)',
      borderRadius: '6px',
      outline: 'none',
      transition: 'border-color 0.2s ease',
    },
    inputFocus: {
      borderColor: colors.primary,
      boxShadow: '0 0 0 2px rgba(59, 32, 59, 0.1)',
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '1rem',
      border: '1px solid rgba(59, 32, 59, 0.2)',
      borderRadius: '6px',
      backgroundColor: colors.white,
      outline: 'none',
      cursor: 'pointer',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '1rem',
      border: '1px solid rgba(59, 32, 59, 0.2)',
      borderRadius: '6px',
      minHeight: '120px',
      outline: 'none',
      fontFamily: 'inherit',
      resize: 'vertical',
    },
    amountContainer: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      marginBottom: '1rem',
    },
    amountPill: {
      padding: '0.75rem 1.25rem',
      borderRadius: '50px',
      border: `1px solid ${colors.primary}`,
      backgroundColor: 'transparent',
      color: colors.primary,
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    amountPillSelected: {
      backgroundColor: colors.primary,
      color: colors.white,
    },
    row: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1.5rem',
    },
    column: {
      flex: '1 1 0',
    },
    radioContainer: {
      display: 'flex',
      gap: '1.5rem',
      marginBottom: '1rem',
    },
    radioLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
    },
    submitButton: {
      backgroundColor: colors.primary,
      color: colors.white,
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.2s ease',
      marginTop: '1rem',
    },
    submitButtonHover: {
      backgroundColor: colors.accent,
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(59, 32, 59, 0.2)',
    },
    secureNotice: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      color: 'rgba(59, 32, 59, 0.7)',
      marginTop: '1rem',
    },
    paymentIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '1.5rem',
    },
    paymentIcon: {
      fontSize: '2rem',
      color: 'rgba(59, 32, 59, 0.6)',
    },
    featuredDonors: {
      backgroundColor: colors.mediumBg,
      borderRadius: '12px',
      padding: '1.5rem',
      marginTop: '2rem',
    },
    donorsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '1rem',
    },
    donorBadge: {
      backgroundColor: colors.white,
      borderRadius: '50px',
      padding: '0.5rem 1rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      boxShadow: '0 2px 8px rgba(59, 32, 59, 0.08)',
    },
    breadcrumb: {
      display: 'flex',
      gap: '0.5rem',
      fontSize: '0.95rem',
    },
    breadcrumbLink: {
      color: colors.lightText,
      textDecoration: 'none',
    },
    breadcrumbActive: {
      color: colors.lightText,
      opacity: '0.8',
    }
  };

  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div style={styles.container}>
      <div className="container-fluid hero-header" style={styles.heroHeader}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">Support Our Mission</h1>
              <nav aria-label="breadcrumb">
                <ol style={styles.breadcrumb}>
                  <li>
                    <Link style={styles.breadcrumbLink} to="/">Home</Link>
                  </li>
                  <li style={{ color: colors.lightText }}> / </li>
                  <li style={styles.breadcrumbActive}>Donate</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      
      <main style={styles.mainContent}>
        <div style={styles.twoColumn}>
          <div style={styles.leftColumn}>
            <h2 style={styles.donationHeader}>Help Us Make a Difference</h2>
            <p style={styles.subheading}>
              Your donation directly supports our mission to advance emerging technologies and create
              innovative solutions that improve lives. Every contribution, no matter the size, helps us
              continue our important work.
            </p>
            
            <div style={styles.impact}>
              <h3 style={styles.impactHeader}>Your Impact</h3>
              
              <div style={styles.impactItem}>
                <span style={styles.impactIcon}>🎓</span>
                <span>Support student research </span>
              </div>
              
              <div style={styles.impactItem}>
                <span style={styles.impactIcon}>💡</span>
                <span>Fund innovative technology development</span>
              </div>
              
              <div style={styles.impactItem}>
                <span style={styles.impactIcon}>🌍</span>
                <span>Create solutions for global challenges</span>
              </div>
              
              <div style={styles.impactItem}>
                <span style={styles.impactIcon}>🔬</span>
                <span>Enable cutting-edge research facilities</span>
              </div>
            </div>
            
            <div style={styles.testimonial}>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                "The support we received has been transformative for our research. We've been able to develop
                technologies that are making a real difference in accessibility and education."
              </p>
              <strong>- John Doe </strong>
            </div>
            
            <div style={styles.featuredDonors}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Our Generous Supporters</h3>
              <div style={styles.donorsList}>
                <span style={styles.donorBadge}>Tech Foundation</span>
                <span style={styles.donorBadge}>Global Innovations Inc.</span>
                <span style={styles.donorBadge}>Future Labs</span>
                <span style={styles.donorBadge}>Community Trust</span>
                <span style={styles.donorBadge}>+ 200 individuals</span>
              </div>
            </div>
          </div>
          
          <div style={styles.rightColumn}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: colors.primary }}>Make Your Donation</h3>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Select Amount</label>
                <div style={styles.amountContainer}>
                  {[25, 50, 100, 250].map(amount => (
                    <button
                      key={amount}
                      type="button"
                      style={{
                        ...styles.amountPill,
                        ...(selectedAmount === amount ? styles.amountPillSelected : {})
                      }}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>Custom Amount ($)</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    style={styles.input}
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Donation Type</label>
                <div style={styles.radioContainer}>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="donationType"
                      value="one-time"
                      checked={formData.donationType === 'one-time'}
                      onChange={handleInputChange}
                    />
                    One-time
                  </label>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={formData.donationType === 'monthly'}
                      onChange={handleInputChange}
                    />
                    Monthly
                  </label>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="donationType"
                      value="annual"
                      checked={formData.donationType === 'annual'}
                      onChange={handleInputChange}
                    />
                    Annual
                  </label>
                </div>
              </div>
              
              <div style={styles.row}>
                <div style={styles.column}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      style={styles.input}
                      required
                    />
                  </div>
                </div>
                <div style={styles.column}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      style={styles.input}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share why you're supporting us..."
                  style={styles.textarea}
                ></textarea>
              </div>
              
              <button
                type="submit"
                style={{
                  ...styles.submitButton,
                  ...(hoverButton ? styles.submitButtonHover : {})
                }}
                onMouseEnter={() => setHoverButton(true)}
                onMouseLeave={() => setHoverButton(false)}
              >
                Donate Now
              </button>
              
              <div style={styles.secureNotice}>
                <span>🔒</span> All transactions are secure and encrypted
              </div>
              
              <div style={styles.paymentIcons}>
                <span style={styles.paymentIcon}>💳</span>
                <span style={styles.paymentIcon}>📱</span>
                <span style={styles.paymentIcon}>🏦</span>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonateUs;