import { useState } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useGlobalContext } from "./Contex";
import SocialLinks from "./components/SocialLinks";
function App() {
  const {theme} = useGlobalContext();
  return (
    <div className="App" data-theme = {theme ? 'dark' : 'light'}>
      <Topbar/>
      <Header/>
      <SocialLinks/>
      <About/>
      <Skills/>
      <Navbar/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
