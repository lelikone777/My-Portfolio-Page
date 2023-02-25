import Project from "../components/project/Project";
import {projectsList} from "../helpers/ProjectList";

const ProjectsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projectsList.map((project) => {
                        return <Project
                            key = {project.id}
                            title={project.title}
                            img={project.img}
                            alt={project.alt}
                            id={project.id}
                        />
                    })}

                </ul>
            </div>
        </main>
    )
}

export default ProjectsPage;