import React from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useGlobalContext } from "../Contex";
import resume from "../assets/myResume.pdf";

const Topbar = () => {
  const { theme, changeTheme } = useGlobalContext();
  window.onload = window.addEventListener("scroll", () => {
    const topbar = document.querySelector(".topbar-container");
    topbar.classList.toggle("blur-bg", window.scrollY > 0);
  });
  return (
    <div className="topbar-container">
      <div className="logo">
        her<span className="standout">β</span>ie
      </div>
      <div className="topbar-right">
        <a href={resume} download className="resume-link">
          <button className="resume btn">Download resume</button>
        </a>
        <button className="btn switch" onClick={changeTheme}>
          {theme ? <FaToggleOn /> : <FaToggleOff />}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
