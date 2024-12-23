import Home from './Home';
import About from './About';
import Sponsors from './Sponsors';
import { Navigate, useNavigate } from 'react-router-dom';

function Robots (){
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
        <div className="topBar">
            <div className="goHome">
                <p className='heading1 blue topBarElement' onClick={goHome}>RoboForce</p>
            </div>
            <div className="topBarOther">
                <p className="topBarElement about" onClick={goAbout}>About</p>
                <p className="topBarElement robots">Robots</p>
                <p className="blog topBarElement" onClick={goBlog}>Blog</p>
                <p className="topBarElement sponsors" onClick={goSponsors}>Sponsorship/Sponsors</p>
            </div>
        </div>
    );
}

export default Robots;