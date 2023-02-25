import './buttonGithub.css';
import gitWhite from "./gitHub-black.svg";

const ButtonGithub = ({link}) => {
    return (
        <a href={link} target='_blanc' className="btn-outline">
            <img src={gitWhite} alt='github logo'/>
            GitHub repo
        </a>
    )
}
export default ButtonGithub;