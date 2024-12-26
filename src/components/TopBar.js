import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../Home.css';

function TopBar() {
    const navigate = useNavigate();

    const goHome = () => navigate('/home');
    const goAbout = () => navigate('/about');
    const goRobots = () => navigate('/robots');
    const goBlog = () => navigate('/blog');
    const goSponsors = () => navigate('/sponsors');
    const goAwards =() => navigate('/awards');

    return (
        <div className="topBar">
            <div className="goHome">
                <p className="heading1 bold blue topBarElement" onClick={goHome}>
                    RoboForce
                </p>
            </div>
            <div className="topBarOther">
                <p className="topBarElement about" onClick={goAbout}>
                    About
                </p>
                <p className="topBarElement robots" onClick={goRobots}>
                    Robots
                </p>
                <p className="blog topBarElement" onClick={goBlog}>
                    Blog
                </p>
                <p className="awards topBarElement" onClick={goAwards}>Awards</p>
                <p className="topBarElement sponsors" onClick={goSponsors}>
                    Sponsorship/Sponsors
                </p>
            </div>
        </div>
    );
}

export default TopBar;
