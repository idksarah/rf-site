import Home from './Home';
import About from './About';
import Robots from './Robots';
import { Navigate, useNavigate } from 'react-router-dom';
import './Sponsors.css';

function Sponsors (){
    let navigate=useNavigate();
    return(
        <>
        <div className="topBar">
            <div className="goHome">
                <p className='heading1 blue topBarElement'>RoboForce</p>
            </div>
            <div className="topBarOther">
                <p className="topBarElement about">About</p>
                <p className="topBarElement robots">Robots</p>
                <p className="outreach topBarElement">Outreach</p>
                <p className="topBarElement sponsors">Sponsorship/Sponsors</p>
            </div>
        </div>
        <div className='content'>
            <p className='header2 lightBlue'>Thank you to our sponsors!</p>
        </div>
        </>
    );
}

export default Sponsors;