import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";

import './App.scss';

function App() {
  return (
    <div className="base">
      <div className="navbar_container">
        <div className="navbar">
          <a href={"/Portfolio/"}>Home</a>
          <a href={"/Portfolio/projects"}>Projects</a>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/Portfolio/" element={<Home/>}/>
          <Route path="/Portfolio/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
