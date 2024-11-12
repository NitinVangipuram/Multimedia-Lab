import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";
import NewsMarkdown from './NewsMarkdown';

const NewsDetail = () => {
  const location = useLocation();
  const { newsItem } = location.state || {};

  if (!newsItem) {
    return <div className="container my-5"><h3>News item not found.</h3></div>;
  }

  const { Title,Image ,markdowncomponent} = newsItem.attributes;

  return (
    <div>
      
      <div className="container-fluid pt-5 hero-header" style={{ background: "rgb(59,32,59)" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">News</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">News / {Title.slice(0,15)}</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="bg-white p-4  ">
              <h1 className="text-dark mb-3" style={{textAlign:"justify"}}>{Title}</h1>
              <div className="mb-4">
                {Image && (
                  <img
                    className="img-fluid rounded"
                    src={Image.data.attributes.formats.medium.url}
                    alt={Title}
                    style={{ maxWidth: '100%', height: '' }}
                  />
                )}
              </div>
              {/* <p className="text-muted" style={{ lineHeight: '1.8', textAlign:"justify" }}>{Description}</p> */}
              <NewsMarkdown data={markdowncomponent} style={{marginTop:"0px"}} />
              <div className="text-center mt-4">
                <Link
                  to="/news"
                  className="btn "
                  style={{
          color: '#9a3b9a',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'inline-block',
          marginTop: '20px'
        }}
                >
                  Back to News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
