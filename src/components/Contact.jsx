import React from "react";
import { useGlobalContext } from "../Contex";

const Contact = () => {
  return (
    <section id="contact" className="sp-section">
      <h2 className="sub-head">Get in touch!</h2>
      <form className="contact-form">
        <article className="form-top">
          <div className="form-entity">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name"/>
          </div>
          <div className="form-entity">
          <label htmlFor="email">Your Email Address</label>
          <input type="email" name="email" id="email" placeholder="Enter your email address"/>
          </div>
        </article>
        <article className="form-bottom">
          <label htmlFor="message">Your Message</label>
          <textarea name="message" placeholder="Get it off your chest"></textarea>
        </article>
        <button className="btn send">Launch message🚀</button>
      </form>
    </section>
  );
};

export default Contact;
