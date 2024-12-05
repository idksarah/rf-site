import Home from './Home';
import About from './About';
import Sponsors from './Sponsors';
import { Navigate, useNavigate } from 'react-router-dom';

function Robots (){
    let navigate=useNavigate();
    const goSponsors=()=>{
        navigate('/sponsors');
    }
    return(
        <div className="topBar">
            <div className="goHome">
                <p className='heading1 blue topBarElement'>RoboForce</p>
            </div>
            <div className="topBarOther">
                <p className="topBarElement about">About</p>
                <p className="topBarElement robots">Robots</p>
                <p className="outreach topBarElement">Outreach</p>
                <p className="topBarElement sponsors" onClick={Sponsors}>Sponsorship/Sponsors</p>
            </div>
        </div>
    );
}

export default Robots;