import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { MdEmail } from "react-icons/md";
import './Contact.scss';

function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_API_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <h2 className="head-text">Get in touch</h2>

    <div className="app__contact-cards">
        <div className="app__contact-card ">
          {/* <img src={images.email} alt="email" /> */}
          {/* <a href="mailto:njfotinakes@gmail.com" className="p-text"> */}
          <a
          href="mailto:njfotinakes@gmail.com"
          className="app__flex p-text"
        >
            <MdEmail className='app__contact-email-icon'/>
            njfotinakes@gmail.com
            </a>
        </div>
        {/* <div className="app__contact-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div> */}
      </div>


    <div className="app__contact-form app__flex">
    <form ref={form} onSubmit={sendEmail}>
    <div className="app__flex">
      {/* <label>Name</label> */}
      <input className='p-text' type="text" placeholder="Your Name" name="user_name" />
      </div>

      <div className="app__flex">
      {/* <label>Email</label> */}
      <input className="p-text" type="email" placeholder='Your Email' name="user_email" />
      </div>

      <div className='app__flex'>
      {/* <label>Message</label> */}
      <textarea className="p-text" placeholder="Your Message" name="message" />
      </div>
      <input className="app__form-button p-text" type="submit" value="Send Message" />
    </form>
    </div>
    </>
  );
};

export default AppWrap(
    MotionWrap(Contact, 'app__contact'),
    'contact',
    'app__secondarybg',
  );
