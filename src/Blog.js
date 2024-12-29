import './Blog.css';
import TopBar from './components/TopBar';

import award from './img/award.jpg';
import sasa from './img/sasa.jpg';
import calc from './img/calc.jpg';
import mti from './img/mti.jpg';
import tinkercad1 from './img/tinkercad1.jpg';
import qual from './img/qual1a.jpg';
import demo1 from './img/demo1.jpg';
import demo2 from './img/demo2.jpg';
import demo3 from './img/demo3.jpg';

function CardVertical ({title, content, img}) {
    return(
        <div className="card cardVertical">
            <img className="cardVerticalImg"src={img}></img>
            <p className="cardTitle header4 lightBlue">{title}</p>
            <p>{content}</p>
        </div>
    )
}

export function CardHorizontalText({ title, content}) {
    const renderContentWithLineBreaks = content.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));

    return (
        <div className="card cardHorizontal border">
            <div className="cardHorizontalText">
                <p className="cardTitle header4 lightBlue">{title}</p>
                <p>{renderContentWithLineBreaks}</p>
            </div>
        </div>
    );
}


export function CardHorizontal({ title, content, img }) {
    const renderContentWithLineBreaks = content.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));

    return (
        <div className="card cardHorizontal border">
            <img className="cardHorizontalImg" src={img} alt={title} />
            <div className="cardHorizontalText">
                <p className="cardTitle header4 lightBlue">{title}</p>
                <p>{renderContentWithLineBreaks}</p>
            </div>
        </div>
    );
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
    
    return(
        <>
            <TopBar/>
        <div className="content notHomeContent">
            <p className="header2">Blog</p>
            <p className="lightBlue header3">Into the Deep</p>
            <CardHorizontal title="Tinker CAD Workshop with CodeForFun" content="We had an incredible time hosting a CAD workshop in collaboration with our nonprofit partner, Code for Fun, where kids got to learn CAD in a fun, winter-themed setting! The workshop was designed to introduce children to the world of 3D design, using winter-themed projects like creating Star Trees and Snowmen. The older kids (3rd to 6th grade) dove into more detailed designs, while the younger group (5 to 8 years old) enjoyed the Snowman activity and had the chance to explore their own creative ideas. It was amazing to see the kids so engaged and excited about learning CAD, and we’re thrilled that we were invited back for the next class!" img={tinkercad1}></CardHorizontal>
            <CardHorizontal img={qual} title="Norcal Regionals 6 Years In a Row!" content="Inspire + FAC at Fresno Qualifier 🎉🎉. Thanks to our amazing partners @animatronics_robotics & @kalipsorobotics" ></CardHorizontal>
            <CardHorizontal title="Robot Demo at Robot Fair" content="At a recent robotics fair, we had an incredible time showcasing the world of FIRST competitions for all age groups—FLL, FTC, and FRC! Our team proudly displayed both our competition robot and our outreach robot, captivating the audience with hands-on demonstrations and sparking curiosity at every turn. The kids were thrilled, and the energy was contagious throughout the event!" img={demo2}></CardHorizontal>
            <CardHorizontal title="California Advocacy Leadership Conference" content="Roboforce will be attending the annual SASA (Student Association for Stem Advocacy) California Advocacy Leadership Conference (CALC) to improve their advocacy techniques and knowledge of legislative processes to ultimately work with California legislators to expand STEM education, working with other robotics teams and state leaders!" img={calc}></CardHorizontal>
            <CardHorizontal title="Union City Library Robot Demo" img={demo3} content="We had an amazing experience at a local event where we introduced FIRST competitions for all age ranges—FLL, FTC, and FRC! Our team proudly demonstrated both the competition and outreach robots, sparking excitement and curiosity in everyone we met. We also had the opportunity to engage with a parent from Friends of Children with Special Needs, exploring the possibility of future partnerships. Plus, we hosted an exciting demonstration for a local FLL team, reaching around 50 individuals in the community, leaving the kids buzzing with excitement and joy the entire time."></CardHorizontal> 
            <CardHorizontal title="Hillview Airport Robot Demo" content="Our recent
            robot demo was a fantastic event where kids had the chance to drive the robot and explore the exciting world of robotics. Participants engaged hands-on, learning valuable skills while having fun. This experience only introduced them to the fundamentals of robotics but also encouraged many to get involved in the FIRST Tech Challenge (FTC). It was a memorable day filled with learning and inspiration!" img={demo1}></CardHorizontal> 
            <CardHorizontal title="Student Association for Stem Advocacy" content="In July 2023, Roboforce attended the annual SASA conference in Washington DC, meeting two senators and visiting congressman's office. We were excited to expand our network with our country's legislators and meet other robotics teams, all the while working to improve STEM education across the country." img={sasa}></CardHorizontal>
            <CardHorizontal title="Maryland Tech Invitational" content="MTI Rocks...So proud to be invited 2 years in a row, as well as the YOUNGEST team representing CA. In June 2023, our team again competed at this prestigious tournament hosted by John Hopkins Applied Physics Lab in Maryland. Ranked 15th against 40 of the most competitive teams in the world.
                
                Congratulation to the champions and thanks to APL for hosting this event!" img={mti}></CardHorizontal>
        </div>
        </>
    )
}

export default Blog;