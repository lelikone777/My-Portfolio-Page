import './footer.css';
import github from "./gitHub.svg";
import linkedIn from "./linkedIn.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://github.com/lelikone777">
                                <img src={github} alt="github"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.linkedin.com/in/aleks-kalinin/">
                                <img src={linkedIn} alt="linkedIn"/>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Aleksei Kalinin</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;