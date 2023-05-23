import React, { useEffect, useState } from "react";
import { navLinks } from "../Assets";
import { useGlobalContext } from "../Contex";
const Navbar = () => {
  const { activeLink, changeActiveLink } = useGlobalContext();

  return (
    <nav className="nav-container">
      <div className="nav-items">
        {navLinks.map((link) => {
          const { id, url, icon } = link;
          return (
            <a href={`#${url}`} key={id} className="link">
              <span
                className={
                  activeLink === url ? "active-link nav-icon" : "nav-icon"
                }
                onClick={() => changeActiveLink(url)}
              >
                {icon}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
