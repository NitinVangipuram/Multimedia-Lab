import React, { useState, useEffect } from 'react';
import axios from 'axios';
import svg from '../Img/ar-vr-mr-training.png';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const Hero = () => {
  const [heroContent, setHeroContent] = useState({ description: '' });

  useEffect(() => {
    axios.get(`${apiEndpoint}/api/tilte`)
      .then(response => {
        // Assuming the response structure is { data: { id, attributes }, meta: {} }
        const { data } = response;
        console.log(data.data);
        if (data && data.data.attributes) {
          setHeroContent(data.data.attributes);
        } else {
          console.error('Hero content is empty or does not have attributes.');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the hero content!', error);
      });
  }, []);
  return (
    <div>
        <div class="container-fluid  hero-header " style={{background:"rgb(59,32,59)"}}>
        <div class="container pt-5">
            <div class="row g-5 pt-5">
                <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    {/* <div class="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight"></div> */}
                    <h1 class="display-4 text-white mb-4 animated slideInRight"> Emerging Multimedia Lab IIT Dharwad</h1>
                    <p class="text-white mb-4 animated slideInRight">{heroContent.description}</p>
                    <a href="" class="btn  py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight" style={{background:"#9a3b9a" , color:"white"}}>Read More</a>
                    <a href="" class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                </div>
                <div class="col-lg-6 align-self-end text-center text-lg-end">
                    <img class="img-fluid" src={svg} alt="">
                    </img>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Hero;
