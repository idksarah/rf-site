import React from 'react';
import './Home.css';
import TopBar from './components/TopBar';
import { CardHorizontal } from './Blog';

import teamPhoto from './img/team.jpg';
import roboforce from './img/roboforce.PNG';
import qual from './img/qual1b.jpg';

import { useLocation , useNavigate} from 'react-router-dom';

function Home() {
    const location = useLocation();
    let navigate = useNavigate();

    return (
        <div id="root" className={location.pathname === '/home' ? 'homePage' : ''}>
            <TopBar />
            <div className="content">
                <div className="top section">
                    <div className="yap">
                        <div className="topYap">
                            <img
                                className="roboforce"
                                src={roboforce}
                                style={{ maxHeight: '25em' }}
                                alt="RoboForce Logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="about border section hover">
                    <p className="header2 lightBlue">Who We Are</p>
                    <div className="aboutContent">
                        <div className="left">
                            <div className="aboutYap">
                                <p>
                                    FTC Team 13356 RoboForce is an experienced youth robotics team in Fremont,
                                    California, competing in the FIRST Tech Challenge. Our mission is to Inform,
                                    Inspire, and Innovate. We strive to promote STEM education to K-12 students across
                                    the nation and around the world.
                                </p>
                                <p>
                                    Every year, we build and program a custom robot to tackle unique challenges in the
                                    FIRST TECH CHALLENGE game. Our team applies scientific thinking, as well as
                                    knowledge in physics, math, and engineering skills to take leaps in original
                                    projects. Our drive to continually improve and creatively solve problems gives us
                                    the opportunity to always{' '}
                                    <span className="blue">Take Innovation to the Next Level</span>.
                                </p>
                                <p>
                                    Check our our team members' bios{' '}
                                    <span className="lightBlue cursor" onClick={() => navigate('/about')}>
                                        here!
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <img className="teamPhoto" src={teamPhoto} alt="Team Photo" />
                        </div>
                    </div>
                </div>
                <div className="brag">
                    <p className="header3 bragElement lightBlue">est. 2019</p>
                    <p className="header3 bragElement lightBlue">45K+ people reached</p>
                    <p className="header3 bragElement lightBlue">18+ awards</p>
                </div>
                    <div className="news">
                        <p className="header2">News</p>
                        <CardHorizontal img={qual} title="Cooked" content="i eat dogs" />
                    </div>
            </div>
            <div className="bottomBitch">
            </div>
        </div>
    );
}

export default Home;
