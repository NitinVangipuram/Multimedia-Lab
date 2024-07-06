import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  return (
    <div>
        <div class="container-fluid  py-5" style={{background:"#ffeaff"}}>
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="btn btn-sm border rounded-pill  px-3 mb-3" style={{color:"#9a3b9a"}}>Our Team</div>
                    <h1 class="mb-4">Meet Our Team Members</h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                        amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                        clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <a class="btn  rounded-pill px-4" href="" style={{background:"#9a3b9a", color:"white"}}>Read More</a>
                </div>
                <div class="col-lg-7">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <div class="row g-4">
                                <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                                        <img class="img-fluid rounded-circle p-4" src="img/team-1.jpg" alt="">
                                        </img>
                                        <h5 class="mb-0">Name 1</h5>
                                        <small>Role 1</small>
                                        <div className="d-flex justify-content-center mt-3">
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faFacebookF} /></a>
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faTwitter} /></a>
      <a className="btn btn-square m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faInstagram} /></a>
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faLinkedinIn} /></a>
    </div>
                                    </div>
                                </div>
                                <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                                        <img class="img-fluid rounded-circle p-4" src="img/team-2.jpg" alt="">
                                        </img>
                                        <h5 class="mb-0">Name 2</h5>
                                        <small>Role 2</small>
                                        <div className="d-flex justify-content-center mt-3">
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faFacebookF} /></a>
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faTwitter} /></a>
      <a className="btn btn-square m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faInstagram} /></a>
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faLinkedinIn} /></a>
    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 pt-md-4">
                            <div class="row g-4">
                                <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                                        <img class="img-fluid rounded-circle p-4" src="img/team-3.jpg" alt="">
                                        </img>
                                        <h5 class="mb-0">Name 3</h5>
                                        <small>Role 3</small>
                                        <div className="d-flex justify-content-center mt-3">
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faFacebookF} /></a>
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faTwitter} /></a>
      <a className="btn btn-square m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faInstagram} /></a>
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faLinkedinIn} /></a>
    </div>
                                    </div>
                                </div>
                                <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                                        <img class="img-fluid rounded-circle p-4" src="img/team-4.jpg" alt="">
                                        </img>
                                        <h5 class="mb-0">Name 4</h5>
                                        <small>Role 4</small>
                                        <div className="d-flex justify-content-center mt-3">
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faFacebookF} /></a>
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faTwitter} /></a>
      <a className="btn btn-square m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faInstagram} /></a>
      <a className="btn btn-square  m-1" href="#" style={{background:"#9a3b9a", color:"white"}}><FontAwesomeIcon icon={faLinkedinIn} /></a>
    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Team