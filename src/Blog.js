import './Blog.css';
import Home from './Home';
import Robots from './Robots';
import Sponsors from './Sponsors';
import award from './img/award.jpg';
import sasa from './img/sasa.jpg';
import calc from './img/calc.jpg';
import mti from './img/mti.jpg';
import tinkercad1 from './img/tinkercad1.jpg';
import qual from './img/qual.jpg';
import demo1 from './img/demo1.jpg';
import demo2 from './img/demo2.jpg';
import { Navigate, useNavigate } from 'react-router-dom';

function CardVertical ({title, content, img}) {
    return(
        <div className="card cardVertical">
            <img className="cardVerticalImg"src={img}></img>
            <p className="cardTitle header4 lightBlue">{title}</p>
            <p>{content}</p>
        </div>
    )
}

function CardHorizontal ({title, content, img}) {
    return(
        <div className="card cardHorizontal">
            <img className="cardHorizontalImg"src={img}></img>
            <div className="cardHorizontalText">
                <p className="cardTitle header4 lightBlue">{title}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}

function CardHorizontalVideo ({title, content, link, other}) {
    return(
        <div className="card">
            <p className="cardTitle header4 lightBlue">{title}</p>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}

function Blog(){
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
                <p className="topBarElement about" onClick={goAbout}>About</p>
                <p className="topBarElement robots" onClick={goRobots}>Robots</p>
                <p className="blog topBarElement" onClick={goBlog}>Blog</p>
                <p className="topBarElement sponsors" onClick={goSponsors}>Sponsorship/Sponsors</p>
            </div>
        </div>
        <div className="content">
            <p className="header2">Blog</p>
            <CardHorizontal title="Tinker CAD Workshop with CodeForFun" content="grah bodyaydadaaada" img={tinkercad1}></CardHorizontal>
            <CardHorizontal title="qual" content="ssssssssssssssssssss" img={qual}></CardHorizontal>
            <CardHorizontal title="Robot Demo at Robot Fair" content="idk what this is" img={demo2}></CardHorizontal>
            <CardHorizontal title="California Advocacy Leadership Conference" content="Roboforce will be attending the annual SASA (Student Association for Stem Advocacy) California Advocacy Leadership Conference (CALC) to improve their advocacy techniques and knowledge of legislative processes to ultimately work with California legislators to expand STEM education, working with other robotics teams and state leaders!" img={calc}></CardHorizontal>
            <CardHorizontal title="that robot demo at the airport yk" content="shameful" img={demo1}></CardHorizontal>
            <CardHorizontal title="Student Association for Stem Advocacy" content="In July 2023, Roboforce attended the annual SASA conference in Washington DC, meeting two senators and visiting congressman's office. We were excited to expand our network with our country's legislators and meet other robotics teams, all the while working to improve STEM education across the country." img={sasa}></CardHorizontal>
            <CardHorizontal title="Maryland Tech Invitational" content="MTI Rocks...So proud to be invited 2 years in a row, as well as the YOUNGEST team representing CA. In June 2023, our team again competed at this prestigious tournament hosted by John Hopkins Applied Physics Lab in Maryland. Ranked 15th against 40 of the most competitive teams in the world.
                
                Congratulation to the champions and thanks to APL for hosting this event!" img={mti}></CardHorizontal>
        </div>
        </>
    )
}

export default Blog;