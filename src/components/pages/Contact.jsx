import React from 'react';
import './Contact.css'; 
import Footer from '../Footer';

const Contact = () => {
  return (
    <div className="contact-page">

  
      <div className="contact-hero">
        <h1><span className="small">lets</span> <span className="big">CONNECT</span></h1>
      </div>

      <div className="contact-main">
        <div className="contact-left">
          <img src="/images/contact-ai.jpg" alt="Connect with Driftmark" />
        </div>

        <div className="contact-right">
          <h2>Mail Us At</h2>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;
