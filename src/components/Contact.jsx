import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../Contex";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (done) {
      let timer = setTimeout(() => {
        setDone(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [done]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iqs6bix",
        "template_oxw67zq",
        formRef.current,
        "s8YyA5PQ29hgJNBN0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
   
    
  };
  return (
    <section id="contact" className="sp-section">
      <h2 className="sub-head">Get in touch!</h2>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
       
          <article className="form-top">
            <div className="form-entity">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                name="user_name"
                
              />
            </div>
            <div className="form-entity">
              <label htmlFor="email">Your Email Address</label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
          </article>
          <article className="form-bottom">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              placeholder="Get it off your chest"
            ></textarea>
          </article>
          <div className="bottom-bottom">
            <button className="btn send" type="submit">
              Launch message🚀
            </button>
            {done ? <p className="launched">Message launched!</p> : ""}
          </div>
      </form>
    </section>
  );
};

export default Contact;
