import { useEffect, useState } from 'react';

import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faMap, faBookmark, faCheck, faTrophy, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedinIn, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    useEffect(() => {
        document.title = 'Portfolio';
    }, []);

    const handleToggleNavbar = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) setToggleNavbar(!toggleNavbar);
    };

    return (
        <div
            className="app"
            data-bs-spy="scroll"
        >
            {/* nav bar */}

            <nav
                className="navbar navbar-expand-lg fixed-top"
                id="sideNav"
            >
                <button
                    className={toggleNavbar ? 'navbar-toggler' : 'navbar-toggler collapsed'}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-resume"
                    aria-controls="navbar-resume"
                    aria-expanded={toggleNavbar}
                    aria-label="Toggle navigation"
                    onClick={handleToggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand">
                    <span className="d-block d-lg-none brand-name">Nguyễn Trung Quân</span>
                    <img
                        className="d-none d-lg-block avatar"
                        src={require('./Images/avatar.jpg')}
                        alt="avatar"
                    />
                </div>
                <div
                    className={toggleNavbar ? 'navbar-collapse collapse show' : 'navbar-collapse collapse'}
                    id="navbar-resume"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                href="#about"
                                className="nav-link"
                                onClick={handleToggleNavbar}
                            >
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#education"
                                onClick={handleToggleNavbar}
                            >
                                EDUCATION
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#skills"
                                onClick={handleToggleNavbar}
                            >
                                SKILL
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#project"
                                onClick={handleToggleNavbar}
                            >
                                PROJECT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#interest"
                                onClick={handleToggleNavbar}
                            >
                                INTEREST
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#theend"
                                onClick={handleToggleNavbar}
                            >
                                THE END
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* about section */}
            <div
                className="section"
                id="about"
            >
                <div className="section-item">
                    <h1 className="desc-name">
                        Nguyễn Trung <span className="desc-first-name">Quân</span>
                    </h1>
                    <div className="about-title">
                        <div className="description">
                            <FontAwesomeIcon
                                icon={faAddressCard}
                                className="card-icon"
                            />
                            <h3 className="desc-title">FULL STACK WEB DEVELOPER</h3>
                        </div>
                        <div className="description">
                            <FontAwesomeIcon
                                icon={faMap}
                                className="card-icon"
                            />
                            <h3 className="desc-title">275 AU CO STR, TAY HO DISTRICT, HANOI CITY </h3>
                        </div>
                        <div className="description">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="card-icon"
                            />
                            <a
                                href="mailto:nguyentrungquan.2609@gmail.com"
                                className="link-item"
                            >
                                NGUYENTRUNGQUAN.2609@GMAIL.COM
                            </a>
                        </div>
                    </div>
                    <div className="content">
                        <div className="welcome text">Welcome to visit my CV online!</div>
                    </div>
                    <div className="about-skill">
                        <ul>
                            <li className="about-skill-item">
                                <div className="text">
                                    <FontAwesomeIcon
                                        icon={faNodeJs}
                                        className="skill-icon text"
                                    />
                                    <strong> Back-End:</strong> I am experienced in
                                    <strong> Javascript, ExpressJs, MongoDB, MySQL</strong> on
                                    <strong> Node.JS</strong> platform. Experience in using
                                    <strong> Microsoft Azure VM</strong> like an infrastructure service.
                                </div>
                            </li>
                            <li className="about-skill-item">
                                <div className="text">
                                    <FontAwesomeIcon
                                        icon={faReact}
                                        className="skill-icon text"
                                    />
                                    <strong> Front-End:</strong> I am experienced in{' '}
                                    <strong>Javascript on ReactJS Framework, Axios, Bootstrap...etc</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <a
                            href="https://www.linkedin.com/in/qu%C3%A2n-nguy%C3%AA%CC%83n-trung-79a973235/"
                            className="social-item"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                className="social-item-icon"
                                icon={faLinkedinIn}
                            />
                        </a>
                        <a
                            href="https://github.com/trungquan2609"
                            className="social-item"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="social-item-icon"
                                icon={faGithub}
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/trungquan2609/"
                            className="social-item"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="social-item-icon"
                                icon={faFacebook}
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* education section */}
            <div
                className="section"
                id="education"
            >
                <div className="section-item">
                    <h2 className="title">EDUCATION</h2>
                    <div className="content-education">
                        <div className="left-column-education">
                            <a
                                href="https://humg.edu.vn"
                                className="school-link"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                HANOI UNIVERSITY OF MINING AND GEOLOGY
                            </a>
                            <h2 className="desc-education">
                                I GRADUATED WITH A ENGINEERING DEGREE OF SOFTWARE ENGINEER
                            </h2>
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    className="content-icon"
                                />{' '}
                                When I was a student, I studied a lot about career development in information technology
                                and then I decided to choose web programming because I particularly like customize and
                                draw on my websites.
                            </p>
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    className="content-icon"
                                />{' '}
                                I really enjoy my school, where I make new friends and we study together.
                            </p>
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    className="content-icon"
                                />{' '}
                                After 6 years of college, I succeeded with graduate thesis on programming:{' '}
                                <strong>NodeJS and MongoDB, building an ecommerce.</strong>
                            </p>
                        </div>
                        <div className="right-column-education">
                            <p className="time-in-school">Agust 2016 - June 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* skill section */}
            <div
                className="section"
                id="skills"
            >
                <div className="section-item">
                    <h2 className="title">SKILLS</h2>
                    <div className="languages">
                        <h2 className="skill-title">PROGRAMMING LANGUAGES & TOOLS</h2>
                        <div className="languages-list">
                            <div className="languages-item">
                                <i className="devicon-nodejs-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-express-original colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-javascript-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-mongodb-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-mysql-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-amazonwebservices-original colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-azure-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-html5-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-css3-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-bootstrap-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-react-original colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-babel-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-handlebars-plain colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-github-original colored"></i>
                            </div>
                            <div className="languages-item">
                                <i className="devicon-npm-original-wordmark colored"></i>
                            </div>
                        </div>
                    </div>
                    <div className="workflow">
                        <h2 className="skill-title">WORKFLOW</h2>

                        <div className="workflow-content">
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="check-icon"
                                />{' '}
                                Git, Github for Teamwork
                            </p>
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="check-icon"
                                />{' '}
                                Amazon Web Services
                            </p>
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="check-icon"
                                />{' '}
                                Azure Microsoft Services
                            </p>
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="check-icon"
                                />{' '}
                                Responsive Web Design
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* project section */}
            <div
                className="section"
                id="project"
            >
                <div className="section-item">
                    <h3 className="title">PROJECT</h3>
                    <div className="project-list">
                        <div className="project-item">
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faTrophy}
                                    className="content-icon"
                                />{' '}
                                Ecommerce about shoe -{' '}
                                <a
                                    className="link-project"
                                    href="https://shoeshop.darkmoon.click"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    N&Q SHOP
                                </a>
                            </p>
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faTrophy}
                                    className="content-icon"
                                />{' '}
                                Todo App -{' '}
                                <Link
                                    className="link-project"
                                    to="/todosapp"
                                >
                                    Todo App
                                </Link>
                            </p>
                            <p className="content-item">
                                <FontAwesomeIcon
                                    icon={faTrophy}
                                    className="content-icon"
                                />{' '}
                                Calculator -{' '}
                                <Link
                                    className="link-project"
                                    to="/calculator"
                                >
                                    Calculator
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* interest section */}
            <div
                className="section"
                id="interest"
            >
                <div className="section-item">
                    <h3 className="title">INTERESTS</h3>
                    <div className="interests-content">
                        <div className="content-item">
                            Apart from being a developer, I enjoy most of my spare time to listen beautiful relaxing
                            music, read novel books.
                        </div>
                        <div className="content-item">
                            Spent times in video games like DotA 2, CS:GO, and a lot of offline games
                        </div>
                        <div className="content-item">
                            I used to play basketball but I was very busy recently so I didn’t play anymore.
                        </div>
                        <div className="content-item">
                            I really like to play billiards, espectially with my freinds. When I play billiards I feel
                            very comfortable and relax.
                        </div>
                        <div className="content-item">
                            Beside hang out with my friends is also my favorite thing, I don’t have too much friends but
                            they important to me
                        </div>
                    </div>
                </div>
            </div>

            {/* the end section */}
            <div
                className="section"
                id="theend"
            >
                <div className="section-item">
                    <h3 className="title">THE END</h3>
                    <p className="content-item">
                        Finally, I would like to say <strong>"Thank You"</strong> for spent time to look at my CV
                        profile.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
