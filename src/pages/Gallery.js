import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svg from "../Img/ar-vr-mr-training.png";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://ema.iitdh.ac.in/api/api/galleries?populate=*');
        console.log(response.json().data);
        const data =  await response.json().data;
        
        if (data && Array.isArray(data)) {
          // Process API data to match our gallery items structure
          const processedItems = data.map(item => {
            const mediaData = item.attributes?.Media?.data?.attributes;
            
            if (!mediaData) return null;
            
            // Determine type based on MIME type
            const type = mediaData.mime.startsWith('image/') ? 'image' : 
                        mediaData.mime.startsWith('video/') ? 'video' : 'unknown';
            
            // Get appropriate URL based on media type
            let url = mediaData.url;
            
            // For images, use medium format if available
            if (type === 'image' && mediaData.formats?.medium?.url) {
              url = mediaData.formats.medium.url;
            }
            
            return {
              id: item.id,
              type: type,
              url: url,
              title: item.attributes.Title || 'Untitled',
              originalUrl: mediaData.url, // Keep original URL for modal view
            };
          }).filter(item => item !== null); // Remove any null items
          
          setGalleryItems(processedItems);
        } else {
          setError('Invalid data format received from API');
        }
      } catch (err) {
        setError('Failed to fetch gallery data');
        console.error('Error fetching gallery data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Modern and clean styles while keeping the same color scheme
  const styles = {
    container: {
      backgroundColor: 'rgb(255, 234, 255)',
      minHeight: '100vh',
      padding: '0',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: 'rgb(59, 32, 59)',
    },
    mainContent: {
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '0 2rem 5rem',
    },
    filterBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2.5rem',
      paddingBottom: '1rem',
    },
    filterGroup: {
      display: 'flex',
      gap: '0.75rem',
    },
    filterButton: {
      backgroundColor: 'transparent',
      color: 'rgb(59, 32, 59)',
      border: '1px solid rgb(59, 32, 59)',
      padding: '0.625rem 1.5rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '0.875rem',
      transition: 'all 0.2s ease',
      letterSpacing: '0.3px',
    },
    activeFilter: {
      backgroundColor: 'rgb(59, 32, 59)',
      color: 'rgb(255, 234, 255)',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.75rem',
    },
    galleryItem: {
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'rgb(255, 255, 255)',
      boxShadow: '0 2px 12px rgba(59, 32, 59, 0.06)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    galleryItemHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 24px rgba(59, 32, 59, 0.12)',
    },
    mediaContainer: {
      position: 'relative',
      overflow: 'hidden',
      height: '240px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.5s ease',
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.5s ease',
    },
    mediaHover: {
      transform: 'scale(1.05)',
    },
    videoIndicator: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      backgroundColor: 'rgba(59, 32, 59, 0.85)',
      color: 'rgb(255, 234, 255)',
      padding: '0.4rem 0.75rem',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
      zIndex: 5,
    },
    itemTitle: {
      margin: '0',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: 'rgb(59, 32, 59)',
      textAlign: 'center',
      letterSpacing: '0.2px',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(59, 32, 59, 0.92)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
    },
    modalContent: {
      backgroundColor: 'rgb(255, 234, 255)',
      maxWidth: '90%',
      width: '1100px',
      maxHeight: '90vh',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: 'column',
    },
    modalHeader: {
      backgroundColor: 'rgb(59, 32, 59)',
      color: 'rgb(255, 234, 255)',
      padding: '1.25rem 1.75rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    modalTitle: {
      margin: '0',
      fontSize: '1.25rem',
      fontWeight: '600',
      color: "white",
      letterSpacing: '0.3px',
    },
    modalBody: {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(245, 224, 245)',
      height: 'auto',
      overflow: 'auto',
      maxHeight: 'calc(90vh - 80px)',
    },
    modalImage: {
      maxWidth: '100%',
      maxHeight: '70vh',
      objectFit: 'contain',
      borderRadius: '8px',
    },
    modalVideo: {
      maxWidth: '100%',
      maxHeight: '70vh',
      objectFit: 'contain',
      borderRadius: '8px',
    },
    closeButton: {
      backgroundColor: 'transparent',
      color: 'rgb(255, 234, 255)',
      border: 'none',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      fontSize: '1.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    closeButtonHover: {
      backgroundColor: 'rgba(255, 234, 255, 0.15)',
    },
    count: {
      fontSize: '0.875rem',
      color: 'rgba(59, 32, 59, 0.7)',
      fontWeight: '500',
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '300px',
      fontSize: '1.2rem',
      color: 'rgb(59, 32, 59)',
    },
    errorContainer: {
      padding: '2rem',
      textAlign: 'center',
      color: '#d32f2f',
      fontSize: '1.1rem',
    }
  };

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  const [closeButtonHovered, setCloseButtonHovered] = useState(false);

  return (
    <div style={styles.container}>
      <div className="container-fluid hero-header" style={{ background: "rgb(59,32,59)", marginBottom: "40px" }}>
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-white mb-4 animated slideInRight">Gallery</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Gallery</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-fluid" src={svg} alt="" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </div>
      
      <main style={styles.mainContent}>
        <div style={styles.filterBar}>
          <div style={styles.filterGroup}>
            <button 
              style={{
                ...styles.filterButton, 
                ...(filter === 'all' ? styles.activeFilter : {})
              }}
              onClick={() => setFilter('all')}
            >
              All Media
            </button>
            <button 
              style={{
                ...styles.filterButton, 
                ...(filter === 'image' ? styles.activeFilter : {})
              }}
              onClick={() => setFilter('image')}
            >
              Images
            </button>
            <button 
              style={{
                ...styles.filterButton, 
                ...(filter === 'video' ? styles.activeFilter : {})
              }}
              onClick={() => setFilter('video')}
            >
              Videos
            </button>
          </div>
          {!loading && !error && (
            <div style={styles.count}>
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
        
        {loading ? (
          <div style={styles.loadingContainer}>
            Loading gallery items...
          </div>
        ) : error ? (
          <div style={styles.errorContainer}>
            {error}
          </div>
        ) : (
          <div style={styles.gallery}>
            {filteredItems.map(item => (
              <div
                key={item.id}
                style={{
                  ...styles.galleryItem,
                  ...(hoveredItem === item.id ? styles.galleryItemHover : {})
                }}
                onClick={() => setSelectedItem(item)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div style={styles.mediaContainer}>
                  {item.type === 'image' ? (
                    <img 
                      src={item.url}
                      alt={item.title}
                      style={{
                        ...styles.image,
                        ...(hoveredItem === item.id ? styles.mediaHover : {})
                      }}
                    />
                  ) : item.type === 'video' ? (
                    <>
                      <video 
                        src={item.url}
                        style={{
                          ...styles.video,
                          ...(hoveredItem === item.id ? styles.mediaHover : {})
                        }}
                        muted
                        loop
                        playsInline
                        onClick={e => e.stopPropagation()}
                      />
                      <div style={styles.videoIndicator}>
                        <span>▶</span> Video
                      </div>
                    </>
                  ) : (
                    <div>Unsupported media type</div>
                  )}
                </div>
                <h3 style={styles.itemTitle}>{item.title}</h3>
              </div>
            ))}
          </div>
        )}
      </main>

      {selectedItem && (
        <div style={styles.modal} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>{selectedItem.title}</h2>
              <button 
                style={{
                  ...styles.closeButton,
                  ...(closeButtonHovered ? styles.closeButtonHover : {})
                }}
                onClick={() => setSelectedItem(null)}
                onMouseEnter={() => setCloseButtonHovered(true)}
                onMouseLeave={() => setCloseButtonHovered(false)}
              >
                ×
              </button>
            </div>
            <div style={styles.modalBody}>
              {selectedItem.type === 'image' ? (
                <img 
                  src={selectedItem.originalUrl || selectedItem.url} 
                  alt={selectedItem.title} 
                  style={styles.modalImage} 
                />
              ) : selectedItem.type === 'video' ? (
                <video 
                  src={selectedItem.url}
                  controls
                  style={styles.modalVideo}
                />
              ) : (
                <div>Unsupported media type</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;