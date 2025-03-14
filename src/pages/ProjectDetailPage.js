import React from 'react';
import styles from './ProjectDetailPage.module.css';

const ProjectDetailPage = ({ project }) => {
  // This would normally come from your router/props/API
  const projectData = {
    title: "ALIA: Assistive LLM Ideation Agent",
    category: "Artificial Intelligence, Design creativity",
    description: "ALIA is a tool that proposes a structured ideation session involving inspirational stimuli and utilises generative AI in delivering this structure to designers in group-based ideation scenarios.",
    fullDescription: `ALIA represents a breakthrough in AI-assisted design thinking, combining 
    the power of large language models with structured ideation methodologies. This tool 
    facilitates creative workshops and brainstorming sessions by providing real-time 
    inspirational prompts and organizing ideas in meaningful ways.`,
    thumbnail: "https://res.cloudinary.com/dau49g7jf/image/upload/v1725739745/medium_Screenshot_2024_08_29_145656_1_8b44d8b275.jpg",
    year: "2024",
    authors: ["Author One", "Author Two"],
    youtubeId: "BuBORzUpjBg",
    technologies: ["React", "OpenAI", "Node.js", "MongoDB"],
    links: [
      { title: "GitHub Repository", url: "https://github.com/" },
      { title: "Live Demo", url: "https://demo..." }
    ],
    // Added optional fields
    investigator: "Lead Researcher",
    sanctionDate: "2025-03-19",
    duration: "10 days",
    costOfProject: "11 lakhs"
  };

  return (
    <div className={styles.projectDetail} >
      <div className={styles.hero} >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <a href="/work">Projects</a> / {projectData.title}
          </div>
          <h1>{projectData.title}</h1>
          <p className={styles.category}>{projectData.category}</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          {projectData.youtubeId && (
            <div className={styles.videoContainer}>
              <iframe
                src={`https://www.youtube.com/embed/${projectData.youtubeId}`}
                title="Project Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className={styles.description}>
            <h2>About the Project</h2>
            <p style={{textAlign:"justify"}}>{projectData.fullDescription} </p>
          </div>

        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3>Project Details</h3>
            <div className={styles.detailItem}>
              <span className={styles.label}>Year</span>
              <span>{projectData.year}</span>
            </div>
            
            {projectData.investigator && (
              <div className={styles.detailItem}>
                <span className={styles.label}>Investigator</span>
                <span>{projectData.investigator}</span>
              </div>
            )}
            
            {projectData.sanctionDate && (
              <div className={styles.detailItem}>
                <span className={styles.label}>Sanction Date</span>
                <span>{projectData.sanctionDate}</span>
              </div>
            )}
            
            {projectData.duration && (
              <div className={styles.detailItem}>
                <span className={styles.label}>Duration</span>
                <span>{projectData.duration}</span>
              </div>
            )}
            
            {projectData.costOfProject && (
              <div className={styles.detailItem}>
                <span className={styles.label}>Project Cost</span>
                <span>{projectData.costOfProject}</span>
              </div>
            )}
            
            <div className={styles.detailItem}>
              <span className={styles.label}>Team</span>
              <div className={styles.authors}>
                {projectData.authors.map((author, index) => (
                  <span key={index} className={styles.author}>{author}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3>Technologies</h3>
            <div className={styles.technologies}>
              {projectData.technologies.map((tech, index) => (
                <span key={index} className={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3>Links</h3>
            <div className={styles.links}>
              {projectData.links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.title} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;