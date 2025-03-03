import React, { useState } from 'react';
import styles from './WorkPage.module.css';

const WorkPage = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  const projects = [
    {
      id: 1,
      title: "ALIA: Assistive LLM Ideation Agent",
      category: "Artificial Intelligence, Design creativity",
      description: "ALIA is a tool that proposes a structured ideation session involving inspirational stimuli and utilises generative AI in delivering this structure to designers in group-based ideation scenarios.",
      thumbnail: "https://indrea.vercel.app/static/media/playseat.b31c42aec85c9383613e.jpg", // Replace with actual image path
      year: "2024",
      authors: ["author1", "author2"] // Replace with actual author data
    },
    // Add more projects as needed
  ];

  return (
    <div className={styles.workPage}>
        <div className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1>Work</h1>
      </div>
    </div>
      <div className={styles.workHeader}>
        <div className={styles.navTabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'projects' ? styles.active : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            PROJECTS
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'publications' ? styles.active : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            PUBLICATIONS
          </button>
        </div>
        
        <div className={styles.sectionTitle}>
          <h1>{activeTab === 'projects' ? 'Projects' : 'Publications'}</h1>
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectMedia}>
              <img src={project.thumbnail} alt={project.title} />
              <div className={styles.projectOverlay}>
                <span>View Project →</span>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectCategory}>{project.category}</div>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectFooter}>
                <div className={styles.projectAuthors}>
                  {project.authors.map((author, index) => (
                    <span key={index} className={styles.authorAvatar}>
                      {/* Add author avatar images here */}
                    </span>
                  ))}
                </div>
                <div className={styles.projectYear}>{project.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage; 