// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
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
// import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div class="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Education></Education>
            <Experience></Experience>
            <Services></Services>
            <Skills></Skills>
            <Work></Work>
            <Contact></Contact>
            <Blog></Blog>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
