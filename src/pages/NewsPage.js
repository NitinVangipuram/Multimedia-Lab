import React from 'react'
import News from '../components/News'
import { Link } from 'react-router-dom'
import svg from "../Img/ar-vr-mr-training.png"

const NewsPage = () => {
  return (
    <div>
       <div className="container-fluid pt-5 hero-header" style={{background:"rgb(59,32,59)"}}>
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
            <News />
    </div>
  )
}

export default NewsPage