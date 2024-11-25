import './App.css';
import Home from './Home';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Home" element={<Home />}/>
      </Routes>
  );
}

export default App;
