import { Navigate, useNavigate } from 'react-router-dom';
import './Sponsors.css';
import TopBar from './components/TopBar';


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
    
    const goInsta=()=>{
        window.location.href = 'https://www.instagram.com/roboforce_ftc/';
    }
    const goFacebook=()=>{
        window.location.href = 'https://www.facebook.com/RoboForce.FTC/';
    }
    const goYT=()=>{
        window.location.href = 'https://www.youtube.com/@ftcroboforce13356';
    }
    const goSponsorship=()=>{
        window.location.href='https://drive.google.com/file/d/1uYMckEoPmcHDfy3ZPFrcIJ-loztUTQ2W/view';
    }

    
    const goApple=()=>{
        window.location.href = 'https://www.apple.com/';
    }
    const goAva=()=>{
        window.location.href = 'https://avaenergy.org/';
    }
    const goCL=()=>{
        window.location.href = 'https://circuitlaunch.com/';
    }
    const goCNC=()=>{
        window.location.href = 'https://cncmadness.com/';
    }
    const goC4F=()=>{
        window.location.href = 'https://www.codeforfun.com/';
    }
    const goFox=()=>{
        window.location.href = 'https://foxglove.dev/';
    }
    const goHaas=()=>{
        window.location.href = 'https://www.stewarthaasracing.com/gene-haas/';
    }
    const goGoBilda=()=>{
        window.location.href = 'https://www.gobilda.com/';
    }
    const goSVGS=()=>{
        window.location.href = 'https://siliconvalleysigns.com/';
    }
    const goSCS=()=>{
        window.location.href = 'https://sendcutsend.com/';
    }
    return(
        <>
        <TopBar/>
        <div className='content notHomeContent'>
            <p className='header2 lightBlue'>Thank you to our sponsors!</p>
            <div className="sponsors section">
                
                <img onClick={goApple} className="apple sponsor"src={apple}></img>
                <img onClick ={goAva}className="ava sponsor"src={ava}></img>
                <img onClick={goCNC}className="apple sponsor"src={circuitLaunch}></img>
                <img onClick={goCNC}className="apple sponsor"src={cnc}></img>
                <img onClick={goC4F}className="apple sponsor"src={codeforfun}></img>
                <img onClick={goFox}className="apple sponsor"src={foxglove}></img>
                <img onClick={goHaas} className="apple sponsor"src={genehaas}></img>
                <img onClick={goGoBilda}className="apple sponsor"src={gobilda}></img>
                <img onClick={goSVGS}className="apple sponsor"src={svs}></img>
                <img onClick={goSCS}className="apple sponsor"src={scs}></img>
            </div>

            <p className='header2 lightBlue'>Contact us!</p>
            <div className="contact">
                <div className="leftContact border">
                    <p>For any inquiries, questions or commendations, please tell us!</p>
                    <p>For any outreach/partnership inquiries, please contact us at <span className="lightBlue">outreach.ftc13356@gmail.com.</span></p>
                    <p>Check out our <span onClick={goSponsorship} className="cursor lightBlue">sponsorship brochure</span> for more details!</p>
                </div>
                <div className ='rightContact border'>
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