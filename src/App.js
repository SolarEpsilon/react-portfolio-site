import React from "react";
import "./App.css";
import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import Home from "./components/home";
import Services from "./components/services";
import Skills from "./components/skills";
import Work from "./components/work";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Home></Home>
          <About></About>
          {/* <Services></Services> */}
          <Skills></Skills>
          {/* <Education></Education> */}
          <Experience></Experience>
          <Work></Work>
          <Blog></Blog>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
