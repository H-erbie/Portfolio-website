import React from "react";
import { socials } from "../Assets";

const SocialLinks = () => {
  return (
    <div className="nav-socials-container">
      <div className="nav-socials">
        {socials.map((link) => {
          const { id, url, icon } = link;
          return (
            <a href={url} key={id} className="social-link">
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
