import './Home.css';
import teamPhoto from './img/team.jpg';
import Sponsors from './Sponsors';
import { Navigate, useNavigate } from 'react-router-dom';


function Home () {
    let navigate=useNavigate();
    const goSponsors=()=>{
        navigate('/sponsors');
    }
    const goAbout=()=>{
        navigate('/about');
    }
    const goBlog=()=>{
        navigate('/blog');
    }
    const goRobots=()=>{
        navigate('/robots');
    }
    const goHome=()=>{
        navigate('/home');
    }
    return(
        <>
        <div className="topBar">
            <div className="goHome">
                <p className='heading1 blue topBarElement' onClick={goHome}>RoboForce</p>
            </div>
            <div className="topBarOther">
                <p className="topBarElement about" onClick={goAbout}>About</p>
                <p className="topBarElement robots" onClick={goRobots}>Robots</p>
                <p className="blog topBarElement" onClick={goBlog}>Blog</p>
                <p className="topBarElement sponsors" onClick={goSponsors}>Sponsorship/Sponsors</p>
            </div>
        </div>
            <div className="content">
                <div className="top section">
                    <div className="yap">
                        <div className="topYap">
                        <p className="header1">FTC 13356 <span className="blue">RoboForce</span></p>
                        <p className="header3">Taking innovation to the <span className="blue">NEXT LEVEL</span></p>
                    </div>
                    </div>
                </div>
                <div className="about section">
                    <p className="header2 lightBlue">Who We Are</p>
                    <div className="aboutContent">
                        <div className="left">
                            <div className="aboutYap">
                                <p>FTC Team 13356 RoboForce is an experienced youth robotics team in Fremont, California, competing in the FIRST Tech Challenge.  Our mission is to Inform, Inspire, and Innovate.  We strive to promote STEM education to K-12 students across the nation and around the world.</p>
                                <p>
                                Every year, we build and program a custom robot to tackle unique challenges in the FIRST TECH CHALLENGE game.  Our team applies scientific thinking, as well as knowledge in physics, math, and engineering skills to take leaps in original projects. Our drive to continually improve and creatively solve problems give us the opportunity to always <span className="blue">Take Innovation to the Next Level</span>. 
                                </p>
                                <p>Check our our team members' bios <span className="lightBlue cursor" onClick={goAbout}>here!</span></p>
                            </div>
                        </div>
                        <div className="right">
                            <img className="teamPhoto"src={teamPhoto} alt="teamPhoto"></img>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home;