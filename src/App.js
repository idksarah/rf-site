import './App.css';
import Home from './Home';
import About from './About';
import Robots from './Robots';
import Sponsors from './Sponsors';
import Outreach from'./Outreach';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Home" element={<Home />}/>
        <Route path="About" element={<About />}/>
        <Route path="Robots" element={<Robots />}/>
        <Route path="Outreach" element={<Outreach />}/>
        <Route path="Sponsors" element={<Sponsors />}/>
      </Routes>
  );
}

export default App;
