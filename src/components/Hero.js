import React from 'react'
import svg from '../Img/ar-vr-mr-training.png'
const Hero = () => {
  return (
    <div>
        <div class="container-fluid pt-5 hero-header " style={{background:"rgb(59,32,59)"}}>
        <div class="container pt-5">
            <div class="row g-5 pt-5">
                <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    {/* <div class="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight"></div> */}
                    <h1 class="display-4 text-white mb-4 animated slideInRight"> Emerging Multimedia Lab IIT Dharwad</h1>
                    <p class="text-white mb-4 animated slideInRight">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
  )
}

export default Hero