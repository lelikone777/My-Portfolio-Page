import Header from "../components/header/Header";

const HomePage = () => {
    return (
        <>
            <Header/>

            <main className="section" >
                <div className="container">
                    <h1 className="title-1">My stack:</h1>
                    {/*<h1 className="title-1">Skills</h1>*/}
                    <ul className="content-list">
                        <li className="content-list__item">
                            {/*<h2 className="title-2">Frontend</h2>*/}
                            <p>JavaScript, React, NextJS13, Tailwind CSS</p>
                        </li>
                        <li className="content-list__item">
                            {/*<h2 className="title-2">Backend</h2>*/}
                            {/*<p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>*/}
                        </li>
                    </ul>
                </div>
            </main>

        </>
    );
};

export default HomePage;
