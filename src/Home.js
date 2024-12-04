import './Home.css';
import award from './img/award.jpg';
import sasa from './img/sasa.jpg';
import mti from './img/mti.jpg';

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

function CardVertical ({title, content, img}) {
    return(
        <div className="cardImg">
            <img src={img}></img>
            <p className="cardTitle header4 lightBlue">{title}</p>
            <p>{content}</p>
        </div>
    )
}

function Home () {
    return(
        <div className="content">
            <div className="top section">
                <div className="left">
                    <div className="yap">
                        <div className="topYap">
                        <p className="header1">FTC 13356 <span className="blue">RoboForce</span></p>
                        </div>
                        <p className="header3">Taking innovation to the <span className="blue">NEXT LEVEL</span></p>
                    </div>
                </div>
                <div className="right">
                    <img className="award"src={award} alt="award"/>
                    <p className="brag">Congratulations Roboforce for being the Finalist Alliance Captain at Norcal Regional Championship!</p>
                </div>
            </div>
            <div className="about section">
                <p className="header2 lightBlue">About Us</p>
                <div className="aboutYap">
                    <p>FTC Team 13356 RoboForce is an experienced youth robotics team in Fremont, California, competing in the FIRST Tech Challenge.  Our mission is to Inform, Inspire, and Innovate.  We strive to promote STEM education to K-12 students across the nation and around the world.</p>
                    <p>
                    Every year, we build and program a custom robot to tackle unique challenges in the FIRST TECH CHALLENGE game.  Our team applies scientific thinking, as well as knowledge in physics, math, and engineering skills to take leaps in original projects. Our drive to continually improve and creatively solve problems give us the opportunity to always <span className="blue">Take Innovation to the Next Level</span>. 
                    </p>
                    <p>Check our our team members' bios here!</p>
                </div>
            </div>
            <div className="news section lightBlue">
                <div className="cards section">
                    <div className="horizontalCards">
                        <p className="header2 lightBlue">News & Events</p>
                        <CardHorizontalVideo className="card" title="Serimatae Podcast" content="Check out our podcast episode with FTC Seramitae!" link="https://www.youtube.com/watch?v=qo3Buj_yXDI"></CardHorizontalVideo>
                    </div>
                    <div className="verticalCards">
                        <CardVertical title="California Advocacy Leadership Conference" content="Roboforce will be attending the annual SASA (Student Association for Stem Advocacy) California Advocacy Leadership Conference (CALC) to improve their advocacy techniques and knowledge of legislative processes to ultimately work with California legislators to expand STEM education, working with other robotics teams and state leaders!
                        
                        For more info on SASA and CALC, please visit: https://mysasa.org/ and https://mysasa.org/california-advocacy-conference/ respectively"></CardVertical>
                        <CardVertical title="Student Association for Stem Advocacy" content="In July 2023, Roboforce attended the annual SASA conference in Washington DC, meeting two senators and visiting congressman's office. We were excited to expand our network with our country's legislators and meet other robotics teams, all the while working to improve STEM education across the country." img={sasa}></CardVertical>
                        <CardVertical  title="Mayland Tech Invitational" content="MTI Rocks...So proud to be invited 2 years in a row, as well as the YOUNGEST team representing CA. In June 2023, our team again competed at this prestigious tournament hosted by John Hopkins Applied Physics Lab in Maryland. Ranked 15th against 40 of the most competitive teams in the world.  So fun meeting all of these world-class FTC robotics teams.
                        
                        Congratulation to the champions and thanks to APL for hosting this event!" img={mti}></CardVertical>
                    </div>
                </div>
                <div className="past lightBlue header2 section">
                    <CardHorizontalVideo className="card"  title="CENTERSTAGE" link="https://www.youtube.com/watch?v=dPsnZpTLj9M"></CardHorizontalVideo>
                </div>
            </div>
        </div>
    )
}

export default Home;