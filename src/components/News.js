import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${apiEndpoint}/api/newss?populate=*`)
      .then(response => response.json())
      .then(data => setNews(data.data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  const maxLength = 100; // Adjust the length as needed
  const itemHeight = '450px'; // Fixed height for all news items
  const overlayColor = 'rgb(255, 234, 255)'; // Lighter overlay color

  return (
    <div style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '5px 15px',
            border: '1px solid #9a3b9a',
            borderRadius: '50px',
            color: '#9a3b9a',
            marginBottom: '15px',
          }}
        >
          News
        </div>
        <h1 style={{ marginBottom: '20px' }}>Explore Our Recent News</h1>
      </div>
      <div className="row" style={{ rowGap: '30px' }}>
        {news.map((item, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 d-flex"
            style={{ animation: `fadeIn ${0.3 + index * 0.2}s` }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: itemHeight,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                backgroundColor: '#fff', // Ensure the background color is white
              }}
            >
              {item.attributes.Image && (
                <img
                  src={item.attributes.Image.data.attributes.formats.medium.url}
                  alt={`News ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '200px', // Fixed height for images
                    objectFit: 'cover', // Ensure the image covers the container
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                />
              )}
              <div
                style={{
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  background: overlayColor, // Lighter overlay color
                  color: 'white',
                  textAlign: 'left',
                }}
              >
                <h5 style={{ marginBottom: '10px' }}>
                {item.attributes.Title.length > 76
    ? `${item.attributes.Title.substring(0, 76)}...`
    : item.attributes.Title}
                </h5>
                <p style={{ marginBottom: '10px' ,color:"black" }}>
                  {item.attributes.markdowncomponent.length > maxLength
                    ? item.attributes.markdowncomponent.slice(0, maxLength) + '...'
                    : item.attributes.markdowncomponent}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  state={{ newsItem: item }}
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#9a3b9a',
                    color: 'white',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  Read More
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

export default News;
