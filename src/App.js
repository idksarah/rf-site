import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Robots from './Robots';
import Sponsors from './Sponsors';
import Blog from'./Blog';
import Awards from './Awards';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
    const isHomePage = location.pathname === '/Home.js';

    React.useEffect(() => {
        const rootElement = document.getElementById('root');
        if (isHomePage) {
            rootElement.className = 'homeRoot';
        } else {
            rootElement.className = 'defaultRoot';
        }
    }, [location]);
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Home" element={<Home />}/>
        <Route path="About" element={<About />}/>
        <Route path="Robots" element={<Robots />}/>
        <Route path="Blog" element={<Blog />}/>
        <Route path="Awards" element={<Awards />}/>
        <Route path="Sponsors" element={<Sponsors />}/>
      </Routes>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
export default App;
