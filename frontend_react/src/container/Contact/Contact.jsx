import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AppWrap, MotionWrap } from '../../wrapper';
import { MdEmail } from "react-icons/md";
import './Contact.scss';

function Contact(){
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_API_KEY)
      .then((result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <h2 className="head-text">Get in touch</h2>

    <div className="app__contact-cards">
        <div className="app__contact-card ">
          <a
          href="mailto:njfotinakes@gmail.com"
          className="app__flex p-text"
        >
            <MdEmail className='app__contact-email-icon'/>
            njfotinakes@gmail.com
            </a>
        </div>

      </div>

      {!isFormSubmitted ? (
<div className="app__contact-form app__flex">
    <form ref={form} onSubmit={sendEmail}>
    <div className="app__flex">
      <input className='p-text' type="text" placeholder="Your Name" name="user_name" />
      </div>

      <div className="app__flex">
      <input className="p-text" type="email" placeholder='Your Email' name="user_email" />
      </div>

      <div className='app__flex'>
      <textarea className="p-text" placeholder="Your Message" name="message" />
      </div>
      <input className="app__form-button p-text" type="submit" value="Send Message" />
    </form>
    </div>

      ) : (


        <div>
          <h3 className='head-text'>Thank you for your message.</h3>
        </div>
      )}


    
    </>
  );
};

export default AppWrap(
    MotionWrap(Contact, 'app__contact'),
    'contact',
    'app__secondarybg',
  );
