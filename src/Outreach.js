import Home from './Home';
import About from './About';
import Robots from './Robots';
import Sponsors from './Sponsors';

function Outreach (){
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

export default Outreach;