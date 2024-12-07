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
        <>
        <div className="topBar">
            <div className="goHome">
                <p className='heading1 blue topBarElement' onClick={goHome}>RoboForce</p>
            </div>
            <div className="topBarOther">
                <p className="topBarElement about" onClick={goAbout}>About</p>
                <p className="topBarElement robots" onClick={goRobots}>Robots</p>
                <p className="outreach topBarElement" onClick={goOutreach}>Outreach</p>
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
        </div>
        </>
    );
}

export default Sponsors;