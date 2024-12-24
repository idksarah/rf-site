import './Home.css';
import teamPhoto from './img/team.jpg';
import background from './img/bg.PNG';
import roboforce from './img/roboforce.PNG';
import Sponsors from './Sponsors';
import { Navigate, useNavigate, useLocation  } from 'react-router-dom';
import {CardHorizontal} from './Blog';
import qual from './img/qual.jpg';

//modulafirze this top bar
function Home () {
    let navigate=useNavigate();
    const location = useLocation();
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
        <div id="root" className={location.pathname === "/home" ? "homePage" : ""}>
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
                        <img className="roboforce"src={roboforce} style={{height: '25em'}}></img>
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
                    <div className="news">
                        <p className="header2">News</p>
                        <CardHorizontal img={qual} title="cook" content="cooked (gonna put a diff img here don't come at me)"></CardHorizontal>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;