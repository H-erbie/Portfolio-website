import React from "react";
import profileImg from "../assets/images/mee.jpg";
import { Fade} from "react-awesome-reveal";

const Header = () => {
  return (

    <section id="home">
      <div className="home-intro">
        <p className="brief-intro">Hi, I'm</p>
        <h1 className="name">Herbert Ansong Koranteng</h1>
        <p className="brief-intro">and I'm a</p>
        <h2 className="role">Frontend Developer</h2>
      </div>
      <div className="home-right">
        <div className="profile-img">
          <img src={profileImg} alt="Herbert Ansong Koranteng" />
        </div>
      </div>

    </section>

  );
};

export default Header;
