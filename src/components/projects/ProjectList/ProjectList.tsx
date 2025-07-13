import ProjectCard from "../ProjectCard/ProjectCard"
import projectsData from '../projectsData'
import type { Project } from "../projectsData"
import { Resume } from '../../resume/Resume'
import "./ProjectList.css"

export default function ProjectList () {
    const projects: Project[] = projectsData

    return (
        <div className="projects-section">
            <div className="project-list-heading">
                <Resume/>
            </div>
            <div className="projects-list">
                 {projects.map((project) => (
                    <ProjectCard project={project} key={project.title}/>
                 ))}
            </div>
        </div>
    )
}