import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";
import News from '../components/News';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [media,setMedia] = useState([]);
  useEffect(() => {
    fetch(`${apiEndpoint}/api/newss?populate=*`)
      .then(response => response.json())
      .then(data => setNews(data.data))
      .catch(error => console.error('Error fetching news:', error));
  fetch(`${apiEndpoint}/api/media-coverages?populate=*`)
      .then(response => response.json())
      .then(data => setMedia(data.data))
      .catch(error => console.error('Error fetching news:', error));
  },
  []);
  return (
    <div>
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
      <News/>
    </div>
  );
};

export default NewsPage;
