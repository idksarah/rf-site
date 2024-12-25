import Home from './Home';
import About from './About';
import Sponsors from './Sponsors';
import { Navigate, useNavigate } from 'react-router-dom';
import { CardHorizontal} from './Blog';
import TopBar from './components/TopBar';

function Robots (){
    let navigate=useNavigate();
    return(
        <div>
            <TopBar/>
                <div className="content">
                    
                <CardHorizontal content="robots rn't real actually. so. yeah. click off"></CardHorizontal>
                    </div>
            </div>
    );
}

export default Robots;