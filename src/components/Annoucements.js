import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const Annoucements = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${apiEndpoint}/api/announcements?populate=*`)
      .then(response => response.json())
      .then(data => setNews(data.data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  // Sort news by createdAt in descending order
  const sortedNews = news.sort((a, b) => new Date(b.attributes.Date) - new Date(a.attributes.Date));

  const maxLength = 100; // Adjust the length as needed
  const itemHeight = '450px'; // Fixed height for all news items
  const overlayColor = 'rgb(255, 234, 255)'; // Lighter overlay color

  function cleanMarkdownText(text, maxLength = 100) {
    // Replace newline characters and escaped newlines
    text = text.replace(/\\n/g, ' ');
    text = text.replace(/\n/g, ' ');
    
    // Remove extra whitespaces
    text = text.replace(/\s+/g, ' ').trim();
    
    // Remove markdown bold markers
    text = text.replace(/\*\*/g, '');
    
    // Remove leading '#' characters and any subsequent whitespace
    text = text.replace(/^#+\s*/, '');
    
    // Truncate if longer than maxLength
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + '...';
    }
    
    return text;
  }
  return (
<div style={{ padding: '80px 0', backgroundColor: '#f0f2f5', fontFamily: 'Arial, sans-serif' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <div
        style={{
          display: 'inline-block',
          padding: '10px 25px',
          backgroundColor: 'rgba(154, 59, 154, 0.1)',
          borderLeft: '4px solid #9a3b9a',
          borderRadius: '0 30px 30px 0',
          color: '#9a3b9a',
          marginBottom: '25px',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontSize: '13px',
        }}
      >
        Annoucements
      </div>
      <h1 style={{ 
        marginBottom: '15px', 
        fontSize: '42px', 
        fontWeight: 'bold', 
        color: '#333',
        position: 'relative',
        display: 'inline-block',
        padding: '0 20px'
      }}>
        Our Annoucements
        <span style={{
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '4px',
          backgroundColor: '#9a3b9a',
          borderRadius: '2px'
        }}></span>
      </h1>
    </div>
    
    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -20px' }}>
      {sortedNews.map((item, index) => (
        <div key={item.id} className="col-lg-4 col-md-6" style={{ padding: '0 20px', marginBottom: '40px', width: '33.33%', boxSizing: 'border-box' }}>
          <div
            style={{
              height: itemHeight,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(154, 59, 154, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            }}
          >
            {item.attributes.Image && (
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: '#9a3b9a',
                  color: 'white',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: '2'
                }}>
                  {item.attributes.Date}
                </div>
                <img
                  src={item.attributes.Image.data.attributes.formats.medium.url}
                  alt={`News ${item.id}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            )}
            
            <div
              style={{
                flex: '1',
                padding: '25px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
              <h5 style={{ marginBottom: '10px' }}>
                    {item.attributes.Title.length > 50
                      ? `${item.attributes.Title.substring(0, 50)}...`
                      : item.attributes.Title}
                  </h5>
                <p style={{ 
                  marginBottom: '20px', 
                  color: "#555", 
                  lineHeight: '1.6', 
                  fontSize: '15px', 
                  textAlign: 'justify',
                }}>
                  {item.attributes.Content.length > maxLength
                    ? cleanMarkdownText(item.attributes.Content).slice(0, maxLength) + '...'
                    : item.attributes.Content}
                </p>
              </div>
              
              <Link
                to={`/announcements/${item.id}`}
                state={{ newsItem: item }}
                style={{
                  display: 'inline-block',
                  padding: '0',
                  color: '#9a3b9a',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  position: 'relative',
                  transition: 'padding-right 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.paddingRight = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.paddingRight = '0';
                }}
              >
                Read More
                <span style={{
                  display: 'inline-block',
                  marginLeft: '8px',
                  transition: 'transform 0.3s ease'
                }} className="arrow">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Annoucements;
