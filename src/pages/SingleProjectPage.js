import {useParams} from 'react-router-dom';
import {projectsList} from "../helpers/ProjectList";
import ButtonGithub from "../components/buttonGithub/ButtonGithub";



const SingleProjectPage = () => {

    const {id} = useParams();
    const project = projectsList[id]

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.img} alt={project.alt} className="project-details__cover"/>
                        <div className="project-details__desc">
                            <p>{project.skills}</p>
                        </div>

                    {/*///__________________*/}
                    {project.gitHubLink && (
                        <ButtonGithub link={project.gitHubLink} />
                    )}
                    {/*///__________________*/}

                </div>
            </div>
        </main>
    )
}
export default SingleProjectPage;