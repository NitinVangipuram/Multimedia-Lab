import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import svg from "./Img/ar-vr-mr-training.png";
import axios from 'axios';
import MarkdownComponent from './pages/MarkdownComponent';

const fetchPageData = async (slug) => {
    const response = await axios.get(`https://ema.iitdh.ac.in/api/api/pages?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0];
  };

const DynamicPage = () => {
    const { slug } = useParams();
    const [pageData, setPageData] = useState(null);
    useEffect(() => {
      const getData = async () => {
        const data = await fetchPageData(slug);
        setPageData(data);
      };
      getData();
    }, [slug]);

    if (!pageData) return <div>Loading...</div>;

    const bannerImageUrl = pageData.attributes.BannerImage?.data?.attributes?.formats?.medium?.url;
    return (
      <div>
              <div className="container-fluid pt-5 hero-header" style={{
           background: bannerImageUrl
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImageUrl})`
      : 'rgb(59,32,59)',

    paddingTop: '5rem', // adjust as needed
    paddingBottom: '5rem', // adjust as needed
          }}>
          <div className="container pt-5">
            <div className="row g-5 pt-5">
              <div className="col-lg-6 align-self-center text-lg-start mb-lg-5">
                <h1 className="display-4 text-white mb-4 animated slideInRight" style={{textAlign:"left"}}>{pageData.attributes.slug}</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-start mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-white" to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item text-white active" aria-current="page">{pageData.attributes.slug}</li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-6 align-self-end text-lg-end">
              </div>
            </div>
          </div>
        </div>
        <MarkdownComponent data={pageData.attributes.Content}/>
        {/* {pageData.attributes.Contents.map((content) => {
          switch (content.__component) {
            case 'blogblock.blogblock':
              return (
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="bg-white p-4  ">
                <h1 className="text-dark mb-3" style={{textAlign:"justify"}}>{content.title}</h1>
                <div className="mb-4">
                  {content.image.data.attributes.url && (
                    <img
                      className="img-fluid rounded"
                      src={content.image.data.attributes.formats.medium.url}
                      style={{ maxWidth: '100%', height: '' }}
                    />
                  )}
                </div>
                <p className="text-muted" style={{ lineHeight: '1.8', textAlign:"justify" }}>{content.description}</p>
                <div className="text-center mt-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
            case 'textblock.textblock':
              return (
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="bg-white p-4  ">
                <h1 className="text-dark mb-3" style={{textAlign:"justify"}}>{content.title}</h1>
                <p className="text-muted" style={{ lineHeight: '1.8', textAlign:"justify" }}>{content.description}</p>
                <div className="text-center mt-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    case 'titleblock.titleblock':
              return (
      <div>
      <h2 style={{ color: '#9a3b9a', textAlign: 'center', color: 'black' }}>{content.title}</h2>
      </div>
    );
    case 'descriptionblock.descriptionblock':
              return (
      <div>
      <p>{content.description}</p>
      </div>
    );

    case 'markdowncomponent.markdowncomponent':
              return (
                <MarkdownComponent data={content.markdowncomponent}/>
    );
            default:
              return null;
          }
        })} */}
      </div>
    );
  };
  export default DynamicPage;