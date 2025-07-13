import { Carousel } from "../Carousel/Carousel"
import type { Project } from "../projectsData"
import "./ProjectCard.css"

export default function ProjectCard ({ project }: {project: Project}) {
    return(
        <div>
            <div className="project-card">
                <div className="project-info">
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
                <Carousel project={ project }/>
            </div>
        </div>
    )
}
