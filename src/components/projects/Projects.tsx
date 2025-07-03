import React from 'react';
import projectsData from './projectsData'
import ProjectImageCarousel from './ProjectImageCarousel';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = projectsData;

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              </div>
            </div>
            <ProjectImageCarousel images={project.images} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 