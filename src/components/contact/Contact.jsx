import React, { useState, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  function handleClick() {
    setButtonText("Message sent!");

    setTimeout(() => {
      setButtonText(buttonText);
    }, 3000);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_63yhnqb",
      "template_mpgj76k",
      form.current,
      "mIv1lUHHsFoCPsu5J"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:studyspotlight@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <a
              href="https://instagram.com/"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
