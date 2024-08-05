import React, { useState, useEffect } from 'react';
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

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <div className="btn btn-sm border rounded-pill px-3 mb-3" style={{ color: "#9a3b9a" }}>News</div>
            <h1 className="mb-4">Explore Our Recent News</h1>
          </div>
          <div className="row g-4">
            {news.map((item, index) => (
              <div key={index} className="col-lg-4 wow fadeIn" data-wow-delay={`${0.3 + index * 0.2}s`}>
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  {item.attributes.Image && (
                    <img className="img-fluid" src={item.attributes.Image.data.attributes.formats.thumbnail.url} alt={`News ${index + 1}`} />
                  )}
                  <div className="case-overlay text-decoration-none">
                    <small>Category</small> {/* Update this as needed */}
                    <h5 className="lh-base text-white mb-3">{item.attributes.Title}</h5>
                    <p className="text-white mb-3">{item.attributes.Description}</p>
                    <span className="btn btn-square" style={{ background: "#9a3b9a", color: "white" }}>
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
