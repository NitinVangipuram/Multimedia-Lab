import React, { useState } from 'react';
import styles from './WorkPage.module.css';
import { Link } from 'react-router-dom';

const WorkPage = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  const projects = [
    {
      id: 1,
      title: "ALIA: Assistive LLM Ideation Agent",
      category: "Artificial Intelligence, Design creativity",
      description: "ALIA is a tool that proposes a structured ideation session involving inspirational stimuli and utilises generative AI in delivering this structure to designers in group-based ideation scenarios.",
      thumbnail: "https://res.cloudinary.com/dau49g7jf/image/upload/v1725739745/medium_Screenshot_2024_08_29_145656_1_8b44d8b275.jpg", // Replace with actual image path
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
        <h1>Projects</h1>
      </div>
    </div>
     

      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectMedia}>
              <img src={project.thumbnail} alt={project.title} />
              <div className={styles.projectOverlay}>
                <Link to={`/projects/${project.id}`}>
                <span>View Project →</span>
                </Link>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectCategory}>{project.category}</div>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectFooter}>
                <div className={styles.projectAuthors}>
                  {project.authors.map((author, index) => (
                    <span key={index} >
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