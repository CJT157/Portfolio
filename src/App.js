import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";

import './css/Global.scss';

function App() {
  return (
    <div className="base">
      <div className="navbar_container">
        <div className="navbar">
          <Link to="/Portfolio/">Home</Link>
          <Link to="/Portfolio/projects">Projects</Link>
        </div>
      </div>
      <Routes>
        <Route path="/Portfolio/" element={<Home/>}/>
        <Route path="/Portfolio/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
