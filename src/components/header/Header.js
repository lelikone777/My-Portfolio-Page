import './header.css';
import './header-bg.png';
function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Aleksei</em></strong> <br/>
                    frontend developer</h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>

                <a href="https://drive.google.com/file/d/1_YkWUNoR0tnW7dEjp2NsOwfX0gAKEnCD/view?usp=drive_link" download className="btn">Download CV</a>
            </div>
        </header>
    )
}
export default Header;