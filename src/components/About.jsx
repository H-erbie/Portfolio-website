import React from "react";
import { useGlobalContext } from "../Contex";
import img from "../assets/images/me2.jpg";
import {Fade} from "react-awesome-reveal";

const About = () => {
  return (
    <>
    <section id="about" className="sp-section">
      <h2 className="sub-head">About me</h2>
      <article className="about-sections">
      <Fade cascade damping={0.5} triggerOnce fraction={0} delay={1000} duration={1000}>
          <div className="about-left">
          <div className="profile-img">
          <img src={img} alt="Herbert Ansong Koranteng" />
          </div>
          
        </div>
        <div className="about-right">
          <p className="about-info">
            I'm a self-taught frontend developer and currently a sophomore,
            studying computer science at the university of Energy and Natural
            Resources (UENR).
          </p> 
          <div className="more-info">
          <h4 className="sub-head hobby-head">My Hobbies</h4>
          <ul className="hobbies">
            <li>Coding💻</li>
            <li>Animating👾</li>
            <li>Video games🎮</li>
            <li>Anime👽</li>
          </ul>
          </div>
        </div>
        </Fade>

      </article>
    </section>

    </>  );
};

export default About;
