import Home from './Home';
import About from './About';
import Robots from './Robots';
import { Navigate, useNavigate } from 'react-router-dom';
import './Sponsors.css';


import apple from './img/sponsorsUGH/apple.png';
import ava from './img/sponsorsUGH/ava.png';
import circuitLaunch from './img/sponsorsUGH/circuitLaunch.png';
import cnc from './img/sponsorsUGH/cnc.png';
import codeforfun from './img/sponsorsUGH/codeforfun.png';
import foxglove from './img/sponsorsUGH/foxglove.png';
import genehaas from './img/sponsorsUGH/geneHaas.png';
import gobilda from './img/sponsorsUGH/gobilda.png';
import svs from './img/sponsorsUGH/svs.png';
import scs from './img/sponsorsUGH/scs.png';

function Sponsors (){
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
    const goInsta=()=>{
        window.location.href = 'https://www.instagram.com/roboforce_ftc/';
    }
    const goFacebook=()=>{
        window.location.href = 'https://www.facebook.com/RoboForce.FTC/';
    }
    const goYT=()=>{
        window.location.href = 'https://www.youtube.com/@ftcroboforce13356';
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
                <p className="topBarElement sponsors">Sponsorship/Sponsors</p>
            </div>
        </div>
        <div className='content'>
            <p className='header2 lightBlue'>Thank you to our sponsors!</p>
            <div className="sponsors section">
                
                <img className="apple sponsor"src={apple}></img>
                <img className="apple sponsor"src={ava}></img>
                <img className="apple sponsor"src={circuitLaunch}></img>
                <img className="apple sponsor"src={cnc}></img>
                <img className="apple sponsor"src={codeforfun}></img>
                <img className="apple sponsor"src={foxglove}></img>
                <img className="apple sponsor"src={genehaas}></img>
                <img className="apple sponsor"src={gobilda}></img>
                <img className="apple sponsor"src={svs}></img>
                <img className="apple sponsor"src={scs}></img>
            </div>

            <p className='header2 lightBlue'>Contact us!</p>
            <div className="contact">
                <div className="leftContact">
                    <p>For any inquiries, questions or commendations, please tell us!</p>
                    <p>For any outreach/partnership inquiries, please contact us at <span className="lightBlue">outreach.ftc13356@gmail.com.</span></p>
                </div>
                <div className ='rightContact'>
                    <p>You can also find us at the following:</p>
                    <p>Instagram: <span className="lightBlue cursor" onClick={goInsta}>@roboforce_ftc</span></p>
                    <p>Facebook Page: <span className="lightBlue cursor" onClick={goFacebook}>@RoboForce.FTC</span></p>
                    <p>Youtube: <span className="lightBlue cursor" onClick={goYT}>FTC RoboForce </span></p>
                    <p>Email: <span className="lightBlue" >ftc13356@gmail.com</span></p>

                </div>
            </div>
        </div>
        </>
    );
}

export default Sponsors;