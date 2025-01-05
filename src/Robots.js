import { Navigate, useNavigate } from 'react-router-dom';
import { CardHorizontal} from './Blog';
import TopBar from './components/TopBar';

function Robots (){
    let navigate=useNavigate();
    return(
        <div>
            <TopBar/>
                <div className="content notHomeContent">
                    <p className="header3">Robots</p>
                    
                <CardVertical title="2021-2022: Freight Frenzy"></CardVertical>
                <CardVertical title="2020-2021: Ultimate Goal"></CardVertical>
                <CardVertical title="2019-2020: Skystone"></CardVertical>
                    </div>
            </div>
    );
}

export default Robots;