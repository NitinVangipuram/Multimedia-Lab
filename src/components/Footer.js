import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for collapse functionality
import { Link } from 'react-router-dom';
import logo from '../Img/logo-3.png';
const Footer = () => {
  return (
    <div>
        <div class="container-fluid  text-white-50 footer pt-5" style={{background:"rgb(59,32,59)"}}>
        <div class="container py-5" >
            <div class="row g-5" style={{display:"flex", justifyContent:"space-between"}}>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" style={{marginTop:"0px"}}>
                    <Link to="/" class="d-inline-block mb-3">
                        {/* <h1 class="text-white">Multimedia<span class="text-primary">.</span>Lab</h1> */}
                        <img src={logo} 
              alt="logo"
              style={{height: '140px' }}
              />
                    </Link>
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor</p>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <h5 class="text-white mb-4">Our Links</h5>
                    <div style={{ marginLeft: "100px" }}>
        <Link className="btn btn-link" to="/">Home</Link>
        <Link className="btn btn-link" to="/team">Team</Link>
        <Link className="btn btn-link" to="/news">News</Link>
        <Link className="btn btn-link" to="/research">Research</Link>
        <Link className="btn btn-link" to="/publications">Publications</Link>
      </div>
                    {/* <a class="btn btn-link" href="">Career</a> */}
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <h5 class="text-white mb-4">Get In Touch</h5>
                    <p><i class="fa fa-map-marker-alt me-3"></i>Indian Institute of Technology Dharwad, Chikka Malligwad, Dharwad, Karnataka - 580007</p>
                    <p><i class="fa fa-phone-alt me-3"></i>+123456789</p>
                    <p><i class="fa fa-envelope me-3"></i>pro@iitdh.ac.in</p>
                    <div class="d-flex pt-2" style={{marginLeft:"40px"}}>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
      
                {/* <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <h5 class="text-white mb-4">Our Services</h5>
                    <a class="btn btn-link" href="">Robotic Automation</a>
                    <a class="btn btn-link" href="">Machine learning</a>
                    <a class="btn btn-link" href="">Predictive Analysis</a>
                    <a class="btn btn-link" href="">Data Science</a>
                    <a class="btn btn-link" href="">Robot Technology</a>
                </div> */}
            </div>
        </div>
        {/* <div class="container wow fadeIn" data-wow-delay="0.1s">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                   
                       
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FAQs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
    </div>
  )
}

export default Footer