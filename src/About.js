import './About.css';
import Home from './Home';
import Robots from './Robots';
import Sponsors from './Sponsors';
import aiden from './img/ppl/aiden.jpg';
import eric from './img/ppl/eric.jpg';
import hyun from './img/ppl/hyun.jpg';
import sarah from './img/ppl/sarah.jpg';
import sophia from './img/ppl/sophia.jpg';
import warren from './img/ppl/warren.jpg';
import { Navigate, useNavigate } from 'react-router-dom';

function CardVertical ({title, content, img}) {
    return(
        <div className="bioCard">
            <p className="cardTitle header4 lightBlue">{title}</p>
            <img className="bioImg"src={img}></img>
            <p>{content}</p>
        </div>
    )
}

function About (){
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
                    <p className="topBarElement about">About</p>
                    <p className="topBarElement robots" onClick={goRobots}>Robots</p>
                    <p className="blog topBarElement" onClick={goBlog}>Blog</p>
                    <p className="topBarElement sponsors" onClick={goSponsors}>Sponsorship/Sponsors</p>
                </div>
            </div>
            
            <div className="content">
                <p className="header2">Team Bios</p>
                <div className="row1">
                    <CardVertical title="Team Captain, Mechanical Lead" content=" Helllo! I'm Aiden. I am a senior at Mission San Jose HS. I've been participating in FTC for 6 years. Through FIRST, I have gained invaluable leadership and mechanical design experience. As Mechanical Lead, I love the challenge of designing innovative robots that each season brings. I am passionate about sharing my knowledge through mentorship and expanding access to STEM education in underserved communities.

                    Outside of robotics I enjoy playing piano, photography,  Formula 1 & traveling." img={aiden}></CardVertical>
                    <CardVertical title="Software Lead" content="Hello! I'm Warren. I am a senior at Mission San Jose HS. I've been participating in FTC for 6 years. Through FIRST, I have gained invaluable software design experience and learned lots of cool control theory and computer vision techniques. I love taking on cool and challenging projects.  Outside of robotics, I enjoy playing video games, tennis, and eating." img={warren}></CardVertical>
                    <CardVertical title="Software" content="  Hello! I'm Hyun. I am a senior at Mission San Jose High School, and have been on the team for 3 years. FIRST has helped me gain new outlooks on my passions for engineering as well as facilitating the development of my skills in both technical and nontechnical facets. On the software team, I enjoy programming innovative solutions and features that bring our performance to new heights. I love seeing abstract concepts come to life in our robots and I'm glad to have expanded the horizons of my programming knowledge. Outside of robotics, I enjoy building keyboards, volleyball, and brawl stars." img={hyun}></CardVertical>
                </div>
                <div className="row2">
                    <CardVertical title="Hardware" content="Hello! I’m Eric. I am a senior at MSJHS who's been on the team for 4 years. FTC has really helped me develop my design skills, as well as important non-technical and outreach skills. I enjoy coming up with and designing creative solutions for each year’s challenges, and I love talking to the younger kids in outreach initiatives even more. Outside of robotics, I like working on personal projects and music." img={eric}></CardVertical>
                    <CardVertical title="Hardware" content="Hello! I’m Sophia and I’m a senior at Mission San Jose High School. This is my third year on this team. FTC has helped me develop my building and design skills, and I have been able to gain experience with both nontechnical and technical work. I enjoy being able to learn new things with every season and interacting with people at outreach events. Outside of robotics, I like electric bass, playing csgo, and reading." img={sophia}></CardVertical>
                    <CardVertical title="Software" content="Hello! I'm Sarah. I am a sophomore at MSJH, and this is my first year on the team. Through FIRST, I'm excited to explore different aspects of STEM, build on my programming skills, as well as interact with children and adults for outreach events. Out side of robotics, I like building websites, running, and baking." img={sarah}></CardVertical>
                </div>
            </div>
        </>
    );
}

export default About;