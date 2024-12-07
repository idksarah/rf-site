import Home from './Home';
import Robots from './Robots';
import Sponsors from './Sponsors';
import { Navigate, useNavigate } from 'react-router-dom';

function About (){
    let navigate=useNavigate();
    const goSponsors=()=>{
        navigate('/sponsors');
    }
    const goAbout=()=>{
        navigate('/about');
    }
    const goOutreach=()=>{
        navigate('/outreach');
    }
    const goRobots=()=>{
        navigate('/robots');
    }
    const goHome=()=>{
        navigate('/home');
    }
    return(
        <div className="topBar">
            <div className="goHome">
                <p className='heading1 blue topBarElement' onClick={goHome}>RoboForce</p>
            </div>
            <div className="topBarOther">
                <p className="topBarElement about">About</p>
                <p className="topBarElement robots" onClick={goRobots}>Robots</p>
                <p className="outreach topBarElement" onClick={goOutreach}>Outreach</p>
                <p className="topBarElement sponsors" onClick={goSponsors}>Sponsorship/Sponsors</p>
            </div>
        </div>
    );
}

export default About;