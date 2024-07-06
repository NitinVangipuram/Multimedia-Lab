import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const getRandomImageUrl = () => {
  const randomWidth =400; // Random width between 400 and 800
  const randomHeight =  300; // Random height between 300 and 600
  return `https://picsum.photos/${randomWidth}/${randomHeight}`;
};

const News = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}
          >
            <div className="btn btn-sm border rounded-pill  px-3 mb-3" style={{color:"#9a3b9a"}}>News</div>
            <h1 className="mb-4">Explore Our Recent  News</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={getRandomImageUrl()} alt="Random Image 1" />
                <div className="case-overlay text-decoration-none">
                  <small>Robotic Automation</small>
                  <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                  <span className="btn btn-square " style={{background:"#9a3b9a" , color:"white"}}><i className="fa fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={getRandomImageUrl()} alt="Random Image 2" />
                <div className="case-overlay text-decoration-none">
                  <small>Machine Learning</small>
                  <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                  <span className="btn btn-square " style={{background:"#9a3b9a" , color:"white"}}><i className="fa fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src={getRandomImageUrl()} alt="Random Image 3" />
                <div className="case-overlay text-decoration-none">
                  <small>Predictive Analysis</small>
                  <h5 className="lh-base text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita</h5>
                  <span className="btn btn-square " style={{background:"#9a3b9a" , color:"white"}}><i className="fa fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
